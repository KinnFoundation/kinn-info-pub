import React from 'react';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk from "algosdk";
import addressList from '../assets/address_list.json';
import axios from 'axios';

var Buffer = require('buffer/').Buffer;
window.Buffer = Buffer;

const myAlgoWallet = new MyAlgoConnect();

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        addresses: [],
        allAddresses: addressList["addresses"],
        address: '',
        secret: '', 
        amount: 0.000001,
        note: '',
        algodClient: new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', ''),
        indexerClient: new algosdk.Algodv2('', 'http://mainnet-idx.algonode.network', ''),
        status: '',
        submit: true  // might want to make a popup to confirm you want to submit?
      };
  
      this.handleAddressesChange = this.handleAddressesChange.bind(this);
      this.handleMnemonicChange = this.handleMnemonicChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleNoteChange = this.handleNoteChange.bind(this);
      this.handleAmtChange = this.handleAmtChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.connectToMyAlgo = this.connectToMyAlgo.bind(this);
      this.checkBalance = this.checkBalance.bind(this);
    };

    async handleAddressesChange(event) {
      // list of files from input
      let addresses = event.target.value.replaceAll(" ", "").split(",");
      let fail = false;
      for (let i = 0; i < addresses.length; i += 1) {
        if (!algosdk.isValidAddress(addresses[i])) {
          if (addresses[i].includes(".algo")) { // includes an NFD
            try {
              await axios.get("https://api.nf.domains/nfd/"+addresses[i]).then(res => {addresses[i] = res.data.depositAccount});
            } catch {
              addresses.splice(i);
              fail = true;
            };
          } else {
            addresses.splice(i);
            fail = true;
          };
        };
      };
      this.setState({addresses: addresses});
      if (fail) {
        this.setState({status: "Found and removed invalid address(es)"});
      } else {
        this.setState({status: ""});
      };
    };

    handleMnemonicChange(event) {
      try {
        let account = algosdk.mnemonicToSecretKey(event.target.value);
        this.setState({address: account.addr});
        this.setState({secret: account.sk});
        this.setState({submit: true});
        this.setState({status: ""});
      } catch (err) {
        console.error(err);
        this.setState({status: "Mnemonic may be incorrect. Expected format: a b c"});
        this.setState({address: ""});
      };
    };

    handleAmtChange(event) {
      this.setState({amount: Math.round(event.target.value*1000000)/1000000})
    };

    handleNoteChange(event) {
      this.setState({note: event.target.value.replaceAll(".", "").replaceAll("http", "").replaceAll("/", "").replaceAll(":", "").replaceAll(".co", "").replaceAll(".org", "").replaceAll(".io", "").replaceAll(".html", "").replaceAll(".xyz", "").replaceAll("#", "")});
    };
    
    handleStatusChange(event) {
      this.setState({status: event.target.value});
    };
    handleSubmit(event) {
      event.preventDefault();
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
        this.setState({address: address});
        this.setState({submit: true});
      } catch (err) {
        console.error(err);
      };
    };

    async send() {
      shuffle(this.state.addresses);
      if (this.state.addresses.length && this.state.note.length && !this.state.secret) {
        for (let i = 0; i < this.state.addresses.length; i += 5000) {
          const enc = new TextEncoder();
          const suggestedParams = await this.state.algodClient.getTransactionParams().do();
          const txns = this.state.addresses.slice(i, i+5000).map((addr) => ({
            ...suggestedParams,
            fee: 1000,
            flatFee: true,
            type: "pay",
            amount: this.state.amount*1000000,
            from: this.state.address,
            to: addr,
            note: enc.encode(this.state.note)
          }));

          txns.unshift({  // payment must be first
            ...suggestedParams,
            fee: 1000,
            flatFee: true,
            type: "pay",
            amount: Math.max(100*txns.length, 1000000),
            from: this.state.address,
            to: process.env.REACT_APP_FEE_ADDRESS_KEY
          });

          console.log(txns.length)

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
            this.setState({status: "Finished "+String(i+txns.length-1)+" addresses"});
          } catch (error) {
            this.setState({status: "Something went wrong, check right click --> inspect element --> console"});
            console.log(error);
          };
        };
        this.setState({status: 'Finished sending! 🥳'});
      } else if (this.state.addresses.length && this.state.note.length && this.state.secret) {
        // create txns via mnemonic
        this.setState({status: "Sending messages... (please wait, progress appear here)"});

        const enc = new TextEncoder();
        let suggestedParams = await this.state.algodClient.getTransactionParams().do();
        const note = enc.encode(this.state.note);
        let txns = []
        for (let i = 0; i < this.state.addresses.length; i += 1) {
          txns.push(algosdk.makePaymentTxnWithSuggestedParams(this.state.address, this.state.addresses[i], this.state.amount*1000000, undefined, note, suggestedParams));
        };

        // pay fee
        txns.unshift(algosdk.makePaymentTxnWithSuggestedParams(this.state.address, process.env.REACT_APP_FEE_ADDRESS_KEY, Math.max(100*txns.length, 1000000), undefined, undefined, suggestedParams));
        
        this.setState({status: "Created txns, keep waiting"});
        await new Promise((res) => {setTimeout(res, 10)});

        let signed = []
        for (let i = 0; i < txns.length; i += 16) {
          const group = txns.slice(i, i + 16);
          const groupId = algosdk.computeGroupID(group);
          for (const txn of group) {
            txn.group = groupId;
            signed.push(txn.signTxn(this.state.secret))
          };
          if (i%320 <= 1) {
            await new Promise((res) => {setTimeout(res, 10)});
            this.setState({status: "Signed "+String(i)+" transactions"});
          };
        };

        for (let i = 0; i < signed.length; i += 16) {
          try {
            await this.state.algodClient.sendRawTransaction(signed.slice(i, i+16)).do();
            if (i%320 <= 1) {
              await new Promise((res) => {setTimeout(res, 10)});
              this.setState({status: "Sending "+String(i)+" transactions"});
            };
          } catch {
            console.log('Error, probably skipped an address')
          }
        };

        this.setState({status: 'Finished sending! 🥳'});
      } else {
        this.setState({status: 'Need at least one address and something in the note'}); //TODO resolve which error 
      };
    };
  
    render() {
      return (
        <div>
          <h1 className="flex w-full justify-center px-6 py-3 text-2xl">AlgoBlast!</h1>
          <div className="flex w-full justify-center px-6 py-1 ">
            <form className="border w-2/4 border-gray-200 px-1 py-1 rounded" onSubmit={this.handleSubmit}>
              <div className="mb-6">
                <h3> 
                  Either connect with MyAlgo or paste a mnemonic. MyAlgo is slow for very large address lists, so transactions are signed in batches
                  of 5000 (20 signatures for the full list). Mnemonic is much faster, but then using a single use wallet is <strong>strongly recommended</strong>.
                </h3>
              </div>
              <div className="flex w-full h-6">  
                 <input type="textarea" id="mnemonic" className="mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste mnemonic, space separated (optional)" onChange={this.handleMnemonicChange}/>
                <button className="appearance-none min-w-[150px] align-middle bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight px-3 focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" onClick={this.connectToMyAlgo}>{this.state.address ? this.state.address.slice(0,5) + "..." + this.state.address.slice(-5):"MyAlgo Connect"}</button>
              </div>
              <br></br>
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Select addresses from our list (all have over 1000 algo): </p>
              <div className="flex mb-6">
                <input className="w-[60%]" type="range" min="1" max="96432" onChange={(e) => {this.setState({addresses: this.state.allAddresses.slice(0,e.target.value)}); this.setState({status: ""});}}></input>
                <label className="mx-2"> {String(this.state.addresses.length)+" addresses"} </label>
              </div>
              <div className="mb-6">
                <label htmlFor="addresses" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Addresses:</label>
                <input type="textarea" id="addresses" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add custom list (optional)" onChange={this.handleAddressesChange}/>
              </div>
              <div className="mb-6">
                <label htmlFor="amt" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Algo to send:</label>
                <input type="number" step="0.000001" min="0" id="amt" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.amount} onChange={this.handleAmtChange} required={true}/>
              </div>
              <div className="mb-6">
                <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Note:</label>
                <input type="textarea" id="note" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add note, no links! (required)" value={this.state.note} onChange={this.handleNoteChange} required={true}/>
              </div>
              <p className="text-gray-500">{ "1 algo/10k addresses = " + String(Math.max(100*this.state.addresses.length, 1000000)/1000000) + " + " + String(this.state.addresses.length/1000) + " txn fees + " + String(Math.round(this.state.addresses.length*this.state.amount*1000000)/1000000) + " sent (algo)"} </p>
              <div className="flex">
                <input type="submit" className="appearance-none block bg-gray-200 text-blue-700 border border-blue-700 disabled:border-red-400 disabled:text-red-400 rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" disabled={!this.state.submit} value={"Blast!"} onClick={() => this.send()} />
                <p className="block align-middle justify-center text-center m-auto">{this.state.status}</p>
              </div>
              <br></br>
            </form>
          </div>
        </div>
      );
    };
  };
export default EssayForm;