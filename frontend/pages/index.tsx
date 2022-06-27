import { GetServerSideProps } from "next";

import { campaignFactoryContract, campaignsDetails } from "../../ethernum/contracts.js";
import { Campaign } from "../shared/dto/campaign.dto";
import CampaignListItem from "../modules/campaigns/components/list-item/list-item";

type Props = {
  campaigns: Campaign[];
};

const Home = ({ campaigns = [] }: Props) => {
  // useEffect(() => {
  //   campaignFactoryContract.methods.createCampaign("Moja nowa kompania", "2500").send({
  //     from: '0x83b69C793ED29fB7CDCfd326f910cD32F8b6F89b'
  //   })
  // })

  return (
    <div>
      <div className="px-8 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="container mx-auto py-10">
          <h1 className="font-bold text-4xl text-secondary">Meet our campaigns!</h1>
          <div className="mt-6">
            <p className="text-white font-bold text-xl">Just stake some tokens to earn.</p>
            <p className="text-white font-bold text-xl">High APR, low risk.</p>
          </div>
        </div>
      </div>

      <div className="px-8 mt-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {campaigns.map((campaign) => (
              <CampaignListItem key={campaign.contractAddress} data={campaign} />
            ))}
          </div>
        </div>
      </div>
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
