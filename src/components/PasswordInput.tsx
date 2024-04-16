import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
};

function PasswordInput({ value, onChange, placeholder, error }: Props) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <div className="relative">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="text-copy bg-foreground pl-4 pr-14 py-2 w-full outline-none"
          type={isHidden ? "password" : "text"}
        />
        <button
          type="button"
          onClick={() => setIsHidden(!isHidden)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          {isHidden ? <LuEye size="20px" /> : <LuEyeOff size="20px" />}
        </button>
      </div>
      {error && <p className="pt-2">{error}</p>}
    </div>
  );
}
export default PasswordInput;
