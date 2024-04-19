export type CryptoType = {
  name: string;
  network: string;
  tokenStandart?: string;
  icon: string;
  contactAddress?: string;
  calculateTransationFee?: any;
  sendTransation?: any;
};

const cryptos: CryptoType[] = [
  {
    name: "USDT",
    network: "BNB Chain",
    tokenStandart: "bep-20",
    icon: "/usdt.svg",
    contactAddress: "0x55d398326f99059ff775485246999027b3197955",
  },
  {
    name: "Ton",
    network: "The Open Network",
    icon: "/ton.svg",
  },
  {
    name: "USDT",
    network: "Ethereum Mainnet",
    tokenStandart: "erc-20",
    icon: "/usdt.svg",
    contactAddress: "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
  },
];

if (import.meta.env.DEV) {
  cryptos.push({
    name: "ETH",
    network: "Sepolia",
    icon: "/eth.svg",
    tokenStandart: "sepolia test",
  });
}

export default cryptos;
