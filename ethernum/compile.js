import path from "path";
import fs from "fs-extra";
import solc from "solc";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    `export default ${JSON.stringify({
      bytecode: item.evm.bytecode.object,
      abi: item.abi,
    })}`
  );
});
