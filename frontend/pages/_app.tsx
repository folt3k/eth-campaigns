import "../styles/global.css";

import { AppProps } from "next/app";

import Web3Provider from "../shared/context/web3.context";
import LayoutHeader from "../shared/components/header/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <div>
        <LayoutHeader />
        <Component {...pageProps} />
      </div>
    </Web3Provider>
  );
}
