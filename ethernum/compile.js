const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");

const buildPath = path.resolve(__dirname, "build");
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf-8");

fs.emptyDirSync(buildPath);

const compilerInput = {
  language: "Solidity",
  sources: {
    campaign: {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const compiled = JSON.parse(solc.compile(JSON.stringify(compilerInput)));

Object.keys(compiled.contracts.campaign).forEach((key) => {
  const item = compiled.contracts.campaign[key];

  fs.outputFileSync(
    path.resolve(buildPath, `${key}.js`),
    `module.exports = ${JSON.stringify({
      bytecode: item.evm.bytecode.object,
      abi: item.abi,
    })}`
  );
});
