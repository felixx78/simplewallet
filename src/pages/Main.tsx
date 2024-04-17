import cryptos from "../utils/cryptos";
import CryptoItem from "../components/CryptoItem";
import { useWallet } from "../contexts/WalletContext";
import { LuPlus } from "react-icons/lu";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Main() {
  const wallet = useWallet();
  const navigate = useNavigate();

  return (
    <div className="pt-6">
      <div className="flex gap-6 justify-center mb-6">
        <button
          onClick={() => navigate("/receive")}
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

      <div className="flex flex-col gap-6 p-6 border-border border-t">
        {cryptos.map((i) => (
          <CryptoItem
            key={i.name + i.network}
            data={i}
            network={wallet.networks.find((n) => n.name === i.network)!}
          />
        ))}
      </div>
    </div>
  );
}
export default Main;
