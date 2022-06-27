type Props = {
  title: string | number;
  subtitle: string;
  desc: string;
};

const CampaignDetailsItem = ({ title, subtitle, desc }: Props) => {
  return (
    <div className="bg-gray-700 rounded-3xl border border-secondary px-4 py-8 flex flex-col">
      <h3 className="text-secondary text-2xl font-bold break-words">{title}</h3>
      <span className="text-gray-400">{subtitle}</span>
      <div className="mt-4">{desc}</div>
    </div>
  );
};

export default CampaignDetailsItem;
