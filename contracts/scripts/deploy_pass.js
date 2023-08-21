const { deploy_pass } = require("./lib_deploy.js");
require("dotenv").config();

const GLACIER_PASS_WHITELIST_MINT_START = process.env.GLACIER_PASS_WHITELIST_MINT_START;
const GLACIER_PASS_OPEN_MINT_START = process.env.GLACIER_PASS_OPEN_MINT_START;
const GLACIER_PASS_FEE_NUMERATOR = process.env.GLACIER_PASS_FEE_NUMERATOR;
const GLACIER_PASS_WHITELIST_AMOUNT = process.env.GLACIER_PASS_WHITELIST_AMOUNT;

deploy_pass(GLACIER_PASS_WHITELIST_MINT_START, GLACIER_PASS_OPEN_MINT_START, GLACIER_PASS_FEE_NUMERATOR, GLACIER_PASS_WHITELIST_AMOUNT)
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
