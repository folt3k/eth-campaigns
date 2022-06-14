import { Campaign } from "../../../../shared/dto/campaign.dto";

type Props = {
  data: Campaign;
};

const CampaignListItem = ({ data }: Props) => {
  return (
    <div className="bg-gray-700 rounded-3xl border border-secondary px-4 py-8 flex flex-col">
      <h3 className="text-secondary text-2xl font-bold">{data.title}</h3>
      <span>
        Min contribution: <span className="font-bold">{data.minContribution} wei</span>
      </span>
      <div className="flex flex-col mt-8">
        <div className="mb-2 uppercase font-bold text-xs">Became a contributor</div>
        <button className="btn btn-xl">View details</button>
      </div>
    </div>
  );
};

export default CampaignListItem;
