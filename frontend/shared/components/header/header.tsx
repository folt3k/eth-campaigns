import React, { useContext } from "react";

import { Web3Context } from "../../context/web3.context";
import { truncateAddress } from "../../helpers/truncate-address.helper";
import { WalletIcon } from "../icons/icons";

type Props = {};

const LayoutHeader = () => {
  const { currentAccountAddress } = useContext(Web3Context);

  return (
    <header className="px-6 py-4 bg-gray-700">
      <div className="mx-auto container">
        <div className="flex justify-between">
          <div className="font-bold text-xl text-white">Campaigns</div>
          <div>
            <span className="font-bold mr-4">$3.56 ETH</span>
            {currentAccountAddress && (
              <div>
                <div className="rounded-full border-primary border-2 w-11 h-11 flex justify-center items-center">
                  <WalletIcon theme="primary" />
                </div>
                <div className="bg-gray-500 rounded-3xl">
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
