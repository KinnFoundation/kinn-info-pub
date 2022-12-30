import React from 'react';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk from "algosdk";
import { CID } from "multiformats/cid";
import { NFTStorage } from 'nft.storage';
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

//let algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
//const indexerClient = new algosdk.Indexer('', 'http://testnet-idx.algonode.network', '');

const myAlgoWallet = new MyAlgoConnect();

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        resume: false,
        name: "",
        unit: "",
        description: "",
        externalURL: "",
        royalty: 0.02,
        traits: [],
        inProgress: false,
        address: localStorage.getItem("address"),  // null if nothing there
        clawback: "",
        node: 'mainnet',
        standard: 19, 
        numbering: true,
        algodClient: new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', ''),
        fees: 0,
        status: "",
        submit: true  // might want to make a popup to confirm you want to submit?
      };
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleUnitChange = this.handleUnitChange.bind(this);
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
      this.changeStandard = this.changeStandard.bind(this);
    }
    
    // want to keep NFTMetadata's default values until change
    handleNameChange(event) {
      this.setState({name: event.target.value});
    };
    handleUnitChange(event) {
      // list of files from input
      this.setState({unit: event.target.value}); 
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
    handleStatusChange(event) {
      this.setState({status: event.target.value});
    };
    handleSubmit(event) {
      event.preventDefault();
    };

    componentDidMount() {
      // check/prepare localstorage to see if we need to resume something
      if (localStorage.getItem("stage")) {
        this.setState({resume: true});  //TODO add more, need to store name and description in local storage I think
        this.setState({fees: JSON.parse(localStorage.getItem("imageHashes")).length*0.033});
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
      } else {
        this.setState({node: 'mainnet'});
        this.setState({algodClient: new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '')});
      };
    };

    changeStandard() {
      if (this.state.standard===19) {
        this.setState({standard: 69});
      } else {
        this.setState({standard: 19});
      };
    };

    async checkBalance(todos) {
      // before uploads or minting, check that they have enough algos 
      let accountInfo = await this.state.algodClient.accountInformation(this.state.address).do()
      let minimumBalance = accountInfo["min-balance"]/1e6; 
      let balance = accountInfo["amount"]/1e6;
      let fees = (todos.length*0.1) + (0.002*Math.ceil(todos.length/16)) + (todos.length*0.033); // 0.002 just to be conservative

      return [balance, fees, minimumBalance]
    };

    async connectToMyAlgo() {
      try {
        const accounts = await myAlgoWallet.connect();
        const address = accounts.map(account => account.address)[0];
        localStorage.setItem("address", address); // replace the address field with new address
        this.setState({address: address});
        this.setState({submit: true});
      } catch (err) {
        console.error(err);
      };
      //const interval = setInterval(function() {
      //  let accountInfo = await algodClient.lookupAccountByID(this.state.address).do();
      //  this.setState({heldAlgos: accountInfo["account"]["amount"]});  // update with amount of held algos every x seconds
      //}, 8000);
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
      this.setState({inProgress: true})
      if (this.state.address) {
        let place = localStorage.getItem("stage");
        let files = await document.getElementById("files").files;

        files = Array.from(files);
        let sorted = files.map(o=>o.name).sort(natsort())
        files = files.slice().sort((a, b) => sorted.indexOf(a.name) - sorted.indexOf(b.name));
        this.setState({fees: files.length*0.033});
        //this.setState({status: 'Total Fees: '+String((0.001*Math.ceil(files.length/16)) + (files.length*0.033)) + ' algo'});
        
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
                  })
                  .catch((res) => {
                    // get array of hashes from local, add ipfsHash to the array, stringify, then push it back to local
                    imageHashes.push([file_ix, res]);  // TODO: do better at updating localStorage  
                    localStorage.setItem("imageHashes", JSON.stringify(imageHashes));
                    console.log('Uploaded file: ', res);
                  });
              };
              reader.readAsArrayBuffer(file);
              localStorage.setItem("imageHashes", JSON.stringify(imageHashes))
            };  
          }; 
          localStorage.setItem("stage", "metadata");
        } else {
          this.setState({status: 'Need more ' + this.state.node + ' algo. Fees:'+String(fees)+', Balance:'+String(balance)+', Min. Balance:'+String(minimumBalance)})
          document.getElementById("files").value = null;
        };
      } else {
        this.setState({status: 'Connect wallet first! Then try again ❤️'})
        document.getElementById("files").value = null;
      };
      this.setState({inProgress: false})
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

    async mint19() {
      this.setState({inProgress: true});
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

      if (this.state.name && (place==="metadata" || place==="minting") && todos.length && (balance-fees)>minimumBalance) { 
        if (place==="metadata") {
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
          for (let i = 0; i < todos.length; i++) {
            // create metadata object, TODO: Move to under the if for after check?
            let NFTMetadata = {
              assetName: this.state.numbering ? this.state.name+" "+String(i+1+uploaded.length) : this.state.name, // start indexing at 1
              unitName: this.state.unit,
              description: this.state.description, 
              image: "ipfs://"+todos[i],  //ipfsHash for asset file
              external_url: this.state.externalURL, 
              properties: traits[i],
              royalty: (Math.round(this.state.royalty*1000)/10),
              register: "Minted by KinnDAO"
            };
            this.setState({status: 'Uploading metadata to IPFS... '+String(i)+'/'+String(todos.length)});

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
        let urls = [];
        for (let i = 0; i < metadataCIDs.length; i++) {
          let metadataCID = metadataCIDs[i];
          const decodedCID = CID.parse(metadataCID);

          const reserveAddress = algosdk.encodeAddress(  
            Uint8Array.from(Buffer.from(decodedCID.multihash.digest))
          );
          reserveAddresses.push(reserveAddress);
          
          // Derive the URL
          const getCodec = (code) => {
            // As per multiformats table
            // https://github.com/multiformats/multicodec/blob/master/table.csv#L9
            switch (code.toString(16)) {
              case "55":
                return "raw";
              case "70":
                return "dag-pb";
              default:
                return "dag-pb"
            }
          };

          const version = decodedCID.version;
          const code = decodedCID.code;
          const codec = getCodec(code);
          const url = `template-ipfs://{ipfscid:${version}:${codec}:reserve:sha2-256}`;
          urls.push(url);
        }; 

        this.setState({status: 'Please sign to mint collection...'});

        // mint and sign
        const suggestedParams = await this.state.algodClient.getTransactionParams().do();

        // Create txns.
        const assetIds = [...Array(reserveAddresses.length).keys()];
        const txns = assetIds.map((id) => ({
          ...suggestedParams,
          fee: 1000,
          flatFee: true,
          type: "acfg",
          from: this.state.address,
          assetName: this.state.numbering ? this.state.name+" "+String(id+1+uploaded.length) : this.state.name,
          assetUnitName: this.state.unit,
          assetURL: urls[id],
          assetManager: this.state.address, // It's important to set the manager to the creator so that the NFT metadata can be updated
          assetReserve: reserveAddresses[id],
          assetClawback: this.state.clawback ? this.state.clawback : undefined,
          decimals: 0,
          assetTotal: 1,  
          defaultFrozen: false
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

          this.setState({status: 'Finished minting! 🥳'});
          localStorage.clear() // last thing to do is clear state
        } catch (error) {
          this.setState({status: 'Sign canceled/failed. Click "Start Minting" to try again.'});
          console.log(error);
        };
      } else {
        this.setState({status: 'Fill out required fields or make sure you have enough algo for min balance.'}); //TODO resolve which error 
      };
      // TODO: add error handling
      //} catch (error) {
      //  this.setState({status: String(error)});
      //};
      this.setState({inProgress: false});
    };

    async mint69() {
      this.setState({inProgress: true});
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

      let urls = [];
      if (this.state.name && (place==="metadata" || place==="minting") && todos.length && (balance-fees)>minimumBalance) { 
        if (place==="metadata") {
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
          for (let i = 0; i < todos.length; i++) {
            // create metadata object, TODO: Move to under the if for after check?
            let NFTMetadata = {
              assetName: this.state.numbering ? this.state.name+" "+String(i+1+uploaded.length) : this.state.name, // start indexing at 1
              unitName: this.state.unit,
              standard: "arc69",
              description: this.state.description, 
              external_url: this.state.externalURL, 
              properties: traits[i],
              royalty: (Math.round(this.state.royalty*1000)/10),
              register: "Minted by KinnDAO"
            };
            urls.push("ipfs://"+todos[i]+"#i");

            metadataHashes.push(NFTMetadata);
            localStorage.setItem("metadataHashes", JSON.stringify(metadataHashes));
          };
          localStorage.setItem("stage", "minting");
        };

        this.setState({status: 'Please sign to mint collection...'});

        // mint and sign
        const suggestedParams = await this.state.algodClient.getTransactionParams().do();

        // Create txns.
        const enc = new TextEncoder();
        let metadataHashes = JSON.parse(localStorage.getItem("metadataHashes"));
        const assetIds = [...Array(metadataHashes.length).keys()];
        const txns = assetIds.map((id) => ({
          ...suggestedParams,
          fee: 1000,
          flatFee: true,
          type: "acfg",
          from: this.state.address,
          assetName: this.state.numbering ? this.state.name+" "+String(id+1+uploaded.length) : this.state.name,
          assetUnitName: this.state.unit,
          assetURL: urls[id],
          assetManager: this.state.address, // It's important to set the manager to the creator so that the NFT metadata can be updated
          assetReserve: this.state.address,
          assetClawback: this.state.clawback ? this.state.clawback : undefined,
          decimals: 0,
          assetTotal: 1,  
          defaultFrozen: false,
          note: enc.encode(JSON.stringify(metadataHashes[id]))
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

          this.setState({status: 'Finished minting! 🥳'});
          localStorage.clear() // last thing to do is clear state
        } catch (error) {
          this.setState({status: 'Sign canceled/failed. Click "Start Minting" to try again.'});
          console.log(error);
        };
      } else {
        this.setState({status: 'Fill out required fields or make sure you have enough algo for min balance.'}); //TODO resolve which error 
      };
      // TODO: add error handling
      //} catch (error) {
      //  this.setState({status: String(error)});
      //};
      this.setState({inProgress: false});
    };
  
    render() {
      return (
        <div>
            <h1 className="flex w-full justify-center px-6 py-3 text-2xl">KinnDAO Bulk NFT Minter</h1>
          <div className="flex w-full justify-center px-6 py-1 ">
            <form className="border w-2/4 border-gray-200 px-1 py-1 rounded min-w-[400px]" onSubmit={this.handleSubmit}>
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
                <label className='px-2 pr-4 align-middle'>{this.state.node}</label>
                <div className="form-check form-switch">
                  <Switch checked={this.state.standard===19} onChange={this.changeStandard} className={`${this.state.standard===19 ? 'bg-blue-300' : 'bg-red-300'} form-check-input appearance-none w-9 rounded-full float-left h-5 focus:outline-none cursor-pointer shadow-sm`}>
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${this.state.standard===69 ? 'translate-x-2' : '-translate-x-2'}
                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-100 ease-in-out`}
                    />
                  </Switch>
                </div>
                <label className='px-2 align-middle'>ARC{this.state.standard}</label>
                <span className="w-full py-0"></span>
                <button className="appearance-none min-w-[150px] align-middle bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight px-3 focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" onClick={this.connectToMyAlgo}>{this.state.address ? this.state.address.slice(0,5) + "..." + this.state.address.slice(-5):"Connect Wallet"}</button>
                <button className="appearance-none min-w-[20px] align-middle bg-gray-200 text-gray-700 border border-gray-200 rounded -ml-[1vmin] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" onClick={() => {localStorage.removeItem("address"); this.setState({"address": ""})}}>X</button>
              </div>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asset Name:</label>
                <input id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.name} placeholder="Required" onChange={this.handleNameChange} required={true}/>
              </div>
              <div className="mb-6">
                <label htmlFor="unit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unit Name:</label>
                <input type="textarea" id="unit" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Required" value={this.state.unit} onChange={this.handleUnitChange} required={true}/>
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description:</label>
                <input type="textarea" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Optional" value={this.state.description} onChange={this.handleDescriptionChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">External URL:</label>
                <input id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Optional" value={this.state.externalURL} onChange={this.handleExternalURLChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="royalty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Creator Royalty (%):</label>
                <input type="number" id="royalty" step="0.1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={(Math.round(this.state.royalty*1000)/10)} onChange={this.handleRoyaltyChange} min="0" />
              </div>
              <div className="form-check form-switch">
                <Switch checked={this.state.numbering} onChange={() => this.setState({numbering: !this.state.numbering})} className={`${this.state.numbering ? 'bg-blue-300' : 'bg-gray-300'} form-check-input appearance-none w-9 rounded-full float-left h-5 focus:outline-none cursor-pointer shadow-sm`}>
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${this.state.numbering ? '-translate-x-2' : 'translate-x-2'}
                      pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-100 ease-in-out`}
                  />
                </Switch>
                <label className='px-2 align-top mb-2'> Numbering: {this.state.numbering ? (this.state.name ? 'True ('+this.state.name+' 1)' : 'True') : (this.state.name ? 'False ('+this.state.name+')' : 'False')}</label>
                <input id="clawback" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 float-right align-center -mt-2" placeholder="Clawback address (optional)" value={this.state.clawback} onChange={(e) => this.setState({clawback: e.target.value})} />
              </div>
              <div className="mb-6 mt-4">
                <div className="flex relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload NFT Folder to IPFS:</label>
                  <a className="block absolute right-0 mb-2 text-sm font-medium text-blue-700 dark:text-blue-300 px-2" target="_blank" rel="noreferrer" href="https://kinntools.s3.us-east-1.amazonaws.com/example_nft_folder.JPG" download="example_nft_folder.JPG"> Download example folder </a>
                </div>
                <input className="appearance-none align-middle block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 w-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="file" id="files" webkitdirectory="true" directory="true" disabled={this.state.inProgress} multiple onChange={this.uploadImages}/>
              </div>
              <div className="mb-6">
                <div className="flex relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload Trait CSV:</label>
                  <a className="block absolute right-0 mb-2 text-sm font-medium text-blue-700 dark:text-blue-300 px-2" href="https://kinntools.s3.us-east-1.amazonaws.com/example_traits.csv" download="example_traits.csv"> Download example csv </a>
                </div>
                <input className="appearance-none align-middle block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 w-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="file" id="traits" onChange={this.getTraits}/>
                </div>
              <p className="text-gray-500">Fees: 0.033 algo/NFT + 0.001/txn</p>
              <div className="flex">
                <input type="submit" className="appearance-none block bg-gray-200 text-blue-700 border border-blue-700 disabled:border-red-400 disabled:text-red-400 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" disabled={(!this.state.submit) || this.state.inProgress} value={this.state.resume ? "Resume Minting" : "Start Minting"} onClick={() => this.state.standard===19 ? this.mint19() : this.mint69()} />
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
// want the submit button to be disabled or at least pop up saying collection not minted
//<button onClick={() => this.uploadImages("")}>TEST</button>
//<button onClick={() => console.log(JSON.parse(localStorage.getItem("imageHashes")))}>print</button>
export default EssayForm;