const hdWallerProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

const compiledCampaignFactory = require("./build/CampaignFactory.js");

const { METAMASK_TEST_SEED_PHRASE } = require("./config.js");

(async () => {
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
})();
