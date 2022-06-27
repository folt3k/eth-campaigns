import { GetServerSideProps } from "next";

import { Campaign } from "../../shared/dto/campaign.dto";
import { campaignsDetails } from "../../../ethernum/contracts";
import CampaignDetailsItem from "../../modules/campaigns/components/details-item/details-item";

type Props = {
  campaign: Campaign;
};

const CampaignDetailsPage = ({ campaign }: Props) => {
  return (
    <div className="px-8 py-10">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-white">Campaign "{campaign.title}" details</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-10 w-3/5">
          <CampaignDetailsItem
            title={campaign.manager}
            subtitle="Address of manager"
            desc="The manager create this campaign and can create requests to withdraw money"
          />
          <CampaignDetailsItem
            title={campaign.minContribution}
            subtitle="Minimum contribution (wei)"
            desc="You must contribute at least this much wei to become an approver"
          />
          <CampaignDetailsItem
            title={campaign.requestsCount}
            subtitle="Number of requests"
            desc="A request tries to withdraw money from the contract. Requests must be approved by approvers."
          />
          <CampaignDetailsItem
            title={campaign.approversCount}
            subtitle="Number of approvers"
            desc="Number of approvers who have already donated to this campaign."
          />
          <CampaignDetailsItem
            title={campaign.balance}
            subtitle="Campaign balance (ether)"
            desc="The balance is how much money this campaign has left to spend."
          />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      campaign: await campaignsDetails(params.campaignId),
    },
  };
};

export default CampaignDetailsPage;
