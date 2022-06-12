import hdWallerProvider from "@truffle/hdwallet-provider";
import Web3 from "web3";

import compiledCampaignFactory from "./build/CampaignFactory.js";

import { METAMASK_TEST_SEED_PHRASE } from "./config.js";

const provider = new hdWallerProvider(
  METAMASK_TEST_SEED_PHRASE,
  "https://rinkeby.infura.io/v3/73ef239516bb403d8d0fcc0d8df1a87f"
);
const web3 = new Web3(provider);

const accounts = await web3.eth.getAccounts();

const contract = await new web3.eth.Contract(compiledCampaignFactory.abi)
  .deploy({ data: compiledCampaignFactory.bytecode })
  .send({ from: accounts[0] });

console.log(contract.options.address);
