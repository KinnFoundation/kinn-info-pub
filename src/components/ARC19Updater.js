import React from 'react';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk from "algosdk";
import { CID } from "multiformats/cid";
import * as digest from "multiformats/hashes/digest"
import * as mfsha2 from 'multiformats/hashes/sha2'
import { NFTStorage } from "nft.storage";
import Papa from "papaparse";
import natsort from "natsort";
import { Switch } from '@headlessui/react'

var Buffer = require('buffer/').Buffer;
window.Buffer = Buffer;

const wait = ms => new Promise(r => setTimeout(r, ms));

const retryOperation = (operation, delay, retries) => new Promise((resolve, reject) => {
  return operation()
    .then(resolve)
    .catch((reason) => {
      if (retries > 0) {
        return wait(delay)
          .then(retryOperation.bind(null, operation, delay, retries - 1))
          .then(resolve)
          .catch(reject);
      }
      return reject(reason);
    });
});

const myAlgoWallet = new MyAlgoConnect();

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        resume: false,
        assets: [],
        assetString: "",
        allAssets: [], // assets loaded from wallet connect
        assetJSONs: {},
        metadata: "",
        selectedAsset: 0,
        originalVersion: {},
        originalCodec: {},
        originalClawback: {},
        originalFreeze: {},
        name: "",
        description: "",
        externalURL: "",
        royalty: 0.02,
        traits: [],
        address: localStorage.getItem("address"),
        node: 'mainnet',
        numbering: true,
        algodClient: new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', ''),
        indexerClient: new algosdk.Algodv2('', 'https://mainnet-idx.algonode.network', ''),
        fees: 0,
        status: "",
        submit: true  // might want to make a popup to confirm you want to submit?
      };
      
      this.handleAssetStringChange = this.handleAssetStringChange.bind(this);
      this.handleMetadataChange = this.handleMetadataChange.bind(this);
      this.handleMetadataStringChange = this.handleMetadataStringChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleExternalURLChange = this.handleExternalURLChange.bind(this);
      this.handleRoyaltyChange = this.handleRoyaltyChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.connectToMyAlgo = this.connectToMyAlgo.bind(this);
      this.checkBalance = this.checkBalance.bind(this);
      this.uploadCheck = this.uploadCheck.bind(this);
      this.uploadImages = this.uploadImages.bind(this);
      this.getTraits = this.getTraits.bind(this);
      this.changeNode = this.changeNode.bind(this);
    }
    
    // want to keep NFTMetadata's default values until change
    handleMetadataChange(event) {
      this.setState({metadata: event.target.value});
    };
    handleNameChange(event) {
      this.setState({name: event.target.value});
    };
    handleDescriptionChange(event) {
      this.setState({description: event.target.value});
    };
    handleExternalURLChange(event) {
      this.setState({externalURL: event.target.value});
    };
    handleRoyaltyChange(event) {
      this.setState({royalty: event.target.value/100});
    };
    handleAssetStringChange(event) {
      // list of files from input
      this.setState({assetString: event.target.value}); 
      try {
        this.setState({assets: JSON.parse("["+event.target.value+"]")});
        this.setState({status: ""});
      } catch {
        this.setState({status: "Invalid asset list format"});
      };
    };
    handleStatusChange(event) {
      this.setState({status: event.target.value});
    };
    handleSubmit(event) {
      event.preventDefault();
    };
    handleMetadataStringChange(assetID){
      this.setState({metadata: JSON.stringify(this.state.assetJSONs[assetID])})
      this.setState({selectedAsset: assetID})
      this.setState({status: "Editing asset " + String(assetID)})
    };

    componentDidMount() {
      // check/prepare localstorage to see if we need to resume something
      if (localStorage.getItem("stage")) {
        this.setState({resume: true});  //TODO add more, need to store name and description in local storage I think
        this.setState({fees: JSON.parse(localStorage.getItem("imageHashes")).length*0.1});
      } else {  // beginning not resuming, no value for stage
        localStorage.setItem("stage", "");
        localStorage.setItem("imageHashes", JSON.stringify([]));
        localStorage.setItem("metadataHashes", JSON.stringify([]));
      };
    };

    changeNode() {
      if (this.state.node==='mainnet') {
        this.setState({node: 'testnet'});
        this.setState({algodClient: new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '')});
        let idxr = new algosdk.Algodv2('', 'https://testnet-idx.algonode.network', '');
        this.setState({indexerClient: idxr});
        this.getAssets(this.state.address, idxr)
      } else {
        this.setState({node: 'mainnet'});
        this.setState({algodClient: new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '')});
        let idxr = new algosdk.Algodv2('', 'https://mainnet-idx.algonode.network', '');
        this.setState({indexerClient: idxr});
        this.getAssets(this.state.address, idxr)
      };
    };

    async getAssets(addr, idxr) {
      if (addr) {
        let response;
        if (idxr) {
          try {  // TODO: improve this logic to retry more than once
            response = await idxr.accountInformation(addr).do();
          } catch {
            response = await idxr.accountInformation(addr).do();
          };
        } else {
          try {
            response = await this.state.indexerClient.accountInformation(addr).do();
          } catch {
            response = await this.state.indexerClient.accountInformation(addr).do();
          };
        };
        let assets = response["account"]["created-assets"];
        let validAssets = [];
        let assetJSONs = {};
        let ogVersions = {};
        let ogCodecs = {};
        let ogClawback = {};
        let ogFreeze = {};
        for (let i = 0; i < assets.length; i++) {
          if (!assets[i]["deleted"] && assets[i]["params"]["manager"]===addr) {
            let url = assets[i]["params"]["url"];
            if (url && url.includes("ipfscid:1:raw")) {
              const cidComponents = url.split(':');
              const [, , cidVersion, cidCodec, asaField, cidHash] = cidComponents;
              const addr = algosdk.decodeAddress(assets[i]["params"]["reserve"])["publicKey"];
              const mhdigest = digest.create(mfsha2.sha256.code, addr);

              let cidCodecCode
              if (cidCodec === "raw") {
                  cidCodecCode = 0x55;
              } else if (cidCodec === "dag-pb") {
                  cidCodecCode = 0x70;
              };
              if (parseInt(cidVersion)===1 && cidCodec==="raw") {
                validAssets.push(assets[i]["index"]);
                
                ogVersions[assets[i]["index"]] = parseInt(cidVersion);
                ogCodecs[assets[i]["index"]] = cidCodecCode;
                ogClawback[assets[i]["index"]] = assets[i]["params"]["clawback"];
                ogFreeze[assets[i]["index"]] = assets[i]["params"]["freeze"];
  
                const cid = CID.create(parseInt(cidVersion), cidCodecCode, mhdigest).toString()
                
                const res = await fetch("https://ipfs.algonode.xyz/ipfs/"+cid, {
                  method: "GET",
                });
                let assetJSON = await res.json()
                assetJSONs[assets[i]["index"]] = assetJSON;
              };
            }; 
          };
        };
        this.setState({originalVersion: ogVersions});
        this.setState({originalCodec: ogCodecs});
        this.setState({originalClawback: ogClawback});
        this.setState({originalFreeze: ogFreeze});
        this.setState({allAssets: validAssets});
        this.setState({assetJSONs: assetJSONs});
        this.setState({assets: validAssets});  // set it here, but can be edited/reset in the assets textarea
        this.setState({assetString: JSON.stringify(validAssets).slice(1,-1).replaceAll("'", "").replaceAll('"', "")}); 
        this.setState({status: "Loaded only assets with valid url field"})
      };
    };

    async checkBalance(todos) {
      // before uploads or minting, check that they have enough algos 
      let accountInfo = await this.state.algodClient.accountInformation(this.state.address).do()
      let minimumBalance = accountInfo["min-balance"]/1e6; 
      let balance = accountInfo["amount"]/1e6;
      // TODO: calculate fees dynamically
      let fees = 0.101
      //let fees = (todos.length*0.1) + (0.002*Math.ceil(todos.length)) + (todos.length*0.01); // 0.002 just to be conservative

      return [balance, fees, minimumBalance];
    };

    async connectToMyAlgo() {
      try {
        const accounts = await myAlgoWallet.connect();
        const address = accounts.map(account => account.address)[0];
        localStorage.setItem("address", address); // replace the address field with new address
        this.setState({address: address});
        this.setState({submit: true});
        this.getAssets(address, this.state.indexerClient);
      } catch (err) {
        console.error(err);
      };
    };

    uploadCheck(n, interval) {
      let imageHashes = JSON.parse(localStorage.getItem("imageHashes"));
      if (imageHashes.length === n) {
        this.setState({status: String(n)+' files uploaded to IPFS! ✅'})
        clearInterval(interval);  // when it's finished, clear
      } else {
        this.setState({status: 'Please wait: Uploading to IPFS in batches of 5 every ~4s... '+String(imageHashes.length)+'/'+String(n)});
      };
    };

    async uploadImages() {
      if (this.state.address && this.state.metadata.includes("image")) {
        let place = localStorage.getItem("stage");
        let files = await document.getElementById("files").files;

        files = Array.from(files);
        //let sorted = files.map(o=>o.name).sort(natsort())
        //files = files.slice().sort((a, b) => sorted.indexOf(a.name) - sorted.indexOf(b.name));
        this.setState({fees: files.length*0.1});
        
        let uploaded = 0;
        let [balance, fees, minimumBalance] = await this.checkBalance(files);
        if ((balance-fees)>minimumBalance) {
          if (!place) { // starting minting for the first time
            localStorage.setItem("stage", "images");
          } else if (place==="images") {  // resuming image uploads starting where we left off
            uploaded = JSON.parse(localStorage.getItem("imageHashes")).length;
            if (uploaded === files.length) {  // check if everything was minted and stage wasn't properly set
              this.setState({status: 'All files were already uploaded, resume minting.'});
              localStorage.setItem("stage", "metadata");
              return
            };
            files = files.slice(uploaded);
          } else {
            if (localStorage.getItem("imageHashes").length === files.length) {
              this.setState({status: 'All files were already uploaded, resume minting.'});
              return // end here, no need to upload any images, everything should be in local 
            };  // TODO: add else? just pass?
          };
          
          // start checking for files
          var interval = setInterval(() => {this.uploadCheck(files.length, interval)}, 1000);
          let imageHashes = await JSON.parse(localStorage.getItem("imageHashes"));
          const batch_size = 5;
          for (let j = 0; j < Math.ceil(files.length/batch_size); j++) {
            await new Promise(r => setTimeout(r, 3700));
            for (let i = (j*batch_size); i < Math.min(files.length, (j+1)*batch_size); i++) {
              let file = files[i];
              let reader = new FileReader();
              let file_ix = i+uploaded;
              reader.onload = (event) => {
                // TODO: change to bulk upload, check file
                const nftstorage = new NFTStorage({ token: process.env.REACT_APP_NFTSTORAGE_KEY });  // I think it creates its own rate limiter?
                retryOperation(() => nftstorage.storeBlob(new Blob([event.target.result])), 5000, 20)
                  .then((res) => {
                    // get array of hashes from local, add ipfsHash to the array, stringify, then push it back to local
                    imageHashes.push([file_ix, res]);  // TODO: do better at updating localStorage  
                    localStorage.setItem("imageHashes", JSON.stringify(imageHashes));
                    console.log('Uploaded file: ', res);
                    let newImageMeta = JSON.parse(this.state.metadata);
                    newImageMeta["image"] = "ipfs://"+imageHashes[0][1];
                    this.setState({metadata: JSON.stringify(newImageMeta)});
                  })
                  .catch((res) => {
                    // get array of hashes from local, add ipfsHash to the array, stringify, then push it back to local
                    imageHashes.push([file_ix, res]);  // TODO: do better at updating localStorage  
                    localStorage.setItem("imageHashes", JSON.stringify(imageHashes));
                    console.log('Uploaded file: ', res);
                    let newImageMeta = JSON.parse(this.state.metadata);
                    newImageMeta["image"] = imageHashes[0][1];
                    this.setState({metadata: JSON.stringify(newImageMeta)});
                  });
              };
              reader.readAsArrayBuffer(file);
              localStorage.setItem("imageHashes", JSON.stringify(imageHashes))
              if (imageHashes) {
                let newImageMeta = JSON.parse(this.state.metadata);
                console.log(imageHashes)
                newImageMeta["image"] = imageHashes[0][1];
                this.setState({metadata: JSON.stringify(newImageMeta)});
              };
            };  
          }; 
          localStorage.setItem("stage", "metadata");
        } else {
          this.setState({status: 'Insufficient Funds. Fees:'+String(fees)+', Balance:'+String(balance)+', Min. Balance:'+String(minimumBalance)})
          document.getElementById("file").value = null;
        };
      } else {
        this.setState({status: 'Connect wallet and select ASA first! Then try again ❤️'})
        document.getElementById("file").value = null;
      };
    };

    async getTraits() {
      // this assumes that the order of the rows === order of the image files in the folder
      const file = await document.getElementById("traits").files[0];
      let reader = new FileReader();

      reader.onload = (event) => {
        let raw = Papa.parse(event.target.result).data;
        let columns = raw[0];
        let traits = [];
        for (let i of raw.slice(1)) { // every row i is array of traits for 1 image raw.slice(1)===[[a1, b1], [a2, b2]]
          let t = {};
          for (let j in columns) {  // every index j is a column that is <= i.length
            t[columns[j]] =  i[j];
          };
          traits.push(t);  // seems to always have an extra empty row but will index/mint by imageHashes --> ignores extra rows
        };
        this.setState({traits: traits});
      };
      reader.readAsText(file);  
    }

    async mint() {
      let place = localStorage.getItem("stage");
      let uploaded = [];
      let todos;

      // TODO: clean up this code
      if (place==="images") {  // haven't finished uploading images, compare files with localstorage to see progress
        this.setState({status: 'NFT folder upload is incomplete, please reupload.'});
      } else if (place==="metadata") { // haven't finished minting, but have finished uploading
        // double check if we've already minted some metadata files
        uploaded = JSON.parse(localStorage.getItem("metadataHashes"));
        // if we have already uploaded some, we need to remove those from the todos
        todos = JSON.parse(localStorage.getItem("imageHashes")).slice(uploaded.length);
      } else {  // if place===minting, just move on, I think we still need todos for checkBalance
        todos = JSON.parse(localStorage.getItem("imageHashes"));  // init todos with all images if starting fresh
      };
      
      let [balance, fees, minimumBalance] = [0, 0, 0];
      if (this.state.address) {
        [balance, fees, minimumBalance] = await this.checkBalance(todos);
        if ((balance-fees)>minimumBalance) {
          todos = JSON.parse(localStorage.getItem("imageHashes")).slice(uploaded.length);  // update todos to imageHashes after upload
        } else {
          this.setState({status: 'Insufficient Funds. Fees:'+String(fees)+', Balance:'+String(balance)+', Min. Balance:'+String(minimumBalance)});
          return
        };
      } else {
        this.setState({status: 'Connect wallet first! Then try again ❤️'});
        return
      };

      // TODO: place management (place==="metadata" || place==="minting")
      if (this.state.metadata && (balance-fees)>minimumBalance) { 
        //TODO: place==="metadata" place management 
        if (this.state.metadata) {
          let traits = [];
          // check if we've got traits
          if (this.state.traits.length) {
            traits = this.state.traits.slice(uploaded.length)  // must be same index as todos
          } else {
            traits = this.state.traits
          };
          
          let metadataHashes = JSON.parse(localStorage.getItem("metadataHashes"));
          let sorted = todos.map(o=>o[0]).sort(natsort());
          todos = todos.slice().sort((a, b) => sorted.indexOf(a[0]) - sorted.indexOf(b[0]));
          todos = todos.map(o=>o[1]);
          for (let i = 0; i < 1; i++) {  // TODO: add back <todos.length and keep track of todos place
            // create metadata object, TODO: Move to under the if for after check?
            let NFTMetadata = JSON.parse(this.state.metadata);
            this.setState({status: 'Uploading metadata to IPFS... '});  // TODO: +String(i)+'/'+String(todos.length)

            const nftstorage = new NFTStorage({ token: process.env.REACT_APP_NFTSTORAGE_KEY2 });
            // retry pattern? seems unnecessary because it just goes one at a time
            const metadataCID = await nftstorage.storeBlob(new Blob([JSON.stringify(NFTMetadata)]));
            metadataHashes.push(metadataCID);
            console.log("Minted metadata: ", metadataCID)
            localStorage.setItem("metadataHashes", JSON.stringify(metadataHashes));
          };
          localStorage.setItem("stage", "minting");
        };

        // starts here when just finishing up minting
        let metadataCIDs = JSON.parse(localStorage.getItem("metadataHashes"));
        let reserveAddresses = [];
        //let urls = [];
        for (let i = 0; i < metadataCIDs.length; i++) {
          let metadataCID = metadataCIDs[i];
          const decodedCID = CID.parse(metadataCID);

          // check if codec and version match the url
          //const version = decodedCID.version;
          //const code = decodedCID.code;

          /*console.log(this.state.originalVersion[this.state.selectedAsset], this.state.originalCodec[this.state.selectedAsset])
          console.log(decodedCID.code, decodedCID.version, decodedCID)
          if (this.state.originalVersion[this.state.selectedAsset]!==version || this.state.originalCodec[this.state.selectedAsset]!==code) {
            console.log("we changed something?")
            //if (this.state.originalVersion===0) {
            //  decodedCID.toV0();
            //};
            //metadataCID = new CID(metadataCID).toV1().toString('base32')
          };
          //console.log(decodedCID.code, decodedCID.version, decodedCID)
          try {
            const cid = CID.create(
              this.state.originalVersion[this.state.selectedAsset], 
              this.state.originalCodec[this.state.selectedAsset], 
              decodedCID.multihash.digest
            );
  
            console.log(cid)
  
            const reserveAddress = algosdk.encodeAddress(  
              Uint8Array.from(Buffer.from(cid.multihash.digest))
            );
            reserveAddresses.push(reserveAddress);
            console.log(reserveAddress)
          } catch {}
          */
          const reserveAddress = algosdk.encodeAddress(  
            Uint8Array.from(Buffer.from(decodedCID.multihash.digest))
          );
          reserveAddresses.push(reserveAddress);

          //const url = `template-ipfs://{ipfscid:${version}:${codec}:reserve:sha2-256}`;
          //urls.push(url);
        }; 
        this.setState({status: 'Please sign to update asset...'});

        // mint and sign
        const suggestedParams = await this.state.algodClient.getTransactionParams().do();

        // Create txns.
        //algosdk.makeAssetConfigTxnWithSuggestedParams
        const assetIds = [...Array(reserveAddresses.length).keys()];
        const txns = assetIds.map((id) => ({
          ...suggestedParams,
          fee: 1000,
          flatFee: true,
          type: "acfg",
          from: this.state.address,
          assetIndex: this.state.selectedAsset,  // TODO: support multi asset indexing via for loop or something
          assetReserve: reserveAddresses[id],
          assetManager: this.state.address,
          assetClawback: this.state.originalClawback[this.state.selectedAsset],
          assetFreeze: this.state.originalFreeze[this.state.selectedAsset]
        }));

        txns.push({
          ...suggestedParams,
          fee: 1000,
          flatFee: true,
          type: "pay",
          amount: parseInt(this.state.fees*1e6),
          from: this.state.address,
          to: process.env.REACT_APP_FEE_ADDRESS_KEY
        });

        for (let i = 0; i < txns.length; i += 16) {
          const group = txns.slice(i, i + 16);
          const groupId = algosdk.computeGroupID(group);
          for (const txn of group) {
            txn.group = groupId;
          }
        };

        try {
          // Sign txns.
          const blobs = await myAlgoWallet.signTransaction(txns).then((txns) =>
            txns.map((txn) => txn.blob)
          );

          // Create jobs.
          const blobGroups = [];
          for (let i = 0; i < blobs.length; i += 16) {
            const group = blobs.slice(i, i + 16);
            blobGroups.push(group);
          };
          const jobs = blobGroups.map(
            (group) => async () =>
              this.state.algodClient
                .sendRawTransaction(group)
                .do()
                .then(({ txId, message }) => txId || Promise.reject(message))
          );

          // Do jobs.
          for (const job of jobs) {
            // Try to do the job.
            try {
              await job();
            } catch (err) {
              alert(err);
              return;
            }
          };

          this.setState({status: 'Finished updating! 🥳'});
          localStorage.clear() // last thing to do is clear state
        } catch (error) {
          this.setState({status: 'Sign canceled/failed. Click "Update" to try again.'});
          console.log(error);
        };
      } else {
        this.setState({status: 'Fill out required fields or make sure you have enough algo for min balance.'}); //TODO resolve which error 
      };
      // TODO: add error handling
      //} catch (error) {
      //  this.setState({status: String(error)});
      //};
    };
  
    render() {
      return (
        <div>
          <h1 className="flex w-full justify-center px-6 py-3 text-2xl">ARC19 Updater</h1>
          <div className="flex w-full justify-center px-6 py-1 ">
            <form className="border w-2/4 border-gray-200 px-1 py-1 rounded" onSubmit={this.handleSubmit}>
              <div className="flex w-full h-6">  
                <div className="form-check form-switch">
                  <Switch checked={this.state.node==='mainnet'} onChange={this.changeNode} className={`${this.state.node==='mainnet' ? 'bg-blue-300' : 'bg-gray-300'} form-check-input appearance-none w-9 rounded-full float-left h-5 focus:outline-none cursor-pointer shadow-sm`}>
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${this.state.node==='testnet' ? 'translate-x-2' : '-translate-x-2'}
                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-100 ease-in-out`}
                    />
                  </Switch>
                </div>
                <label className='px-2 align-middle'>{this.state.node}</label>
                <span className="w-full py-0"></span>
                <button className="appearance-none min-w-[150px] align-middle bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight px-3 focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" onClick={this.connectToMyAlgo}>{this.state.address ? this.state.address.slice(0,5) + "..." + this.state.address.slice(-5):"Connect Wallet"}</button>
                <button className="appearance-none min-w-[20px] align-middle bg-gray-200 text-gray-700 border border-gray-200 rounded -ml-[1vmin] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" onClick={() => {localStorage.removeItem("address"); this.setState({"address": ""})}}>X</button>
              </div>
              <br></br>
              <p> {"Connect wallet and editable assets will appear. NOTE: Only works for NFTs with url: template-ipfs://{ipfscid:1:raw:reserve:sha2-256}"}</p>
              <br></br>
              <div className="mb-6">
                <label htmlFor="assets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asset IDs to Update (optional):</label>
                <input id="assets" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.assetString} placeholder="Required" onChange={this.handleAssetStringChange} required={true}/>
              </div>
              <div className="mb-6">
                {(() => {
                  let btns = []
                  for (let i=0;i<this.state.assets.length;i++) {
                    btns.push(<button className={this.state.assets[i]===this.state.selectedAsset ? "border p-1 m-1 hover:bg-blue-300 bg-blue-100" : "border p-1 m-1 hover:bg-blue-300"} key={i} onClick={() => this.handleMetadataStringChange(this.state.assets[i])}>{this.state.assets[i]}</button>)
                  }
                  return btns
                })()}
              </div>
              <div className="mb-6">
                <textarea id="assetJSON" rows="4" className="overflow-y-scroll bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={(this.state.metadata)} placeholder="Metadata will load here to edit, just connect wallet and click an ASA" onChange={this.handleMetadataChange} />
              </div>
              <div className="mb-6 mt-4">
                <div className="flex relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload new image to IPFS:</label>
                </div>
                <input className="appearance-none align-middle block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 w-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="file" id="files" onChange={this.uploadImages}/>
              </div>
              
              <p className="text-gray-500">Fees: 0.1 algo/NFT + 0.001/txn</p>
              <div className="flex">
                <input type="submit" className="appearance-none block bg-gray-200 text-blue-700 border border-blue-700 disabled:border-red-400 disabled:text-red-400 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" disabled={!this.state.submit} value={this.state.resume ? "Resume Updating" : "Update"} onClick={() => this.mint()} />
                <a className="block align-middle justify-center text-center m-auto" {... this.state.status.includes('Finished minting!') ? {href: "https://"+(this.state.node==="mainnet" ? "" : this.state.node+".")+"algoexplorer.io/address/"+this.state.address, target:"_blank", className:"block align-middle justify-center text-center m-auto text-blue-700 underline"} : {}}>{this.state.status}</a>
              </div>
            </form>
          </div>
          <div className="flex">
            <button className="text-gray-500 border border-gray-500 bg-green-100 rounded h-6 px-1 active:bg-green-500" onClick={() => {localStorage.clear(); window.location.reload();}}> Clear State </button>
            <p className="text-gray-500 border border-white rounded h-6 px-2">{this.state.resume ? "State: Resuming unfinished mint, please re-enter all fields" : "State: New mint"}</p>
          </div>
        </div>
      );
    };
  };
export default EssayForm;