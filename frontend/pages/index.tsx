import { GetServerSideProps } from "next";

import { campaignFactoryContract } from "../../ethernum/contracts.js";

type Props = {
  campaigns: string[];
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
  const campaigns = await campaignFactoryContract.methods.getCampaigns().call();

  return {
    props: {
      campaigns,
    },
  };
};

export default Home;
