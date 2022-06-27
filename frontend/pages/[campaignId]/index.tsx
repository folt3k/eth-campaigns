import { GetServerSideProps } from "next";

import { Campaign } from "../../shared/dto/campaign.dto";
import { campaignsDetails } from "../../../ethernum/contracts";
import CampaignDetailsItem from "../../modules/campaigns/components/details-item/details-item";
import CampaignContributeForm from "../../modules/campaigns/components/contribute-form/contribute-form";

type Props = {
  campaign: Campaign;
};

const CampaignDetailsPage = ({ campaign }: Props) => {
  return (
    <div className="px-8 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Campaign "{campaign.title}" details</h2>
        <div className="flex gap-10">
          <div className="w-3/5">
            <div className="grid grid-cols-2 gap-6">
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
          <div className="w-2/5">
            <CampaignContributeForm campaignAddress={campaign.contractAddress} />
          </div>
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
