import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import './tasks/index';
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import '@primitivefi/hardhat-dodoc';
import "hardhat-etherscan-abi";
import "solidity-coverage";
import "hardhat-gas-reporter";

dotenv.config();

const config: HardhatUserConfig = {

  solidity: "0.8.8",

  networks: {

    hardhat: {
      forking: {
        url: process.env.ALCHEMY_HTTP_RINKEBY ?? "",
        enabled: true,
      }
    },

    rinkeby: {
      url: process.env.ALCHEMY_HTTP_RINKEBY ?? "",
      accounts: [
        process.env.ACCOUNT1_KEY ?? "",
        process.env.ACCOUNT2_KEY ?? "",
        process.env.ACCOUNT3_KEY ?? ""
      ],
    },

    goerli: {
      url: process.env.ALCHEMY_HTTP_GOERLI ?? "",
      accounts: [
        process.env.ACCOUNT1_KEY ?? "",
        process.env.ACCOUNT2_KEY ?? "",
        process.env.ACCOUNT3_KEY ?? ""
      ],
    },

    bnbt: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [
        process.env.ACCOUNT1_KEY ?? "",
        process.env.ACCOUNT2_KEY ?? "",
        process.env.ACCOUNT3_KEY ?? ""
      ],
    },
  },

  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_KEY ?? "",
      bscTestnet: process.env.BSCSCAN_KEY ?? ""
    }
  },

  gasReporter: {
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_KEY ?? "",
    enabled: true
  }
}

export default config;
