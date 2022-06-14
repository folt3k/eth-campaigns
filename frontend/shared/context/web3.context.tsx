import * as React from "react";
import { useEffect } from "react";

import web3 from "../../../ethernum/web3";

export type IWeb3Context = {
  currentAccountAddress: string;
  setCurrentAccountAddress: (address: string) => void;
};

export const Web3Context = React.createContext<IWeb3Context | null>(null);

const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentAccountAddress, setCurrentAccountAddress] = React.useState<string>(null);

  useEffect(() => {
    const fetchCurrentAccount = async () => {
      const accounts = await web3.eth.getAccounts();

      if (accounts?.length) {
        setCurrentAccountAddress(accounts[0]);
      }
    };

    fetchCurrentAccount();
  });

  return (
    <Web3Context.Provider value={{ currentAccountAddress, setCurrentAccountAddress }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
