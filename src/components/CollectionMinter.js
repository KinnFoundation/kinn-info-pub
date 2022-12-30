import React from 'react';
import { Web3Storage } from 'web3.storage';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk from 'algosdk';
import { CID } from "multiformats/cid";
var Buffer = require('buffer/').Buffer;
window.Buffer = Buffer;

const algodClient = new algosdk.Algodv2('', 'https://mainnet-api.algonode.cloud', '');
const client = new Web3Storage({ token: process.env.REACT_APP_IPFS_KEY });

const collectionMetadata = {
    name: "", //Kinn Test Collection #1
    assets: [],  // get the list from the kinndao minter!
    description: "KinnDAO Registered Collection", //KinnDAO Registered Collection.
    externalURL: "",
    NFD: "",
    royalty: 0.02,
    register: 'KinnDAO Registered Collection'
  };

const myAlgoWallet = new MyAlgoConnect();

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        assets: [],
        description: "",
        externalURL: "",
        address: "",
        status: "",
        royalty: 0.02,
        NFD: "",  // would be nice to add, would be a good idea to check for ownership though so people don't claim to own one they really don't
        link: "",
        submit: false  // might want to make a popup to confirm you want to submit?
      };
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAssetsChange = this.handleAssetsChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleExternalURLChange = this.handleExternalURLChange.bind(this);
      this.handleNFDChange = this.handleNFDChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleRoyaltyChange = this.handleRoyaltyChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.connectToMyAlgo = this.connectToMyAlgo.bind(this);
    }
    
    // want to keep collectionMetadata's default values until change
    handleNameChange(event) {
      this.setState({name: event.target.value});
      collectionMetadata.name = event.target.value;
    };
    handleAssetsChange(event) {
      let parsedList;
      parsedList = event.target.value.replace(/\s/g, '').split(',')
      //parsedList = [...new Set(parsedList)]  //weird bug where 2,222 fails b/c it starts as 2,2 which violates the set
      // eslint-disable-next-line
      parsedList = parsedList.map(function (x) { 
        if (x) {
          return parseInt(x, 10); 
        };
      });

      this.setState({assets: parsedList});
      collectionMetadata.assets = parsedList;
    };
    handleDescriptionChange(event) {
      this.setState({description: event.target.value});
      collectionMetadata.description = event.target.value;
    };
    handleExternalURLChange(event) {
      this.setState({externalURL: event.target.value});
      collectionMetadata.externalURL = event.target.value;
    };
    handleNFDChange(event) {
      this.setState({NFD: event.target.value});
      collectionMetadata.NFD = event.target.value;
    };
    handleStatusChange(event) {
      this.setState({status: event.target.value});
    };
    handleRoyaltyChange(event) {
      this.setState({royalty: event.target.value/100});
      collectionMetadata.royalty = event.target.value/100;
    };
    handleSubmit(event) {
      event.preventDefault();
    };

    async connectToMyAlgo() {
        try {
          const accounts = await myAlgoWallet.connect();
          const addresses = accounts.map(account => account.address);
          this.setState({address: addresses[0]});
          this.setState({submit: true});
        } catch (err) {
          console.error(err);
        };
    };

    async mint() {
      try {
        if (this.state.name && this.state.assets) {
          this.setState({status: 'Uploading to IPFS...'});
          this.setState({assets: [...new Set(this.state.assets)]});  // remove duplicates right before minting

          const file = new File([JSON.stringify(collectionMetadata)], 'collection.json', { type: 'application/json' })
          const metadataCID = await client.put([file], {
            name: 'kinn test collection',
            maxRetries: 3,
          });
          const decodedCID = CID.parse(metadataCID);
          const reserveAddress = algosdk.encodeAddress(
            Uint8Array.from(Buffer.from(decodedCID.multihash.digest))
          );

          this.setState({status: 'Successfully uploaded to IPFS.'});

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
          
          this.setState({status: 'Please sign to mint collection...'});

          // mint and sign
          const suggestedParams = await algodClient.getTransactionParams().do();

          const transaction = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject(
            {
              from: this.state.address,
              assetName: this.state.name,
              unitName: "CLXN",
              assetURL: url,
              manager: this.state.address, // It's important to set the manager to the creator so that the NFT metadata can be updated
              reserve: reserveAddress,
              decimals: 19,
              total: 10000000000000000000n,  
              suggestedParams,
              defaultFrozen: false,
            }
          );

          const signedTransaction = await myAlgoWallet.signTransaction(transaction.toByte());
          const transactionId = transaction.txID().toString();

          await algodClient.sendRawTransaction(signedTransaction.blob).do();

          this.setState({status: 'Waiting <4.5s for confirmation...'});

          const confirmedTxn = await algosdk.waitForConfirmation(
            algodClient,
            transactionId,
            4
          );
          if (this.state.NFD) {
            this.setState({status: 'Minted! 🥳 Update NFD collection field with ASA ID:'+confirmedTxn['asset-index']});
          } else {
            this.setState({status: 'Minted! 🥳 ASA ID:'+confirmedTxn['asset-index']});
          };
          this.setState({link: 'https://algoexplorer.io/asset/'+confirmedTxn['asset-index']})
          //} catch (error) {
          //  console.error("Minting error: ", error);
          //}
        } else {
          this.setState({status: 'Fill out required fields.'});
        };
      } catch (error) {
        this.setState({status: String(error)});
      };
    };
  
    render() {
      return (
        <div>
          <h1 className="flex w-full justify-center px-6 py-3 text-2xl">KinnDAO ARC19 Collection Registration</h1>
          <div className="flex w-full justify-center px-6 py-1">
            <form className="border w-2/4 border-gray-200 px-1 py-1 rounded" onSubmit={this.handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Collection Name:</label>
                <input id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.name} placeholder="Required" onChange={this.handleNameChange} required={true}/>
              </div>
              <div className="mb-6">
                <label htmlFor="assets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asset List (comma separated, e.g. 1,2,3):</label>
                <input type="textarea" id="assets" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Required" value={this.state.assets} onChange={this.handleAssetsChange} required={true}/>
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
                <label htmlFor="nfd" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NFD:</label>
                <input id="nfd" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Optional" value={this.state.NFD} onChange={this.handleNFDChange} />
              </div>
              <div className="mb-6">
                <label htmlFor="royalty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Creator Royalty (%):</label>
                <input type="number" id="royalty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={(this.state.royalty*100)} onChange={this.handleRoyaltyChange} min="0" />
              </div>
              <div className="flex">
                <button className="appearance-none align-middle block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" onClick={this.connectToMyAlgo}>Connect Wallet</button>
                <p className="block align-middle m-auto">{this.state.address ? this.state.address.slice(0,5) + "..." + this.state.address.slice(-5):""}</p>
              </div>
              <br></br>
              <div className="flex">
                <input type="submit" className="appearance-none block bg-gray-200 text-blue-700 border border-blue-700 disabled:border-red-400 disabled:text-red-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" disabled={!this.state.submit} value="Mint Collection" onClick={() => this.mint()} />
                <a className="block align-middle justify-center text-center m-auto" {... this.state.status.includes('Minted!') ? {href: this.state.link, target:"_blank", className:"block align-middle justify-center text-center m-auto text-blue-700 underline"} : {}}>{this.state.status}</a>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
// want the submit button to be disabled or at least pop up saying collection not minted
export default EssayForm;