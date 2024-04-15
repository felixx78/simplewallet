export type Network = {
  name: string;
  derivePath: string;
  web3: string;
  icon: string;
};

const networks: Array<Network> = [
  {
    name: "Ethereum Mainnet",
    derivePath: "m/44'/60'/0'/0/0",
    web3: "https://rpc.ankr.com/eth",
    icon: "/eth.jpg",
  },
  {
    name: "BNB Chain",
    derivePath: "m/44'/60'/0'/0/0",
    web3: "https://bsc-dataseed1.binance.org:443",
    icon: "/bnb.svg",
  },
];

export default networks;
