import { useState } from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { useSeed } from "../contexts/SeedContext";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const seed = useSeed();

  const handleUnlock = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (seed.auth(password)) {
      navigate("/");
      return;
    }

    setPassword("");
    setError("Incorrect password");
  };

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

          <button
            type="submit"
            disabled={!password}
            className="block w-full bg-border rounded-md py-2 disabled:bg-foreground"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
