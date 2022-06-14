import web3 from "./web3";

import compiledFactoryCampaign from "./build/CampaignFactory";
import compiledCampaign from "./build/Campaign";
import { CAMPAIGN_FACTORY_ADDRESS } from "./config";

export const campaignFactoryContract = new web3.eth.Contract(
  compiledFactoryCampaign.abi,
  CAMPAIGN_FACTORY_ADDRESS
);

export const campaignContract = (contractAddress) =>
  new web3.eth.Contract(compiledCampaign.abi, contractAddress);

export const campaignsDetails = async (address) => {
  const contract = campaignContract(address);

  const [title, minContribution] = await Promise.all([
    contract.methods.title().call(),
    contract.methods.minContribution().call(),
  ]);

  return {
    address,
    title,
    minContribution,
  };
};
