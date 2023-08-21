const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");
const crypto = require('crypto');

let passFactory;
let pass;
let owner;
let addr1;
let tokenPrice;
let tokenAmount;
let whitelistAmount;

function getRandomAddress() {
  let id = crypto.randomBytes(32).toString('hex');
  let privateKey = "0x" + id;
  let wallet = new ethers.Wallet(privateKey);
  return wallet.address;
}

describe("Glacier Mint Pass", function () {
  describe("Constructor parameters", function () {
    beforeEach(async function () {
      passFactory = await ethers.getContractFactory("GlacierMintPass");
      [owner, addr1] = await ethers.getSigners();
    });
    it("Should let open sale not be dated before whitelist sale.", async function () {
      let timestamp = await time.latest() + 100;
      await expect(passFactory.deploy(timestamp, timestamp - 1, 0, 10)).to.be.reverted;
    });
    it("Should let whitelist sale date be not in the past.", async function () {
      let timestamp = await time.latest() - 100;
      await expect(passFactory.deploy(timestamp, timestamp, 0, 10)).to.be.reverted;
    });
  })

  describe("Time-invariant functionalities", function () {
    beforeEach(async function () {
      passFactory = await ethers.getContractFactory("GlacierMintPass");
      [owner, addr1] = await ethers.getSigners();
      // Create a timestamp in the future because the contract doesn't accept timestamps in the past
      let timestamp = await time.latest() + 100;
      whitelistAmount = 10;
      pass = await passFactory.deploy(timestamp, timestamp, 0, whitelistAmount);
      tokenAmount = await pass.TOKEN_AMOUNT();
    });

    describe("Access Control", function () {
      it("Should deployer be DEFAULT_ADMIN_ROLE.", async function () {
        let defaultAdminRole = await pass.DEFAULT_ADMIN_ROLE();
        expect(await pass.hasRole(defaultAdminRole, owner.address)).to.be.true;
      });
      it("Should only allow DEFAULT_ADMIN_ROLE to add to and remove from whitelist.", async function () {
        await expect(pass.connect(addr1).grantWhitelist(addr1.address)).to.be.reverted;
        await expect(pass.grantWhitelist(addr1.address)).not.to.be.reverted;
        expect(await pass.isWhitelisted(addr1.address)).to.be.true;
        await expect(pass.connect(addr1).revokeWhitelist(addr1.address)).to.be.reverted;
        await expect(pass.revokeWhitelist(addr1.address)).not.to.be.reverted;
        expect(await pass.isWhitelisted(addr1.address)).to.be.false;
      });
      it("Should not allow address to be added twice to whitelist.", async function () {
        await expect(pass.grantWhitelist(addr1.address)).not.to.be.reverted;
        expect(await pass.isWhitelisted(addr1.address)).to.be.true;
        await expect(pass.grantWhitelist(addr1.address)).to.be.reverted;
      });
      it("Should not allow add more people to whitelist than defined.", async function () {
        // Make up random wallets so that can fill the whitelist
        for (let i = 0; i < whitelistAmount; i++) {
          let randomAddress = getRandomAddress();
          await expect(pass.grantWhitelist(randomAddress)).not.to.be.reverted;
        }
        // Add one wallet more than allowed
        let randomAddress = getRandomAddress();
        await expect(pass.grantWhitelist(randomAddress)).to.be.reverted;
      });
    });

    describe("Admin Minting", function () {
      it("Should DEFAULT_ADMIN_ROLE let use mintAdmin.", async function () {
        expect(await pass.mintAdmin(owner.address, 10))
          .to.changeTokenBalance(pass, owner.address, 10);
      });

      it("Should other users not let use mintAdmin.", async function () {
        await expect(pass.connect(addr1).mintAdmin(addr1.address, 1)).to.be.reverted;
      });
      it("Should not allow minting more token than TOKEN_AMOUNT with mintAdmin.", async function () {
        await expect(pass.mintAdmin(owner.address, tokenAmount)).not.to.be.reverted;
        await expect(pass.mintAdmin(owner.address, 1)).to.be.reverted;
      });

    });

  });

  describe("Time-bound functionalities", function () {
    describe("Pre-whitelist sale", function () {
      beforeEach(async function () {
        passFactory = await ethers.getContractFactory("GlacierMintPass");
        [owner, addr1] = await ethers.getSigners();
        // Create a timestamp in the future because the contract doesn't accept timestamps in the past
        let timestamp = await time.latest() + 100000;
        pass = await passFactory.deploy(timestamp, timestamp, 0, 10);
      });
      it("Should allow mintAdmin.", async function () {
        await expect(pass.mintAdmin(owner.address, 1)).not.to.be.reverted;
      });
      it("Should not allow mint for anyone.", async function () {
        await pass.grantWhitelist(addr1.address);
        await expect(pass.mint()).to.be.reverted;
        await expect(pass.connect(addr1).mint()).to.be.reverted;
      });
    });

    describe("Whitelist sale", function () {
      beforeEach(async function () {
        passFactory = await ethers.getContractFactory("GlacierMintPass");
        [owner, addr1] = await ethers.getSigners();
        // Create a timestamp in the future because the contract doesn't accept timestamps in the past
        let timestamp = await time.latest() + 100;
        pass = await passFactory.deploy(timestamp, timestamp + 100000, 0, 10);
        // Wait until the contract is fully deployed before changing the time.
        await pass.deployed();
        // Advance time so that we are in whitelist sale, but not yet in open sale
        await time.increase(200);
        tokenPrice = await pass.TOKEN_PRICE();
        tokenAmount = await pass.TOKEN_AMOUNT();
      });
      it("Should allow mintAdmin.", async function () {
        await expect(pass.mintAdmin(owner.address, 1)).not.to.be.reverted;
      });
      it("Should only allow mint for whitelisted addresses.", async function () {
        await expect(pass.connect(addr1).mint({ value: tokenPrice })).to.be.reverted;
        await pass.grantWhitelist(addr1.address);
        await expect(pass.connect(addr1).mint({ value: tokenPrice })).not.to.be.reverted;
      });
      it("Should not allow mint more than one token per whitelisted address.", async function () {
        await pass.grantWhitelist(addr1.address);
        await expect(pass.connect(addr1).mint({ value: tokenPrice })).not.to.be.reverted;
        await expect(pass.connect(addr1).mint({ value: tokenPrice })).to.be.reverted;
      });
    });

    describe("Open sale and general functionalities", function () {
      beforeEach(async function () {
        passFactory = await ethers.getContractFactory("GlacierMintPass");
        [owner, addr1] = await ethers.getSigners();
        // Create a timestamp in the future because the contract doesn't accept timestamps in the past
        let timestamp = await time.latest() + 100;
        pass = await passFactory.deploy(timestamp, timestamp, 0, 10);
        // Advance time so that we are in whitelist sale, but not yet in open sale
        await time.increase(200);
        tokenPrice = await pass.TOKEN_PRICE();
        tokenAmount = await pass.TOKEN_AMOUNT();
      });
      it("Should allow mintAdmin.", async function () {
        await expect(pass.mintAdmin(owner.address, 1)).not.to.be.reverted;
      });
      it("Should only allow mint when sufficient funds are sent.", async function () {
        await expect(pass.connect(addr1).mint({ value: tokenPrice.sub(1) })).to.be.reverted;
        await expect(pass.connect(addr1).mint({ value: tokenPrice })).not.to.be.reverted;
      });
      it("Should not allow mint more than one token per address.", async function () {
        await expect(pass.connect(addr1).mint({ value: tokenPrice })).not.to.be.reverted;
        await expect(pass.connect(addr1).mint({ value: tokenPrice })).to.be.reverted;
      });
      it("Should not allow more tokens minted than TOKEN_AMOUNT.", async function () {
        await expect(pass.mintAdmin(owner.address, tokenAmount)).not.to.be.reverted;
        await expect(pass.connect(addr1).mint({ value: tokenPrice })).to.be.reverted;
      });
      it("Should not allow withdrawing ether anyone without DEFAULT_ADMIN_ROLE.", async function () {
        await pass.connect(addr1).mint({ value: tokenPrice });
        await expect(pass.connect(addr1).withdrawFunds(addr1.address)).to.be.reverted;
        await expect(pass.withdrawFunds(owner.address)).to.changeEtherBalances([pass, owner], [tokenPrice.mul(-1), tokenPrice]);
      });
    });
  });
});
