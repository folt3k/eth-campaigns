import * as React from "react";
import { useEffect } from "react";

import web3 from "../../../ethernum/web3";

export type IWeb3Context = {
  currentAccountAddress: string;
  currentAccountBalance: string;
  // setCurrentAccountAddress: (address: string) => void;
  // setCurrentAccountBalance: string;
};

export const Web3Context = React.createContext<IWeb3Context | null>(null);

const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentAccountAddress, setCurrentAccountAddress] = React.useState<string>(null);
  const [currentAccountBalance, setCurrentAccountBalance] = React.useState<string>("0");

  useEffect(() => {
    const fetchCurrentAccount = async () => {
      const accounts = await web3.eth.getAccounts();

      if (accounts?.length) {
        const balance = await web3.eth.getBalance(accounts[0]);

        setCurrentAccountAddress(accounts[0]);
        setCurrentAccountBalance(balance);
      }
    };

    fetchCurrentAccount();
  }, []);

  return (
    <Web3Context.Provider value={{ currentAccountAddress, currentAccountBalance }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
