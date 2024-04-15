import generateWallet from "./generateWallet";
import { mnemonicToWalletKey } from "@ton/crypto";
import { WalletContractV4 } from "@ton/ton";

export type Network = {
  name: string;
  icon: string;
  address: string;
  publicKey: string;
  privateKey: string;
};

const getNetworks = async (seedPhrase: string) => {
  const networks: Array<Network> = [];

  const wallet = generateWallet(seedPhrase, "m/44'/60'/0'/0/0");

  networks.push({
    name: "Ethereum Mainnet",
    icon: "/eth.jpg",
    address: wallet.address,
    publicKey: wallet.publicKey,
    privateKey: wallet.privateKey,
  });

  networks.push({
    name: "BNB Chain",
    icon: "/bnb.svg",
    address: wallet.address,
    publicKey: wallet.publicKey,
    privateKey: wallet.privateKey,
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
  });

  return networks;
};

export default getNetworks;
