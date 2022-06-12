import { useEffect } from "react";

import web3 from "../../ethernum/web3";
import compiledFactoryCampaign from "../../ethernum/build/CampaignFactory";
import { CAMPAIGN_FACTORY_ADDRESS } from "../../ethernum/config";

export default function Home() {
  useEffect(() => {
    const fetch = async () => {
      const address = await web3.eth.getAccounts();
      console.log(address);

      const campaignFactoryContract = new web3.eth.Contract(
        compiledFactoryCampaign.abi,
        CAMPAIGN_FACTORY_ADDRESS
      );

      const campaigns = await campaignFactoryContract.methods.getCampaigns().call();
      console.log(campaigns);
    };

    fetch();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-700 tracking-widest">Hello world!</h1>
    </div>
  );
}
