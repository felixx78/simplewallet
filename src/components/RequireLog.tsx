import { Navigate } from "react-router-dom";
import { useWallet } from "../contexts/WalletContext";

function RequireLog({ children }: { children: React.ReactNode }) {
  const wallet = useWallet();

  if (wallet.isLoading) return <p>loading</p>;

  if (!wallet.networks.length) {
    if (localStorage.getItem("seed")) {
      return <Navigate to="/login" />;
    }
    return <Navigate to="/welcome" />;
  }

  return children;
}
export default RequireLog;
