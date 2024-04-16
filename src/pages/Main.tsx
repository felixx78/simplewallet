import { useEffect, useState } from "react";
import cryptos from "../utils/cryptos";
import CryptoItem from "../components/CryptoItem";
import getNetworks, { Network } from "../utils/networks";
import { useSeed } from "../contexts/SeedContext";
import { LuPlus } from "react-icons/lu";
import {
  HiOutlineArrowSmallUp,
  HiOutlineArrowSmallLeft,
} from "react-icons/hi2";
import AddressItem from "../components/AddressItem";

function Main() {
  const seed = useSeed();

  const [mode, setMode] = useState<"balance" | "address">("balance");

  const [networks, setNetworks] = useState<Network[] | undefined>();

  useEffect(() => {
    (async () => {
      const newNetworks = await getNetworks(seed.seed);
      setNetworks(newNetworks);
    })();
  }, [seed.seed]);

  if (!networks) return <p>loading</p>;

  const Actions = () => {
    return (
      <div className="flex gap-6 justify-center mb-6">
        <button
          onClick={() => setMode("address")}
          className="w-[39%] bg-foreground py-2 rounded-md flex items-center justify-center gap-2"
        >
          <p className="font-medium text-md">receive</p>
          <LuPlus color="text-copy-light" size="22px" />
        </button>
        <button className="w-[39%] bg-foreground py-2 rounded-md flex items-center justify-center gap-2">
          <p className="font-medium text-md">send</p>
          <HiOutlineArrowSmallUp color="text-copy-light" size="22px" />
        </button>
      </div>
    );
  };

  const ReceiveGoBack = () => {
    return (
      <div className="mb-6 px-4 flex justify-between">
        <button onClick={() => setMode("balance")}>
          <HiOutlineArrowSmallLeft size="25px" />
        </button>

        <p className="font-medium">Select address to receive</p>
      </div>
    );
  };

  return (
    <div className="pt-6">
      {mode === "balance" && <Actions />}
      {mode === "address" && <ReceiveGoBack />}

      <div className="flex flex-col gap-6 p-6 border-border border-t">
        {mode === "balance" &&
          cryptos.map((i) => (
            <CryptoItem
              key={i.name + i.network}
              data={i}
              network={networks.find((n) => n.name === i.network)!}
            />
          ))}
        {mode === "address" &&
          networks.map((network) => (
            <AddressItem key={network.name} data={network} />
          ))}
      </div>
    </div>
  );
}
export default Main;
