const Web3 = require("web3");

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/73ef239516bb403d8d0fcc0d8df1a87f"
  );
  web3 = new Web3(provider);
}

export default web3;
