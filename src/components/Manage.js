import React from 'react';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk from "algosdk";
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
        address: "",
        node: 'mainnet',
        manager: "",
        //reserve: "",
        freeze: "",
        clawback: "",
        selectedAsset: null, 
        old: {},  // has the old addresses old[{assetID}]['manager']
        useOld: true,
        whichAssets: "created",  // or all for include all
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
          console.log("using ix state")
        };

        let algod;
        if (ac) {
          algod = ac;
          console.log("using ac")
        } else {
          algod = this.state.algodClient;
          console.log("using ac state")
        };

        if (!which) {
          which = this.state.whichAssets;
        };

        let response;
        let tempAssets;
        let assets = [];
        if (which==="created") {  // only use accountInformation
          try {  // TODO: improve this logic to retry more than once
            response = await algod.accountInformation(addr).do()
          } catch {
            response = await algod.accountInformation(addr).do()
          };
          assets = response["created-assets"]//.map(i => i.index); // don't add assets you've created
        } else {  // ===all use indexer lookupAccountAssets with includeAll to get weird assets
          try {  // TODO: improve this logic to retry more than once
            response = await indexer.lookupAccountAssets(addr).do()
          } catch {
            response = await indexer.lookupAccountAssets(addr).do()
          };
          tempAssets = response["assets"].map(i => i['asset-id']);

          // assemble list of creators, optimize by getting first creator, then checking for matches with their created assets
          this.setState({status: "Fetching more info... One sec"})
          let createdAssets = [];
          let createdAssetsIndices = [];
          let creator = "";
          for (let i = 0; i < tempAssets.length; i++) { 
            this.setState({status: "Fetching "+String(i)+"/ "+ String(tempAssets.length)+"... One sec"})
            if (!createdAssetsIndices.includes(tempAssets[i])) {
              creator = await indexer.searchForAssets().index(tempAssets[i]).do();
              creator = creator["assets"]["0"]["params"]["creator"];  // must be on a new line
              let response;
              try {  // TODO: improve this logic to retry more than once
                response = await algod.accountInformation(creator).do();
              } catch {
                response = await algod.accountInformation(creator).do();
              };
              createdAssets = response["created-assets"];
              createdAssetsIndices = response["created-assets"].map(i => i.index);
            } else {  // if asset-id is in created assets from previous iter, then no need to issue additional indexer call
              assets.push(createdAssets[createdAssetsIndices.indexOf(tempAssets[i])]);
            };
          };

        };
        let outAssets = [];
        let outOld = {};
        for (let i = 0; i < assets.length; i++) {
          if (assets[i]["params"]["manager"]===addr) {
            outAssets.push(assets[i]["index"])
            outOld[assets[i]["index"]] = {
              manager: assets[i]["params"]["manager"], 
              reserve: assets[i]["params"]["reserve"],
              freeze: assets[i]["params"]["freeze"],
              clawback: assets[i]["params"]["clawback"],
            };
          };
        };

        this.setState({assetString: JSON.stringify(outAssets).slice(1,-1)});
        this.setState({assets: outAssets});
        this.setState({old: outOld});
        this.setState({status: "Ready to manage of "+String(outAssets.length)+" assets"})
      };
    };

    changeNode() {
      if (this.state.node==='mainnet') {
        this.setState({node: 'testnet'});
        let ac = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
        this.setState({algodClient: ac});
        let idxr = new algosdk.Indexer('', 'https://testnet-idx.algonode.network', '');
        this.setState({indexerClient: idxr});
        this.getAssets(this.state.address, ac, idxr);
      } else {
        this.setState({node: 'mainnet'});
        let ac = new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '');
        this.setState({algodClient: ac});
        let idxr = new algosdk.Indexer('', 'https://mainnet-idx.algonode.network', '');
        this.setState({indexerClient: idxr});
        this.getAssets(this.state.address, ac, idxr);
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

        this.setState({address: addresses[0]});
        this.setState({submit: true});

        this.getAssets(addresses[0]);
      } catch (err) {
        console.error(err);
      };
    };

    async out() {
      if (this.state.assets.length) {
        if (
          (this.state.old[this.state.selectedAsset]?.manager && !this.state.manager) ||
          //(this.state.old[this.state.selectedAsset]?.reserve && !this.state.reserve) ||
          (this.state.old[this.state.selectedAsset]?.freeze && !this.state.freeze) ||
          (this.state.old[this.state.selectedAsset]?.clawback && !this.state.clawback)
          ) {
          alert("WARNING! If you don't provide an address for all previously filled-out fields, you won't be able to populate them later. This can result in the inability to manage your assets!")
        };
        // Sign txns in parts (once for each sender)          
        this.setState({status: 'Please sign to update assets...'});

        // mint and sign
        const suggestedParams = await this.state.algodClient.getTransactionParams().do();

        // Create txns.
        const txns = this.state.assets.map((id) => ({
          ...suggestedParams,
          fee: 1000,
          flatFee: true,
          type: "acfg",
          from: this.state.address,
          assetIndex: id,  // TODO: support multi asset indexing via for loop or something
          // removing the ability to use reserve because people might ruin their arc19 stuff
          // if new is empty and useOld, use old
          // if new is empty and not useOld, delete
          assetReserve: this.state.old[id].reserve,  // always use old so I don't erase or mess up arc19
          assetManager: this.state.useOld ? ((this.state.manager && this.state.old[id].manager) ? this.state.manager : this.state.old[id].manager) : ((this.state.manager && this.state.old[id].manager) ? this.state.manager : undefined),
          assetClawback: this.state.useOld ? ((this.state.clawback && this.state.old[id].clawback) ? this.state.clawback : this.state.old[id].clawback) : ((this.state.clawback && this.state.old[id].clawback) ? this.state.clawback : undefined),
          assetFreeze: this.state.useOld ? ((this.state.freeze && this.state.old[id].freeze) ? this.state.freeze : this.state.old[id].freeze) : ((this.state.freeze && this.state.old[id].freeze) ? this.state.freeze : undefined)
        }));

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
          <h1 className="flex w-full justify-center px-6 py-3 text-2xl">Bulk Asset Manager</h1>
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
              </div>
              <br></br>
              <div className="flex mb-6">
                <button className={"border rounded px-6 " + ((this.state.whichAssets==="all") ? "bg-blue-100" : "bg-gray-100")} onClick={() => this.state.whichAssets==="all" ? this.handleWhichAssetsChange("created") : this.handleWhichAssetsChange("all")}>All Assets</button>
                <button className={"border rounded px-6 " + ((this.state.whichAssets==="created") ? "bg-blue-100" : "bg-gray-100")} onClick={() => this.state.whichAssets==="all" ? this.handleWhichAssetsChange("created") : this.handleWhichAssetsChange("all")}>Created Assets</button>
              </div>
              <div className="mb-6">
                <label htmlFor="assets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ASAs to Manage:</label>
                <input type="textarea" id="assets" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Connect wallet auto fetches all 0 balance ASAs" value={this.state.assetString} onChange={this.handleAssetStringChange} required={true}/>
              </div>
              <div className="mb-6 max-h-[30vmin] overflow-y-scroll">
                {(() => {
                  let btns = []
                  for (let i=0;i<this.state.assets.length;i++) {
                    btns.push(<button className={this.state.assets[i]===this.state.selectedAsset ? "border p-1 m-1 hover:bg-blue-300 bg-blue-100" : "border p-1 m-1 hover:bg-blue-300"} key={i} onClick={() => this.setState({selectedAsset: this.state.assets[i]})}>{this.state.assets[i]}</button>)
                  }
                  return btns
                })()}
              </div>
              <div className="mb-6">
                <p className="overflow-hidden">Manager: {this.state.old[this.state.selectedAsset]?.manager ? this.state.old[this.state.selectedAsset]?.manager : "None"}</p>
                <p className="overflow-hidden">Freeze: {this.state.old[this.state.selectedAsset]?.freeze ? this.state.old[this.state.selectedAsset]?.freeze : "None"}</p>
                <p className="overflow-hidden">Clawback: {this.state.old[this.state.selectedAsset]?.clawback ? this.state.old[this.state.selectedAsset]?.clawback : "None"}</p>
              </div>
              <div className="flex mb-6">
                <label className='align-middle'>Use old addresses if blank:</label>
                <div className="form-check form-switch px-2">
                  <Switch checked={this.state.useOld} onChange={() => this.setState({useOld: this.state.useOld ? false : true})} className={`${this.state.useOld ? 'bg-blue-300' : 'bg-gray-300'} form-check-input appearance-none w-9 rounded-full float-left h-5 focus:outline-none cursor-pointer shadow-sm`}>
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${this.state.useOld ? '-translate-x-2' : 'translate-x-2'}
                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-100 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="manager" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manager Address:</label>
                <input type="textarea" id="manager" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={this.state.old[this.state.selectedAsset]?.manager ? "New manager address" : "Immutable"} disabled={!this.state.old[this.state.selectedAsset]?.manager} value={this.state.manager} onChange={(e) => this.setState({manager: e.target.value})} required={true}/>
              </div>
              <div className="mb-6">
                <label htmlFor="freeze" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Freeze Address:</label>
                <input type="textarea" id="freeze" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={this.state.old[this.state.selectedAsset]?.freeze ? "New freeze address" : "Immutable"} disabled={!this.state.old[this.state.selectedAsset]?.freeze} value={this.state.freeze} onChange={(e) => this.setState({freeze: e.target.value})} required={true}/>
              </div>
              <div className="mb-6">
                <label htmlFor="clawback" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Clawback:</label>
                <input type="textarea" id="clawback" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={this.state.old[this.state.selectedAsset]?.clawback ? "New clawback address" : "Immutable"} disabled={!this.state.old[this.state.selectedAsset]?.clawback} value={this.state.clawback} onChange={(e) => this.setState({clawback: e.target.value})} required={true}/>
              </div>
              <div className="flex">
                <input type="submit" className="appearance-none block bg-gray-200 text-blue-700 border border-blue-700 disabled:border-red-400 disabled:text-red-400 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" disabled={!this.state.submit} value={"Manage"} onClick={() => this.out()} />
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