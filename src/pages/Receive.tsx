import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import AddressItem from "../components/AddressItem";
import { useWallet } from "../contexts/WalletContext";
import { useNavigate } from "react-router-dom";

function Receive() {
  const wallet = useWallet();
  const navigate = useNavigate();

  return (
    <div className="pt-6">
      <div className="mb-6 px-4 flex justify-between">
        <button onClick={() => navigate("/")}>
          <HiOutlineArrowSmallLeft size="25px" />
        </button>

        <p className="font-medium">Select address to receive</p>
      </div>

      <div className="flex flex-col gap-6 p-6 border-border border-t">
        {wallet.networks.map((network) => (
          <AddressItem key={network.name} data={network} />
        ))}
      </div>
    </div>
  );
}
export default Receive;
