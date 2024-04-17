import { useState } from "react";
import cryptos from "../utils/cryptos";
import CryptoItem from "../components/CryptoItem";
import { useWallet } from "../contexts/WalletContext";
import { LuPlus } from "react-icons/lu";
import {
  HiOutlineArrowSmallUp,
  HiOutlineArrowSmallLeft,
} from "react-icons/hi2";
import AddressItem from "../components/AddressItem";

function Main() {
  const [mode, setMode] = useState<"balance" | "address">("balance");

  const wallet = useWallet();

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
              network={wallet.networks.find((n) => n.name === i.network)!}
            />
          ))}
        {mode === "address" &&
          wallet.networks.map((network) => (
            <AddressItem key={network.name} data={network} />
          ))}
      </div>
    </div>
  );
}
export default Main;
