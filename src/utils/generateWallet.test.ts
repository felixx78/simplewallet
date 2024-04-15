import * as bip39 from "bip39";
import generateWallet from "./generateWallet";
import { ethers } from "ethers";
import { describe, it, expect } from "@jest/globals";

describe("generateWallet", () => {
  it("eth & bnb chain test", () => {
    const derivePath = "m/44'/60'/0'/0/0";
    const mnemonic = bip39.generateMnemonic();

    const wallet1 = generateWallet(mnemonic, derivePath);
    const wallet2 = ethers.Wallet.fromPhrase(mnemonic);

    expect(wallet1.address).toBe(wallet2.address.toLocaleLowerCase());
    expect(wallet1.publicKey).toBe(wallet2.publicKey);
    expect(wallet1.privateKey).toBe(wallet2.privateKey);
  });
});
