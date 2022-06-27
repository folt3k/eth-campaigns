import { Campaign } from "../../shared/dto/campaign.dto";

type Props = {
  campaign: Campaign;
};

export const CampaignDetailsPage = ({ campaign }: Props) => {
  return (
    <div className="px-8">
      <div className="container mx-auto">
        <div>
          <h2>Campaign "{campaign.title}" details</h2>
        </div>
        <div className="grid grid-cols-6"></div>
      </div>
    </div>
  );
};
