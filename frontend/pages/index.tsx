import { GetServerSideProps } from "next";

import { campaignFactoryContract, campaignsDetails } from "../../ethernum/contracts.js";
import { Campaign } from "../shared/dto/campaign.dto";

type Props = {
  campaigns: Campaign[];
};

const Home = ({ campaigns }: Props) => {
  console.log(campaigns);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-700">Hello world!</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const campaignAddresses = await campaignFactoryContract.methods.getCampaigns().call();
  const campaigns = await Promise.all(campaignAddresses.map((address) => campaignsDetails(address)));

  return {
    props: {
      campaigns,
    },
  };
};

export default Home;
