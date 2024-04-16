import { useState } from "react";
import PasswordInput from "./PasswordInput";
import { hashPassword } from "../utils/password";

type Props = {
  onBack: () => void;
  onContinue: () => void;
  setPassword: (password: string) => void;
};

function PasswordStep({ onBack, onContinue, setPassword }: Props) {
  const [data, setData] = useState({
    password: "",
    confirm: "",
  });

  const handleOnContinue = () => {
    localStorage.setItem("password", hashPassword(data.password));
    setPassword(data.password);
    onContinue();
  };

  return (
    <div>
      <h1 className="text-2xl mb-2 text-center">Create password</h1>
      <p className="mb-6 text-[14px] text-copy-lighter">
        this password will store only in localstorage.
      </p>
      <div className="space-y-4 mb-6">
        <PasswordInput
          value={data.password}
          placeholder="Password"
          onChange={(v) => setData((prev) => ({ ...prev, password: v }))}
        />
        <PasswordInput
          value={data.confirm}
          placeholder="Confirm password"
          onChange={(v) => setData((prev) => ({ ...prev, confirm: v }))}
        />
      </div>

      <div className="flex gap-4 justify-between">
        <button
          onClick={onBack}
          className="block w-1/2 border-border border-2 py-2 rounded-md"
        >
          Back
        </button>
        <button
          onClick={handleOnContinue}
          disabled={
            !data.password || !data.confirm || data.password !== data.confirm
          }
          className="block w-1/2 bg-border rounded-md py-2 disabled:bg-foreground"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default PasswordStep;
