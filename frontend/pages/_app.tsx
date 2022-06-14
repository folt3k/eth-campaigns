import "../styles/global.css";

import { AppProps } from "next/app";

import Web3Provider from "../shared/context/web3.context";
import LayoutHeader from "../shared/components/header/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <div>
        <LayoutHeader />
        <div className="px-6">
          <div className="mx-auto container">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </Web3Provider>
  );
}
