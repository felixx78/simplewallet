import { useState } from "react";
import { useSeed } from "../contexts/SeedContext";
import * as bip39 from "bip39";
import { encryptSeedPhrase } from "../utils/seed";

type Props = {
  onBack: () => void;
  onContinue: () => void;
  password: string;
  generate?: boolean;
};

function SeedStep({ onBack, onContinue, password, generate = false }: Props) {
  const seed = useSeed();

  const [inputData, setInputData] = useState(
    generate
      ? bip39.generateMnemonic().split(" ")
      : Array.from({ length: 12 }, () => "")
  );

  const handleOnChange = (v: string, index: number) => {
    const newInputData = [...inputData];
    newInputData[index] = v;

    setInputData(newInputData);
  };

  const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text");
    const pastedSplit = pasted.trim().split(" ");

    if (pastedSplit.length === 12) {
      e.preventDefault();
      setInputData(pastedSplit);
    }
  };

  const handleOnContinue = () => {
    const seedString = inputData.map((i) => i.trim()).join(" ");
    localStorage.setItem("seed", encryptSeedPhrase(seedString, password));
    seed.setSeed(seedString);
    onContinue();
  };

  return (
    <div>
      <h1 className="text-2xl mb-6 text-center">Enter your 12 words</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {inputData.map((value, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              onPaste={handleOnPaste}
              className="text-copy bg-foreground px-4 py-2 w-[150px] outline-none"
              onChange={(e) => handleOnChange(e.target.value, index)}
              placeholder={`word #${index + 1}`}
              value={value}
            />
          </div>
        ))}
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
          disabled={inputData.findIndex((i) => i === "") !== -1}
          className="block w-1/2 bg-border rounded-md py-2 disabled:bg-foreground"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default SeedStep;
