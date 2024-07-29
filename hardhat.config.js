require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xb0d5cc338dab3564ad14bec8991c303dedbbf9957477a61b490faf377599de92"], //Your private key starting with "0x"
    },
  },
};
