import React, { useContext } from "react";

import { Web3Context } from "../../context/web3.context";
import { truncateAddress } from "../../helpers/truncate-address.helper";
import { WalletIcon } from "../icons/icons";
import web3 from "../../../../ethernum/web3";

type Props = {};

const LayoutHeader = () => {
  const { currentAccountAddress, currentAccountBalance } = useContext(Web3Context);

  console.log(currentAccountBalance);

  const balance = (+web3.utils.fromWei(currentAccountBalance)).toFixed(3);

  return (
    <header className="px-6 py-4 bg-gray-700">
      <div className="mx-auto container">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-white">Campaigns</div>
          <div className="flex items-center">
            <span className="font-bold mr-4">${balance} ETH</span>
            {currentAccountAddress && (
              <div className="flex items-center">
                <div className="rounded-full border-primary border-2 w-11 h-11 flex justify-center items-center z-10 bg-dark">
                  <WalletIcon theme="primary" />
                </div>
                <div className="bg-gray-500 rounded-3xl py-1 pr-3 pl-8 shrink-0 -ml-6 z-0">
                  <span className="font-bold text-white">{truncateAddress(currentAccountAddress)}</span>
                </div>
              </div>
            )}
            {!currentAccountAddress && <button className="btn">Connect Wallet</button>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
