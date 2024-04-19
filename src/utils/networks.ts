import generateWallet from "./generateWallet";
import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4 } from "@ton/ton";
import getBalance from "./getBalance";
import getTonBalance from "./getTonBalance";

export type Network = {
  name: string;
  icon: string;
  address: string;
  publicKey: string;
  privateKey: string;
  getBalance: (contactAddress?: string) => Promise<string>;
};

const getNetworks = async (seedPhrase: string) => {
  const networks: Array<Network> = [];

  const wallet = generateWallet(seedPhrase, "m/44'/60'/0'/0/0");

  networks.push({
    name: "BNB Chain",
    icon: "/bnb.svg",
    address: wallet.address,
    publicKey: wallet.publicKey,
    privateKey: wallet.privateKey,
    getBalance: function (contactAddress?: string) {
      return getBalance(
        "https://bsc-dataseed1.binance.org:443",
        this.address,
        contactAddress
      );
    },
  });

  const tonKey = await mnemonicToWalletKey(seedPhrase.split(" "));
  const tonWallet = WalletContractV4.create({
    publicKey: tonKey.publicKey,
    workchain: 0,
  });

  networks.push({
    name: "The Open Network",
    icon: "/ton.svg",
    address: tonWallet.address.toString(),
    publicKey: tonWallet.publicKey.toString(),
    privateKey: wallet.privateKey.toString(),
    getBalance: function () {
      return getTonBalance(this.address);
    },
  });

  networks.push({
    name: "Ethereum Mainnet",
    icon: "/eth.svg",
    address: wallet.address,
    publicKey: wallet.publicKey,
    privateKey: wallet.privateKey,
    getBalance: function (contactAddress?: string) {
      return getBalance(
        "https://rpc.ankr.com/eth",
        this.address,
        contactAddress
      );
    },
  });

  if (import.meta.env.DEV) {
    networks.push({
      name: "Sepolia",
      icon: "/eth.svg",
      address: wallet.address,
      publicKey: wallet.publicKey,
      privateKey: wallet.privateKey,
      getBalance: function () {
        return getBalance("https://rpc2.sepolia.org", this.address);
      },
    });
  }

  return networks;
};

export default getNetworks;
