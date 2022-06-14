import web3 from "./web3";

import compiledFactoryCampaign from "./build/CampaignFactory";
import { CAMPAIGN_FACTORY_ADDRESS } from "./config";

export const campaignFactoryContract = new web3.eth.Contract(
  compiledFactoryCampaign.abi,
  CAMPAIGN_FACTORY_ADDRESS
);
