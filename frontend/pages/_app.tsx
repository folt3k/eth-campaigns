import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import { AppProps } from "next/app";
import { Slide, ToastContainer } from "react-toastify";

import Web3Provider from "../shared/context/web3.context";
import LayoutHeader from "../shared/components/header/header";
import LoaderProvider from "../shared/context/loader.context";

declare global {
  interface Window {
    ethereum: { request: (params: { method: string }) => Promise<void> };
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <LoaderProvider>
        <div>
          <LayoutHeader />
          <Component {...pageProps} />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
      </LoaderProvider>
    </Web3Provider>
  );
}
