const HDWalletProvider = require("@truffle/hdwallet-provider");
 
const private_key = "6e5e0349807d04a42c7480b9c1181dc9014acf7bed0c5dc8edd7fd20c02a39b9";
 
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
      // must be a thunk, otherwise truffle commands may hang in CI
      networkCheckTimeout: 10000, 
      provider: () =>
        new HDWalletProvider(private_key, "https://kovan.infura.io/v3/3fd7c8337c8142f8b3c6b0c0dfa1c565",
            0, 1, true, "m/44'/1'/0'/0/"
        ),
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    }
  }
};