import { useState } from "react";
import { Network } from "../utils/networks";
import { MdOutlineContentCopy } from "react-icons/md";

function AddressItem({ data }: { data: Network }) {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(data.address);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1000);
  };

  return (
    <div className="max-w-[400px] flex items-center justify-between">
      <div className="flex items-center">
        <div className="relative">
          <img
            className="mr-4 rounded-full"
            width={40}
            height={40}
            src={data.icon}
            alt=""
          />
        </div>
        <p className="mr-3 w-[170px]">{data.name}</p>
        <p className="max-w-[100px] truncate mr-4">{data.address}</p>
        <div className="relative">
          <button onClick={handleCopy}>
            <MdOutlineContentCopy size="20px" />
          </button>
          {showCopied && (
            <div className="absolute left-1/2  -translate-x-1/2 bg-foreground px-3 py-1 rounded-md select-none">
              copied
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddressItem;
