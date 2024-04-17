import { useState } from "react";
import Logo from "../components/Logo";
import { Navigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { useWallet } from "../contexts/WalletContext";
import SubmitButton from "../components/SubmitButton";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const wallet = useWallet();

  const handleUnlock = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (wallet.auth(password)) {
      return;
    }

    setPassword("");
    setError("Incorrect password");
  };

  if (wallet.isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center h-[70vh] flex-col gap-6">
      <Logo center />
      <div className="border-border border-2 px-8 pt-6 pb-8 rounded-md max-w-[450px]">
        <h1 className="text-2xl mb-6 text-center">Enter password</h1>

        <form onSubmit={handleUnlock}>
          <PasswordInput
            placeholder="Password"
            value={password}
            error={error}
            onChange={(v) => setPassword(v)}
          />

          <div className="mb-6"></div>

          <SubmitButton
            isLoading={wallet.isLoading}
            disabled={!password && wallet.isLoading}
          >
            Unlock
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}
export default Login;
