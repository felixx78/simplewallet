import { useState } from "react";
import Logo from "../components/Logo";
import PasswordStep from "../components/PasswordStep";
import SeedStep from "../components/SeedStep";
import { useNavigate } from "react-router-dom";

function CreateAndImport({ create = false }: { create?: boolean }) {
  const [steps, setSteps] = useState(0);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleContinue = () => setSteps(steps + 1);
  const handleBack = () => setSteps(steps - 1);

  return (
    <div
      className={`flex items-center justify-center sm:h-[80vh] flex-col gap-6 ${steps === 1 ? "h-[100vh] min-h-[1000px] sm:min-h-0" : "h-[80vh]"}`}
    >
      <Logo center />
      <div className="border-border border-2 px-8 pt-6 pb-6 rounded-md min-w-[300px] max-w-[450px]">
        {steps === 0 && (
          <PasswordStep
            setPassword={setPassword}
            onBack={() => navigate("/welcome")}
            onContinue={handleContinue}
          />
        )}
        {steps === 1 && (
          <SeedStep
            generate={create}
            onBack={handleBack}
            password={password}
            onContinue={() => navigate("/")}
          />
        )}
      </div>
    </div>
  );
}
export default CreateAndImport;
