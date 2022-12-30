import { useEffect, useState } from 'react';
import algosdk from 'algosdk';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import Modal from 'react-modal';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const myAlgoWallet = new MyAlgoConnect();
const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');  //CHANGE
const appID = 117364207
const assetID = 109971296

const navigation = [
  { name: 'About', href: '/', target: null, current: false },
  { name: 'Tools', href: '/tools', target: null, current: false },
  { name: 'Games', href: '/games', target: null, current: false },
  { name: 'Whitepaper', href: 'https://kinntools.s3.us-east-1.amazonaws.com/Kinn+Foundation+DAO+Whitepaper+08302022.pdf', target:'_blank', current: false },
  { name: 'ASA: 114934168 (Testnet)', href: 'https://testnet.algoexplorer.io/asset/114934168', target:'_blank', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
};

export default function Navbar() {
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [optedIn, setOptedIn] = useState(false);
  const [amount, setAmount] = useState(69);

  useEffect(() => {
    const fetchHolding = async () => {
      try {
        let holding = await algodClient.accountAssetInformation(address, assetID).do();
        console.log(holding)
        setOptedIn(true);
      } catch (err) {
        console.log("Not opted in.")
        setOptedIn(false);
      };
    };
    fetchHolding();
  });

  const connectToMyAlgo = async ({ setAddress, setOptedIn }) => {
    try {
      const accounts = await myAlgoWallet.connect();
      const addresses = accounts.map(account => account.address);
      setAddress(addresses[0]);
      localStorage.setItem("address", addresses[0]);
      let holding = await algodClient.accountAssetInformation(addresses[0], assetID).do();
      console.log(holding["asset-holding"]["amount"])
      setOptedIn(true);
    } catch (err) {
      console.log("Not opted in.")
      setOptedIn(false);
      console.error(err);
    };
  };

  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
  };
  const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
  };

  const buyKinn = async ({ address, optedIn, setModalIsOpenToFalse }) => {
    if (address) {
      // This will have to switch to a link to humbleswap once you mint $KINN and then transition to MainNet
      let receiver = "FGU3MBZAUFYVYO2JC33UBHGNDEOFNA5LSMXERVUO6MJEBGH6RN3OYACOTM";
      try {
      const appArgs = []
      appArgs.push(
        new Uint8Array(Buffer.from("buy")),
      )
      let params = await algodClient.getTransactionParams().do()
        params.fee = 1000;
        params.flatFee = true;
  
      // create unsigned asset transfer transaction
      let ptxn = algosdk.makePaymentTxnWithSuggestedParams(address, receiver, Math.round((amount/66)*1e6), undefined, undefined, params);
  
      // create unsigned noop transaction
      let nptxn = algosdk.makeApplicationNoOpTxn(address, params, appID, appArgs, undefined, undefined, [assetID]);
  
      let txns;
      if (optedIn) {
        txns = [ptxn, nptxn]
      } else {
        let opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(address, address, undefined, undefined, 0, undefined, assetID, params);
        txns = [opttxn, ptxn, nptxn]
      };
  
      const groupID = algosdk.computeGroupID(txns)
      for (let i = 0; i < txns.length; i++) txns[i].group = groupID;
  
      const signedTxns = await myAlgoWallet.signTransaction(txns.map(txn => txn.toByte()));
  
      await algodClient.sendRawTransaction(signedTxns.map((i) => {return i.blob})).do();
  
      // update right away and then reupdate just to double check
      //setHoldingString(String(bigInt(holdingAmount)+bigInt(Math.round(amount*1e6)/1e6)));
      //setHoldingAmount(bigInt(holdingAmount)+bigInt(Math.round(amount*1e6)/1e6));
      setModalIsOpenToFalse()
  
      //await new Promise(r => setTimeout(r, 8500));
      //console.log("Bought!")
  
      } catch (err) {
        console.log(err)
      }
  
      //let holding = await algodClient.accountAssetInformation(address, assetID).do();
      //setHoldingString(String(holding["asset-holding"].amount/bigInt(1e6).value));
      //setHoldingAmount(holding["asset-holding"].amount/bigInt(1e6).value);
    } else {
      console.log("Wallet not connected.")
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-700">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-6">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a href="https://search.kinndao.com" target="_blank" rel="noreferrer">
                    <img
                      className="block h-8 w-full"
                      src="/kinn_logo.svg"
                      alt="kinn logo"
                    />
                  </a>
                  
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute right-0 flex items-center">
                <Modal className="border bg-white h-96 m-[10%] p-[1%] rounded-lg overflow-y-auto min-h-[16rem] min-w-[42rem]" isOpen={modalIsOpen}>
                  <button className="float-right hover:bg-red-300 rounded-xl" onClick={setModalIsOpenToFalse}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h2 className="text-center text-xl"> <strong>Please Read This Disclaimer Before Purchasing $KINN</strong> </h2>
                  <h2 className="text-center text-md"> Asset ID: 114934168 </h2>
                  <br></br>
                  <p className="overflow-y-scroll h-[14.3rem] bg-gray-100 rounded-lg px-10 py-5 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300"> 
                  WARNING! <br></br>
                  NO RELIANCE CAN BE PLACED ON ANY INFORMATION CONTENT OR MATERIAL
                  STATED IN THE KINN WHITEPAPER OR THE KINN WEBSITE.
                  ACCORDINGLY, YOU MUST VERIFY ALL INFORMATION INDEPENDENTLY BEFORE
                  UTILIZING IT AND ALL DECISIONS BASED ON INFORMATION CONTAINED ON THIS
                  WEBAPP, THE KINN WHITEPAPER AND THE KINN WEBSITE ARE YOUR SOLE
                  RESPONSIBILITY AND WE SHALL HAVE NO LIABILITY FOR SUCH DECISIONS.
                  NOTHING IN THIS DISCLAIMER, ANY INFORMATION CONTENT OR MATERIAL
                  SHALL OR SHALL BE CONSTRUED TO CREATE ANY LEGAL RELATIONS BETWEEN
                  US AND YOU NOR GRANT ANY RIGHTS OR OBLIGATIONS TO EITHER OF US.
                  PURCHASE OF $KINN TOKENS MAY RESULT IN COMPLETE AND TOTAL
                  FINANCIAL LOSSES. <br></br> <br></br>
                  DISCLAIMER <br></br>
                  Your use of the Kinn Website in any form or manner constitutes your agreement to all such
                  terms, notices, and conditions.
                  Any information on the Kinn Website and Kinn Whitepaper is for general information purposes
                  only. It does not constitute investment advice, recommendations, or any form of solicitation. No
                  information in the Kinn Website and Kinn Whitepaper should be considered to be business,
                  legal, financial or advice regarding contribution or participation to the development of the Kinn
                  DAO and any of its projects. Any information provided through Kinn materials, including the
                  Kinn Website, is at all times subject to change by the sole discretion of Kinn.
                  Kinn is creating the $KINN Token to function within the Kinn DAO which allows token holders
                  to generate and monetize data about on-chain assets for the benefit of creators, collectors, and the
                  DAO itself. No $KINN token will represent any economic interest in any entity at any time, and
                  $KINN is for the purpose of use within the Kinn platform. 
                  Through the development of $KINN, Kinn does not grant any rights, express or implied, other
                  than the right to use $KINN within the DAO. In particular, the Kinn team expressly denies any
                  ability of the $KINN token to represent or confer any ownership right or stake, share, security, or
                  equivalent rights, or any right to receive future revenue shares, intellectual property rights or any
                  other form of participation in or relating to any Kinn product and/or Kinn entity and/or any of its
                  affiliates. <br></br> <br></br>
                  No Warranties<br></br>
                  To the fullest extent permitted by applicable law and except as otherwise specified in writing by
                  Kinn: <br></br>(i) $KINN tokens are generated on an “as is” and “as available” basis without warranties
                  of any kind, and Kinn expressly disclaims all implied warranties as to the $KINN tokens,
                  including, without limitation, implied warranties of merchantability, fitness for a particular
                  purpose, title and non-infringement; <br></br>(ii) Kinn does not represent or warrant that the $KINN
                  tokens are reliable, current or error-free, or that technical defects in the $KINN tokens will be
                  corrected; and <br></br>(iii) Kinn cannot and does not represent or warrant that the $KINN tokens or the
                  delivery mechanism for $KINN tokens are free of viruses or other harmful components.
                  No terms in the Kinn Website or the Kinn Whitepaper constitute a prospectus, an offer document
                  of any sort, or are intended to constitute an offer of securities, or a solicitation for investment in
                  securities. If you use the $KINN tokens, please note that any contribution and/or participation
                  does not represent, constitute or involve the exchange of value for any form of securities,
                  investment units and/or form of ordinary shares in any project, in Kinn, or any other related
                  party.<br></br> <br></br>
                  No Reliance on Information<br></br>
                  Kinn rejects any responsibility for any direct or consequential loss or damage of any kind
                  whatsoever arising directly or indirectly from: <br></br>(i) reliance on any information provided, <br></br>(ii) any
                  error, omission or inaccuracy in any such information; or <br></br>(iii) any action resulting from such
                  information. 
                  No reliance can be placed on any information content or material stated in the Kinn Whitepaper
                  or the Kinn Website. Accordingly, you must verify all information independently before utilizing
                  it and all decisions based on any information are your sole responsibility and we shall have no
                  liability for such decisions. Kinn does not make or intends to make, and hereby disclaims, any
                  representation, warranty or undertaking in any form whatsoever to any entity or person,
                  including any representation, warranty or undertaking in relation to the truth, accuracy, and
                  completeness of any of the information set out in this Whitepaper.
                  Any action you take upon the information provided is entirely at your own risk.
                  Any information in the Kinn Website and Kinn Whitepaper in any part thereof and any copy
                  thereof must not be transmitted to any country where distribution or dissemination of these
                  documents and its information is prohibited or restricted. No regulatory authority has examined
                  or approved to this date of any of the information set out in this document. The publication,
                  distribution or dissemination of these terms do not imply that the applicable laws, regulatory
                  requirements or rules have been complied with.<br></br> <br></br>
                  Forward-Looking Statements<br></br>
                  All statements contained in the Kinn Website and Kinn Whitepaper made in press releases or in
                  any place accessible by the public and oral statements that may be made by Kinn, its founders,
                  team members and any third party involved in the project and acting on behalf of Kinn, that are
                  not statements of historical fact constitute “forward-looking statements”.<br></br> <br></br>
                  Limitation of Liability<br></br>

                  To the fullest extent permitted by the applicable laws, regulations and rules, Kinn, its founders,
                  team members and any third party involved in the project shall not be liable for any direct,
                  indirect, special, incidental, consequential or other losses of any kind, in tort, contract or
                  otherwise (including but not limited to loss of revenue, income or profits, and loss of use or
                  data), arising out of or in connection with any acceptance of or reliance on the information in the
                  Kinn Website or Kinn Whitepaper.
                  To the fullest extent permitted by applicable law: (i) in no event will Kinn or any of the company
                  parties be liable for any indirect, special, incidental, consequential, or exemplary damages of any
                  kind (including, but not limited to, where related to loss of revenue, income or profits, loss of use
                  or data, or damages for business interruption) arising out of or in any way related to the
                  distribution or use of $KINN, regardless of the form of action, whether based in contract, tort
                  (including, but not limited to, simple negligence, whether active, passive or imputed), or any
                  other legal or equitable theory (even if the party has been advised of the possibility of such
                  damages and regardless of whether such damages were foreseeable); and (ii) in no event will the
                  aggregate liability of Kinn and affiliate parties (jointly), whether in contract, warranty, tort
                  (including negligence, whether active, passive or imputed), or other theory, arising out of or
                  relating to $KINN or the use of or inability to use $KINN. 
                  All Kinn DAO participants are responsible for implementing reasonable measures for securing
                  their own wallet, vault or other storage mechanism used to receive and hold $KINN tokens,
                  including any requisite private key(s) or other credentials necessary to access such storage
                  mechanism(s). If any private key(s) or other access credentials are lost, the holder may lose
                  access to their $KINN Tokens. Kinn is not responsible for any losses, costs or expenses relating
                  to lost access credentials. 
                  Nothing in this disclaimer is to be construed as either an admission of liability or admission of
                  wrongdoing on the part of either party, each of which denies any liabilities or wrongdoing on its
                  part.</p>
                  <br></br>
                  <div>
                    <input className="float-left border rounded-md mr-1" type="number" defaultValue={69} onChange={(e) => setAmount(Math.round(e.target.value*1e6)/1e6)}></input>
                    <p className="float-left"> $KINN = {Math.round((amount/66)*1e6)/1e6} algo </p>
                    <button className="float-right animate-border rounded-md inline-block bg-blue-500 from-pink-400 to-blue-500 px-1 bg-[length:400%_400%] hover:bg-gradient-to-r" onClick={() => buyKinn({address, optedIn, setModalIsOpenToFalse})} > Agree and Buy </button>
                    <button className="float-right mx-2" onClick={() => connectToMyAlgo({setAddress, setOptedIn})}>{address ? address.slice(0,4)+"..."+address.slice(-4) : 'Connect Wallet'}</button>
                  </div>
                </Modal>
                <button
                  type="button"
                  className="animate-border rounded-md inline-block bg-blue-500 from-pink-400 to-blue-500 p-1 bg-[length:400%_400%] hover:bg-gradient-to-r"
                  onClick={setModalIsOpenToTrue}
                > <span className="block px-3 py-1.5 text-white bg-slate-900 rounded"> Buy Testnet $KINN </span>
                </button>
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={() => item.current ? false : true}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}