export type Network = {
  name: string;
  derivePath: string;
  web3: string;
};

const networks: Array<Network> = [
  {
    name: "Etherium Mainnet",
    derivePath: "m/44'/60'/0'/0/0",
    web3: "https://rpc.ankr.com/eth",
  },
  {
    name: "BNB Chain",
    derivePath: "m/44'/60'/0'/0/0",
    web3: "https://bsc-dataseed1.binance.org:443",
  },
];

export default networks;
