import { Navigate } from "react-router-dom";
import { useWallet } from "../contexts/WalletContext";
import Spinner from "./Spinner";
import Logo from "./Logo";

function RequireLog({ children }: { children: React.ReactNode }) {
  const wallet = useWallet();

  if (wallet.isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );

  if (!wallet.networks.length) {
    if (localStorage.getItem("seed")) {
      return <Navigate to="/login" />;
    }
    return <Navigate to="/welcome" />;
  }

  return children;
}
export default RequireLog;
