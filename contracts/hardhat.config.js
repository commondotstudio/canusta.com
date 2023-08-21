require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
// require("./tasks/faucet");

// If you are using MetaMask, be sure to change the chainId to 1337
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const SEPOLIA_PROJECT_ID = process.env.SEPOLIA_PROJECT_ID;

// task("deploy", "Prints an account's balance").setAction(async () => {});

module.exports = {
  solidity: "0.8.19",
  paths: {
    artifacts: './artifacts',
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${SEPOLIA_PROJECT_ID}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
      gasPrice: 8000000000,
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
