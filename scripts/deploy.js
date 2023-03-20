const { ethers } = require("hardhat");

require("dotenv").config({
  path: ".env",
});

const CID = "bafk2bzaced7xrpcqmijgvrqowawbhzpk4kco77kvuaftvfqlcxod5pguh73wc";

async function main() {
  /**
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so dataDaoFile here is a factory for instances of our CoinFile contract.
    **/
  // Place the code here
}

// Call the main function and catch if there is any error
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// call main

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
