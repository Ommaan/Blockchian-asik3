require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  solidity: "0.8.4", 
  networks: {
    linea: {
      url: process.env.REACT_APP_LINEA_RPC_URL, // Use the correct environment variable names
      accounts: [process.env.REACT_APP_PRIVATE_KEY], // Use the correct environment variable names
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY, // Use the correct environment variable name
  },
};
