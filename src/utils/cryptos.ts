export type CryptoType = {
  name: string;
  contactAddress: string;
  network: string;
};

const cryptos: CryptoType[] = [
  {
    name: "usdt",
    contactAddress: "0x55d398326f99059ff775485246999027b3197955",
    network: "BNB Chain",
  },
  {
    name: "usdt",
    contactAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    network: "Etherium Mainnet",
  },
];

export default cryptos;
