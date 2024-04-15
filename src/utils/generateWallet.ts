import * as bip39 from "bip39";
import BIP32Factory from "bip32";
import * as ecc from "tiny-secp256k1";
import { keccak_256 } from "@noble/hashes/sha3";
import { Buffer } from "buffer";
import { ec as EC } from "elliptic";

const ec = new EC("secp256k1");

const bip32 = BIP32Factory(ecc);

function generateWallet(seedPhrase: string, derivePath: string) {
  const seed = bip39.mnemonicToSeedSync(seedPhrase);

  const node = bip32.fromSeed(seed);

  const childNode = node.derivePath(derivePath);

  const privateKey = "0x" + childNode.privateKey!.toString("hex");
  const publicKey = "0x" + childNode.publicKey!.toString("hex");

  const ecKey = ec.keyFromPublic(childNode.publicKey, "hex");
  const uncompressPublicKey = ecKey.getPublic().encode("hex", false).slice(2);
  const addressUInt = keccak_256(Buffer.from(uncompressPublicKey, "hex")).slice(
    -20
  );
  const address = "0x" + Buffer.from(addressUInt).toString("hex");

  return {
    address: address,
    publicKey,
    privateKey,
  };
}

export default generateWallet;
