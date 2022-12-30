export default function About() {
  return (
    <div>
      <div className="flex justify-center my-4">
        <img className="w-[50%]" src="/kinn_logo_banner.png"></img>
      </div>    
      <div className="divide-dotted divide-y-4">
        <div className=" py-16 flex my-4">
          <p className="justify-center px-16 m-auto text-2xl"> 
            Kinn is a decentralized autonomous organization (DAO) for NFT <strong>search</strong>, <strong>verification</strong>, and <strong>tools</strong>. 
            $KINN holders can <strong>stake on an NFT or collection</strong> for a chance to earn part of the royalties, enabling the market to predict
            the sales price and frequency. Higher stakes indicate greater value and interest and will appear higher in searches and qualify for 
            free advertising.
          </p>
          <img className="border rounded-2xl h-96 float-right align-middle mx-16" src="about_wheel.png" alt="wheel"></img>
        </div>
        <div className="flex py-8">
          <img className="h-96 mx-10" src="about_arrows.png" alt="arrows"></img>
          <p className="justify-center px-16 m-auto text-2xl"> 
            Stakers can <strong>earn yield</strong> by identifying valuable NFTs for sale. The DAO earns staking transaction fees to pay for automatic NFT 
            verification, hosting, and services that token holders can vote to fund. <strong>Cyclical economics</strong> reward the best stakers and sustain the DAO.
          </p>
        </div>
        <div className="flex py-8 my-4">
          <p className="justify-center px-16 m-auto text-2xl"> 
            Verification is performed in 2 stages, automatic and manual. <strong>Automatic verification</strong> is done algorithmically using computer vision to detect copycats. 
            <strong> Manual verification</strong> is a continuous process performed by token holders who are incentivized to police the difficult edge cases that the algorithm may miss. 
          </p>
          <img className="border rounded-2xl h-96 float-right mx-10" src="about_verification.png" alt="verification"></img>
        </div>
        
      </div>
    </div>
  );
};