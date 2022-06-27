import React, { SyntheticEvent, useContext, useRef } from "react";
import { campaignContract } from "../../../../../ethernum/contracts";
import { Web3Context } from "../../../../shared/context/web3.context";

type Props = {
  campaignAddress: string;
};

const CampaignContributeForm = ({ campaignAddress }: Props) => {
  const contributeAmountInputRef = useRef<HTMLInputElement>(null);
  const { currentAccountAddress } = useContext(Web3Context);

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const contract = campaignContract(campaignAddress);
    const value = +contributeAmountInputRef.current.value;

    if (value) {
      await contract.methods.contribute().send({
        from: currentAccountAddress,
        value: value,
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col">
        <label htmlFor="contributeAmount">Amount to Contribute (wei)</label>
        <input
          ref={contributeAmountInputRef}
          type="text"
          name="contributeAmount"
          className="rounded-lg px-4 py-3 bg-secondary-dark outline-0"
        />
      </div>
      <button className="btn mt-5" type="submit">
        Contribute
      </button>
    </form>
  );
};

export default CampaignContributeForm;
