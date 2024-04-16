import { AES, enc } from "crypto-js";

export function encryptSeedPhrase(seed: string, password: string) {
  const encryptedSeed = AES.encrypt(seed, password).toString();

  return encryptedSeed;
}

export function decryptSeedPhrase(password: string) {
  const encryptedSeed = localStorage.getItem("seed");
  if (!encryptedSeed) return "";

  const decryptedBytes = AES.decrypt(encryptedSeed, password);
  const decryptedSeed = decryptedBytes.toString(enc.Utf8);

  return decryptedSeed;
}
