import { useEffect, useState } from "react";
import cryptos from "../utils/cryptos";
import CryptoItem from "../components/CryptoItem";
import getNetworks, { Network } from "../utils/networks";
import { useSeed } from "../contexts/SeedContext";

function Main() {
  const seed = useSeed();

  const [networks, setNetworks] = useState<Network[] | undefined>();

  useEffect(() => {
    (async () => {
      const newNetworks = await getNetworks(seed.seed);
      setNetworks(newNetworks);
    })();
  }, [seed.seed]);

  return (
    <div className="flex flex-col gap-6 px-6 py-2">
      {networks &&
        cryptos.map((i) => (
          <CryptoItem
            key={i.name + i.network}
            data={i}
            network={networks.find((n) => n.name === i.network)!}
          />
        ))}
    </div>
  );
}
export default Main;
