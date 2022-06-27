import React, { SyntheticEvent, useContext, useRef } from "react";
import { toast } from "react-toastify";

import { campaignContract } from "../../../../../ethernum/contracts";
import { Web3Context } from "../../../../shared/context/web3.context";
import { LoaderContext } from "../../../../shared/context/loader.context";

type Props = {
  campaignAddress: string;
};

const CampaignContributeForm = ({ campaignAddress }: Props) => {
  const contributeAmountInputRef = useRef<HTMLInputElement>(null);
  const { currentAccountAddress } = useContext(Web3Context);
  const { showLoader, hideLoader } = useContext(LoaderContext);

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const contract = campaignContract(campaignAddress);
    const value = contributeAmountInputRef.current.value;

    if (value) {
      showLoader();
      try {
        await contract.methods.contribute().send({
          from: currentAccountAddress,
          value: "100000000000000",
        });
        toast.success("You have successfully contributed this campaign!");
      } catch (e) {
        toast.error("Something went wrong.");
      }
      hideLoader();
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
