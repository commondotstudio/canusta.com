const fs = require('fs');
const path = require('path');
const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

const { deploy_pass } = require('../scripts/lib_deploy.js');
const { Console } = require('console');

describe("Deployment script", function () {
    // Define all deployed contract names
    const CONTRACT_NAMES = ["GlacierMintPass"];

    let deployer;
    let contract_addresses;
    let pass_artifact;
    let pass_sc;

    // `beforeEach` will run before each test, re-deploying the contract every
    // time. It receives a callback, which can be async.
    before(async function () {
        // Get deployer as signer
        [deployer] = await ethers.getSigners();
        let timestamp = await time.latest() + 1000

        // Execute deployment
        await deploy_pass(timestamp, timestamp, 50, 10);

        // Read `contract-address.json` into a variable
        contract_addresses = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../artifacts/contract-address.json")));

        // We import the contract's artifacts, since we will be using them with ethers
        pass_artifact = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../artifacts/contracts/GlacierMintPass.sol/GlacierMintPass.json")));


        // Connect to deployed contracts via ethers
        pass_sc = new ethers.Contract(contract_addresses.GlacierMintPass, pass_artifact["abi"], deployer);

    });

    describe("Contract deployment", function () {
        it("Should create a proper `contract-address.json` file", async function () {
            // Check if the addresses of all contracts were logged
            expect(contract_addresses).to.include.keys(CONTRACT_NAMES);
            // Check that for each contract there is a correct address in the JSON file
            for (let i = 0; i < CONTRACT_NAMES.length; i++) {
                expect(contract_addresses[CONTRACT_NAMES[i]]).to.be.properAddress;
            }
        });

        it("Should deploy the contracts under the saved addresses", async function () {
            // Interact with them to show that they are functioning
            await expect(pass_sc.TOKEN_AMOUNT()).not.to.be.reverted;
        });
    });
});  