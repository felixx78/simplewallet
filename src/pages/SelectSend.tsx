import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useWallet } from "../contexts/WalletContext";
import { useNavigate } from "react-router-dom";
import cryptos from "../utils/cryptos";
import CryptoItem from "../components/CryptoItem";

function SelectSend() {
  const wallet = useWallet();
  const navigate = useNavigate();

  return (
    <div className="pt-6">
      <div className="mb-6 px-4 flex justify-between">
        <button onClick={() => navigate("/")}>
          <HiOutlineArrowSmallLeft size="25px" />
        </button>

        <p className="font-medium">Select token to send</p>
      </div>

      <div className="flex flex-col gap-6 p-6 border-border border-t">
        {cryptos.map((i) => (
          <CryptoItem
            onClick={() => navigate(`/send/${i.network}/${i.name}`)}
            key={i.name + i.network}
            data={i}
            network={wallet.networks.find((n) => n.name === i.network)!}
          />
        ))}
      </div>
    </div>
  );
}
export default SelectSend;
