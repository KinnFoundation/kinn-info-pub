import React from 'react';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk from "algosdk";
//import crypto from "crypto-browserify"
import { Switch } from '@headlessui/react'

var Buffer = require('buffer/').Buffer;
window.Buffer = Buffer;

const myAlgoWallet = new MyAlgoConnect();

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        assets: [],
        assetString: "",
        address: localStorage.getItem("address"),
        node: 'mainnet',
        whichAssets: "correct",  // or all for include all
        creators: {},  // id: addr
        algodClient: new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', ''),
        indexerClient: new algosdk.Indexer('', 'https://mainnet-idx.algonode.network', ''),
        status: "",
        submit: true  // might want to make a popup to confirm you want to submit?
      };
  
      this.handleAddressChange = this.handleAddressChange.bind(this);
      this.handleAssetStringChange = this.handleAssetStringChange.bind(this);
      this.handleWhichAssetsChange = this.handleWhichAssetsChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.connectToMyAlgo = this.connectToMyAlgo.bind(this);
      this.checkBalance = this.checkBalance.bind(this);
      this.changeNode = this.changeNode.bind(this);
      this.getAssets = this.getAssets.bind(this);
    }
    
    async handleAddressChange(event) {
      this.setState({address: event.target.value}); 
      // get all eligible assets
      this.getAssets(event.target.value);
      //this.setState({assets: JSON.parse("["+event.target.value+"]")});
    };
    handleAssetStringChange(event) {
      // list of files from input
      this.setState({assetString: event.target.value}); 
      this.setState({whichAssets: "custom"}); 
      try {
        this.setState({assets: JSON.parse("["+event.target.value+"]")});
        this.setState({status: ""});
      } catch {
        this.setState({status: "Invalid asset list format"});
      };
      //console.log(JSON.parse("["+event.target.value+"]"))
    };
    async handleWhichAssetsChange(which) { 
      console.log(which)
      this.setState({whichAssets: which}); 
      this.getAssets(this.state.address, null, null, which);
    };
    handleStatusChange(event) {
      this.setState({status: event.target.value});
    };
    handleSubmit(event) {
      event.preventDefault();
    };

    async getAssets(addr, ac, idxr, which) {
      if (addr) {
        let indexer;
        if (idxr) {
          indexer = idxr;
          console.log("using idxr")
        } else {
          indexer = this.state.indexerClient;
          console.log("using state")
        };

        let algod;
        if (ac) {
          algod = ac;
          console.log("using ac")
        } else {
          algod = this.state.algodClient;
          console.log("using state")
        };

        if (!which) {
          which = this.state.whichAssets;
        };

        let assets;
        let createdAssets;
        if (which==="correct") {  // only use accountInformation
          let accResponse;
          try {  // TODO: improve this logic to retry more than once
            accResponse = await algod.accountInformation(addr).do()
          } catch {
            accResponse = await algod.accountInformation(addr).do()
          };

          assets = accResponse["assets"]
          createdAssets = accResponse["created-assets"].map(i => i.index); // don't add assets you've created
        } else {  // ===all use indexer lookupAccountAssets with includeAll to get weird assets
          let response;
          try {  // TODO: improve this logic to retry more than once
            response = await indexer.lookupAccountAssets(addr).includeAll().do()
          } catch {
            response = await indexer.lookupAccountAssets(addr).includeAll().do()
          };

          let accResponse;
          try {  // TODO: improve this logic to retry more than once
            accResponse = await algod.accountInformation(addr).do()
          } catch {
            accResponse = await algod.accountInformation(addr).do()
          };

          assets = response["assets"]
          createdAssets = accResponse["created-assets"].map(i => i.index); // don't add assets you've created
        };
        

        let outAssets = [];
        for (let i = 0; i < assets.length; i++) {
          if (assets[i]["amount"]===0 && !assets[i]["is-frozen"] && !createdAssets.includes(assets[i]["asset-id"])) {
            outAssets.push(assets[i]["asset-id"])
          };
        };

        // assemble list of creators, optimize by getting first creator, then checking for matches with their created assets
        this.setState({status: "Fetching more info... One sec"})
        let creators = {};
        createdAssets = [];
        let creator = "";
        for (let i = 0; i < outAssets.length; i++) { //  go backwards to avoid skipping while removing array elements
          this.setState({status: "Fetching "+String(i)+"/ "+ String(outAssets.length)+"... One sec"})
          if (!createdAssets.includes(outAssets[i])) {
            if (which==="correct") {
              creator = await indexer.searchForAssets().index(outAssets[i]).do();
            } else {
              creator = await indexer.searchForAssets().index(outAssets[i]).includeAll().do();
            };
            creator = creator["assets"]["0"]["params"]["creator"];  // must be on a new line
            creators[outAssets[i]] = creator;

            let response;
            if (which==="correct") {
              try {  // TODO: improve this logic to retry more than once
                response = await algod.accountInformation(creator).do();
              } catch {
                response = await algod.accountInformation(creator).do();
              };
              createdAssets = response["created-assets"].map(i => i.index);
            } else {  // need to use indexer to check for all created assets
              // TODO: ADD While Loop HERE! createdAssets.length is only 100
              try {  // TODO: improve this logic to retry more than once
                response = await indexer.lookupAccountCreatedAssets(addr).includeAll().do();
              } catch {
                response = await indexer.lookupAccountCreatedAssets(addr).includeAll().do();
              };
              createdAssets = response["assets"].map(i => i.index);
            };
          } else {  // if asset-id is in created assets from previous iter, then no need to issue additional indexer call
            creators[outAssets[i]] = creator;
          };
        };
        this.setState({assetString: JSON.stringify(outAssets).slice(1,-1)});
        this.setState({assets: outAssets});
        this.setState({creators: creators})
        this.setState({status: "Ready to opt out of "+String(outAssets.length)+" assets"})
      };
    };

    changeNode() {
      if (this.state.node==='mainnet') {
        this.setState({node: 'testnet'});
        let ac = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '')
        this.setState({algodClient: ac});
        let idxr = new algosdk.Indexer('', 'https://testnet-idx.algonode.network', '');
        this.setState({indexerClient: idxr});
        this.getAssets(this.state.address, ac, idxr)
      } else {
        this.setState({node: 'mainnet'});
        let ac = new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '');
        this.setState({algodClient: ac});
        let idxr = new algosdk.Indexer('', 'https://mainnet-idx.algonode.network', '');
        this.setState({indexerClient: idxr});
        this.getAssets(this.state.address, ac, idxr)
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
        const addresses = accounts.map(account => account.address);
        localStorage.setItem("address", addresses[0]); // replace the address field with new address
        this.setState({address: addresses[0]});
        this.setState({submit: true});

        this.getAssets(addresses[0]);
      } catch (err) {
        console.error(err);
      };
    };

    async out() {
      if (this.state.assets.length) {
        // create all txns: 1) Opt in for receiver 2) send from sender to receiver 3) OPTIONAL: opt out of sent assets at the end
        const suggestedParams = await this.state.algodClient.getTransactionParams().do();
        
        let optOutTxns = [];
        // Opt-Out txns.
        optOutTxns = this.state.assets.map((id) => ({
            ...suggestedParams,
            fee: 1000,
            flatFee: true,
            type: "axfer",
            assetIndex: id, 
            from: this.state.address,
            to: this.state.address,
            closeRemainderTo: this.state.creators[id],
            amount: 0
        }));

        for (let i = 0; i < optOutTxns.length; i += 16) {
          const group = optOutTxns.slice(i, i + 16);
          const groupId = algosdk.computeGroupID(group);
          for (const txn of group) {
              txn.group = groupId;
          };
        };

        // sign and send one at a time
        try {
          // Sign txns in parts (once for each sender)          
          let blobs = [];
          blobs = await myAlgoWallet.signTransaction(optOutTxns).then((optOutTxns) =>
            optOutTxns.map((txn) => txn.blob)
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
          
          // 1) Send opt ins 
          for (const job of jobs) {
            // Try to do the job.
            try {
              await job();
            } catch (err) {
              alert(err);
              return;
            }
          };

          this.setState({status: 'Finished! 🥳'});
        } catch (error) {
          this.setState({status: "Something went wrong, check right click --> inspect element --> console"});
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
          <h1 className="flex w-full justify-center px-6 py-3 text-2xl">Bulk ASA Opt-Out</h1>
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
              <div className="flex mb-6">
                <button className={"border rounded px-6 " + ((this.state.whichAssets==="all") ? "bg-blue-100" : "bg-gray-100")} onClick={() => this.state.whichAssets==="all" ? this.handleWhichAssetsChange("correct") : this.handleWhichAssetsChange("all")}>Find Missing Assets</button>
              </div>
              <div className="mb-6">
                <label htmlFor="assets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ASAs to Opt-Out:</label>
                <input type="textarea" id="assets" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Connect wallet auto fetches all 0 balance ASAs" value={this.state.assetString} onChange={this.handleAssetStringChange} required={true}/>
              </div>
              <div className="flex">
                <input type="submit" className="appearance-none block bg-gray-200 text-blue-700 border border-blue-700 disabled:border-red-400 disabled:text-red-400 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" disabled={!this.state.submit} value={"Opt Out"} onClick={() => this.out()} />
                <p className="block align-middle justify-center text-center m-auto">{this.state.status}</p>
              </div>
              <br></br>
              <div className="word-break: break-all">
                <p>Please donate to the DAO so we can keep building tools for you ❤️ 🥺</p>
                <p>57J6MC2HRRZFGK3ODFMWS5LPI5XQKD22LQPYEXUF4P6HKN2BX5CCW6TB3Y</p>
              </div>
            </form>
          </div>
        </div>
      );
    };
  };
export default EssayForm;