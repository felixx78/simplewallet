import Logo from "../components/Logo";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { LuUpload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[70vh] flex-col gap-6">
      <Logo center />
      <div className="border-border border-2 px-8 pt-6 pb-10 rounded-md max-w-[450px]">
        <h1 className="text-2xl mb-2 text-center">welcome to simplewallet</h1>
        <p className="mb-6 text-[14px] text-copy-lighter">
          simplewallet is open source wallet, stores data encrypted in{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
            target="_blank"
            className="underline"
          >
            localstorage
          </a>
          . see full code in {/* TODO add github page */}
          <a href="" target="_blank" className="underline">
            github
          </a>
        </p>

        <button
          onClick={() => navigate("/wallet/import")}
          className="flex items-center gap-3 border-2 mb-4 w-full px-3 py-2 border-border rounded-md"
        >
          <LuUpload className="text-copy-lighter mr-2 ml-1" size="25px" />
          <p className="text-md font-medium">import wallet</p>
        </button>

        <button
          onClick={() => navigate("/wallet/create")}
          className="flex items-center gap-3 border-2 w-full px-3 py-2 border-border rounded-md"
        >
          <HiOutlinePlusCircle className="text-copy-lighter" size="30px" />
          <p className="text-md font-medium">create a new wallet</p>
        </button>
      </div>
    </div>
  );
}
export default Welcome;
