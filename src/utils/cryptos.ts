import getBalance from "./getBalance";
import getTonBalance from "./getTonBalance";

export type CryptoType = {
  name: string;
  network: string;
  tokenStandart?: string;
  icon: string;
  getBalance: (address: string) => string | Promise<string>;
};

const cryptos: CryptoType[] = [
  {
    name: "USDT",
    network: "BNB Chain",
    tokenStandart: "bep-20",
    icon: "/usdt.svg",
    getBalance: (address: string) =>
      getBalance(
        "https://bsc-dataseed1.binance.org:443",
        "0x55d398326f99059ff775485246999027b3197955",
        address
      ),
  },
  {
    name: "Ton",
    network: "The Open Network",
    icon: "/ton.svg",
    getBalance: getTonBalance,
  },
  {
    name: "USDT",
    network: "Ethereum Mainnet",
    tokenStandart: "erc-20",
    icon: "/usdt.svg",
    getBalance: (address: string) =>
      getBalance(
        "https://rpc.ankr.com/eth",
        "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
        address
      ),
  },
];

export default cryptos;
