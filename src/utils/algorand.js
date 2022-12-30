import algosdk from 'algosdk';

export default async function signTransaction (from, to, amount, suggestedParams) {
    try {
      const txn = algosdk.makePaymentTxnWithSuggestedParams({ suggestedParams, from, to, amount });
      const signedTxn = await myAlgoWallet.signTransaction(txn.toByte());  
      const response = await algodClient.sendRawTransaction(signedTxn.blob).do();
      console.log(response)
    } catch(err) {
      console.error(err); 
    }
  };