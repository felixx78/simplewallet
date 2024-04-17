import { createContext, useContext, useEffect, useState } from "react";
import { hashPassword } from "../utils/password";
import { decryptSeedPhrase } from "../utils/seed";
import getNetworks, { Network } from "../utils/networks";

type WalletContextType = {
  auth: (password: string) => boolean;
  setSeed: (seed: string) => void;
  networks: Network[];
  isLoading: boolean;
  isLogged: boolean;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [seed, setSeed] = useState("");
  const [networks, setNetworks] = useState<Network[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (seed) {
      setIsLoading(true);
      getNetworks(seed)
        .then((data) => setNetworks(data))
        .finally(() => setIsLoading(false));
    } else setNetworks([]);
  }, [seed]);

  const auth = (password: string) => {
    const encryptedPassword = localStorage.getItem("password");

    if (hashPassword(password) === encryptedPassword) {
      setSeed(decryptSeedPhrase(password));
      return true;
    }

    return false;
  };

  return (
    <WalletContext.Provider
      value={{
        setSeed,
        auth,
        networks,
        isLoading,
        isLogged: !!networks.length,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext)!;
