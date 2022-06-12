const ganache = require("ganache");
const Web3 = require("web3");

const compiledCampaign = require("../build/Campaign.js");
const compiledCampaignFactory = require("../build/CampaignFactory.js");

const web3 = new Web3(
  ganache.provider({
    logging: {
      logger: {
        log: () => {},
      },
    },
  })
);

(async () => {
  const accouts = await web3.eth.getAccounts();

  const campaignFactoryContract = await new web3.eth.Contract(compiledCampaignFactory.abi)
    .deploy({
      data: compiledCampaignFactory.bytecode,
    })
    .send({
      from: accouts[0],
      gas: "10000000",
    });

  const createdCampaign = await campaignFactoryContract.methods.createCampaign("test", "1000").send({
    from: accouts[0],
    gas: "10000000",
  });

  const campaignAddress = createdCampaign.events.CampaignCreated.returnValues["0"];

  const campaignContract = new web3.eth.Contract(compiledCampaign.abi, campaignAddress);

  // get manager

  const manager = await campaignContract.methods.manager().call();

  console.log("Manager: ", manager);

  // contribute to campaign

  await campaignContract.methods.contribute().send({
    from: accouts[1],
    value: "1000",
  });

  const isContributor = await campaignContract.methods.approvers(accouts[1]).call();

  console.log("isContributor: ", isContributor);

  // create payment request

  await campaignContract.methods.createRequests("For marketing.", "100").send({
    from: accouts[0],
    gas: "1000000",
  });

  const requests = await campaignContract.methods.requests(0).call();

  console.log("Requests: ", requests);
})();
