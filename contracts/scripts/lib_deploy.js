const fs = require('fs');
const path = require('path');
const hre = require("hardhat");

async function deploy_pass(whitelistMintStart, openMintStart, feeNumerator, whitelistAmount) {
  // Make an array to save the deployment data
  let contract_addresses = {};

  // Get the deployment wallet
  const [deployer] = await hre.ethers.getSigners();

  // Save data
  contract_addresses["deployer"] = String(deployer.address);

  console.log(
    "Deploying contracts with the account: ",
    deployer.address
  );

  // Deploy the Ticket and Souvenir contract
  const pass_factory = await hre.ethers.getContractFactory("GlacierMintPass");
  const pass_sc = await pass_factory.deploy(whitelistMintStart, openMintStart, feeNumerator, whitelistAmount);

  // Wait until contract is deployed
  await pass_sc.deployed();

  // Save data
  contract_addresses["GlacierMintPass"] = String(pass_sc.address);

  console.log("GlacierMintPass contract deployed to: ", pass_sc.address);

  // Save the deployment data as a JSON file
  fs.writeFileSync(path.resolve(__dirname, "../artifacts/contract-address.json"),
    JSON.stringify(contract_addresses), function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
}

module.exports = { deploy_pass };