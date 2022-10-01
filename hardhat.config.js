require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

const projectId = "afab296baa5a486b9d8366c6fda0150b";
// const projectId = "2FX0ZxkFt5qw44ZiJ1m9xnHhuoH";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3//${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
