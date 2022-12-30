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
        whichAssets: "all",  // all, created, custom
        sender: "",
        receiver: "",
        connectedAddresses: [],
        optOut: false,
        node: 'mainnet',
        algodClient: new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', ''),
        indexerClient: new algosdk.Algodv2('', 'https://mainnet-idx.algonode.network', ''),
        status: "",
        submit: true  // might want to make a popup to confirm you want to submit?
      };
  
      this.handleSenderChange = this.handleSenderChange.bind(this);
      this.handleAssetStringChange = this.handleAssetStringChange.bind(this);
      this.handleWhichAssetsChange = this.handleWhichAssetsChange.bind(this);
      this.handleOptOutChange = this.handleOptOutChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.connectToMyAlgo = this.connectToMyAlgo.bind(this);
      this.checkBalance = this.checkBalance.bind(this);
      this.changeNode = this.changeNode.bind(this);
      this.getAssets = this.getAssets.bind(this);
      this.swapAddresses = this.swapAddresses.bind(this);
    }
    
    async handleSenderChange(event) {
      this.setState({sender: event.target.value}); 
      // get all sender assets
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
      this.setState({whichAssets: which}); 
      this.getAssets(this.state.sender, null, which);
    };
    handleOptOutChange(event) {
      if (this.state.connectedAddresses.includes(this.state.sender)) {
        this.setState({optOut: this.state.optOut ? false : true});
      } else {
        this.setState({status: "Can only opt out if you own sender address"});
      }
      
    };
    handleStatusChange(event) {
      this.setState({status: event.target.value});
    };
    handleSubmit(event) {
      event.preventDefault();
    };

    async getAssets(addr, idxr, which) {
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
        let assets;
        let whichAssets = which ? which : this.state.whichAssets;
        if (whichAssets==="all") {
          assets = response["account"]["assets"]
        } else if (whichAssets==="created") {
          assets = response["account"]["created-assets"];
          assets = assets.map(asset => asset["index"]);
          assets = response["account"]["assets"].filter(result => assets.includes(result["asset-id"]))
        };
        let sendAssets = [];
        for (let i = 0; i < assets.length; i++) {
          if (assets[i]["amount"]>0 && !assets[i]["deleted"] && !assets[i]["is-frozen"]) {
            sendAssets.push(assets[i]["asset-id"])
          };
        };
        this.setState({assetString: JSON.stringify(sendAssets).slice(1,-1)});
        this.setState({assets: sendAssets});
        this.setState({status: "Found "+String(sendAssets.length)+" assets"})
      };
    };

    swapAddresses () {
      this.setState({sender: this.state.receiver});
      this.setState({receiver: this.state.sender});
      this.getAssets(this.state.receiver);
    };

    changeNode() {
      if (this.state.node==='mainnet') {
        this.setState({node: 'testnet'});
        this.setState({algodClient: new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '')});
        let idxr = new algosdk.Algodv2('', 'https://testnet-idx.algonode.network', '');
        this.setState({indexerClient: idxr});
        this.getAssets(this.state.sender, idxr)
      } else {
        this.setState({node: 'mainnet'});
        this.setState({algodClient: new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '')});
        let idxr = new algosdk.Algodv2('', 'https://mainnet-idx.algonode.network', '');
        this.setState({indexerClient: idxr});
        this.getAssets(this.state.sender, idxr)
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
        if (addresses.length<2) {
          this.setState({sender: addresses[0]});
          this.setState({submit: true});
        } else {
          this.setState({sender: addresses[0]});
          this.setState({receiver: addresses[1]});
          this.setState({submit: true});
        };
        this.setState({connectedAddresses: addresses.slice(0,2)}); // for changing the send button text
        this.getAssets(addresses[0]);
      } catch (err) {
        console.error(err);
      };
      //const interval = setInterval(function() {
      //  let accountInfo = await algodClient.lookupAccountByID(this.state.address).do();
      //  this.setState({heldAlgos: accountInfo["account"]["amount"]});  // update with amount of held algos every x seconds
      //}, 8000);
    };

    async send() {
      if (this.state.assets.length) {
        // create all txns: 1) Opt in for receiver 2) send from sender to receiver 3) OPTIONAL: opt out of sent assets at the end
        const suggestedParams = await this.state.algodClient.getTransactionParams().do();

        // Opt-In txns.
        let optInTxns = [];
        if (this.state.connectedAddresses.includes(this.state.receiver)) {
          optInTxns = this.state.assets.map((id) => ({
            ...suggestedParams,
            fee: 1000,
            flatFee: true,
            type: "axfer",
            assetIndex: id, 
            from: this.state.receiver,
            to: this.state.receiver,
            amount: 0
          }));
        };
        
        let sendTxns = [];
        let optOutTxns = [];
        if (this.state.connectedAddresses.includes(this.state.sender)) {
          // Send txns.
          sendTxns = this.state.assets.map((id) => ({
            ...suggestedParams,
            fee: 1000,
            flatFee: true,
            type: "axfer",
            assetIndex: id, 
            from: this.state.sender,
            to: this.state.receiver,
            amount: 1
          }));

          if (this.state.optOut) {
            // Opt-Out txns.
            optOutTxns = this.state.assets.map((id) => ({
              ...suggestedParams,
              fee: 1000,
              flatFee: true,
              type: "axfer",
              assetIndex: id, 
              from: this.state.sender,
              to: this.state.sender,
              closeRemainderTo: this.state.sender,
              amount: 0
            }));
          };
        };

        // calculate groups separately, different senders have to have different groups
        if (this.state.connectedAddresses.includes(this.state.receiver)) {
          for (let i = 0; i < optInTxns.length; i += 16) {
            const group = optInTxns.slice(i, i + 16);
            const groupId = algosdk.computeGroupID(group);
            for (const txn of group) {
              txn.group = groupId;
            }
          };
        };
        
        if (this.state.connectedAddresses.includes(this.state.sender)) {
          // TESTING, do these together
          for (let i = 0; i < sendTxns.length; i += 16) {
            const group = sendTxns.slice(i, i + 16);
            const groupId = algosdk.computeGroupID(group);
            for (const txn of group) {
              txn.group = groupId;
            }
          };
          if (this.state.optOut) {
            for (let i = 0; i < optOutTxns.length; i += 16) {
              const group = optOutTxns.slice(i, i + 16);
              const groupId = algosdk.computeGroupID(group);
              for (const txn of group) {
                txn.group = groupId;
              };
            };
          };
        };

        // sign and send one at a time
        try {
          // Sign txns in parts (once for each sender)
          let optInBlobs = [];
          if (this.state.connectedAddresses.includes(this.state.receiver)) {
            optInBlobs = await myAlgoWallet.signTransaction(optInTxns).then((optInTxns) =>
              optInTxns.map((txn) => txn.blob)
            );
          }

          //TESTING
          let secondTxns;
          if (this.state.optOut) {
            secondTxns = sendTxns.concat(optOutTxns);
          } else {
            secondTxns = sendTxns;
          };
          
          let sendBlobs = [];
          if (this.state.connectedAddresses.includes(this.state.sender)) {
            sendBlobs = await myAlgoWallet.signTransaction(secondTxns).then((secondTxns) =>
              secondTxns.map((txn) => txn.blob)
            );
          };

          /*let secondTxns;
          let sendBlobs;
          let blobs;
          if (this.state.connectedAddresses.includes(this.state.sender)) {
            if (this.state.optOut) {
              secondTxns = sendTxns.concat(optOutTxns);
            } else {
              secondTxns = sendTxns;
            }; 
            sendBlobs = await myAlgoWallet.signTransaction(secondTxns).then((secondTxns) =>
              secondTxns.map((txn) => txn.blob)
            );
            blobs = optInBlobs.concat(sendBlobs);
          } else {
            blobs = optInBlobs;
          };   */

          for (let j = 0; j < 3; j += 1) {
            let blobs = [optInBlobs, sendBlobs.slice(0,sendTxns.length), sendBlobs.slice(sendTxns.length)][j];
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
          };
          /*
          // wait for confirmation
          this.setState({status: "Waiting for opt in confirmation."})
          await new Promise(r => setTimeout(r, 4500));

          // 2) Send transfers and optouts at the same time 
          if (this.state.connectedAddresses.includes(this.state.sender)) {
            for (const job of jobs.slice(optInBlobs.length)) {
              // Try to do the job.
              try {
                await job();
              } catch (err) {
                alert(err);
                return;
              }
            };
          } else {
            this.setState({status: "Finished opting in!"})
          };*/

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
          <h1 className="flex w-full justify-center px-6 py-3 text-2xl">KinnDAO ARC19 Bulk ASA Opt-In + Sender</h1>
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
                <button className="appearance-none min-w-[150px] align-middle bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight px-3 focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" onClick={this.connectToMyAlgo}>{this.state.address ? this.state.address.slice(0,5) + "..." + this.state.address.slice(-5):"Connect Wallets"}</button>
              </div>
              <br></br>
              <div className="flex mb-6">
                <button className={"border rounded px-6 " + ((this.state.whichAssets==="all") ? "bg-blue-100" : "bg-gray-100")} onClick={() => this.handleWhichAssetsChange("all")}>All Assets</button>
                <button className={"border rounded mx-2 px-1 focus:bg-blue-100 " + ((this.state.whichAssets==="created") ? "bg-blue-100" : "bg-gray-100")} onClick={() => this.handleWhichAssetsChange("created")}>Created Assets</button>
                <label className='px-2 align-middle'>Opt out (sender must not be creator):</label>
                <div className="form-check form-switch">
                  <Switch checked={this.state.optOut} onChange={this.handleOptOutChange} className={`${this.state.optOut ? 'bg-blue-300' : 'bg-gray-300'} form-check-input appearance-none w-9 rounded-full float-left h-5 focus:outline-none cursor-pointer shadow-sm`}>
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${this.state.optOut ? '-translate-x-2' : 'translate-x-2'}
                        pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-100 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="sender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sender:</label>
                <input type="textarea" id="sender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste address or connect wallets" value={this.state.sender} onChange={this.handleSenderChange}/>
              </div>
              <div className="flex w-full"><button className="w-full justify-center" onClick={this.swapAddresses}>🔃</button></div>
              <div className="mb-6">
                <label htmlFor="receiver" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receiver:</label>
                <input type="textarea" id="receiver" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste address or connect wallets" value={this.state.receiver} onChange={(event) => this.setState({receiver: event.target.value})}/>
              </div>
              <div className="mb-6">
                <label htmlFor="assets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assets to send:</label>
                <input type="textarea" id="assets" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Required" value={this.state.assetString} onChange={this.handleAssetStringChange} required={true}/>
              </div>
              <div className="flex">
                <input type="submit" className="appearance-none block bg-gray-200 text-blue-700 border border-blue-700 disabled:border-red-400 disabled:text-red-400 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" disabled={!this.state.submit} value={this.state.connectedAddresses.includes(this.state.sender) ? "Send Assets" : "Opt in"} onClick={() => this.send()} />
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