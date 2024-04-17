import { CryptoType } from "../utils/cryptos";
import { useQuery, useQueryClient } from "react-query";
import { Network } from "../utils/networks";
import { SlRefresh } from "react-icons/sl";

type Props = {
  data: CryptoType;
  network: Network;
  onClick?: () => void;
};

function CryptoItem({ data, network, onClick }: Props) {
  const { data: balance, isFetching } = useQuery({
    queryKey: [data.name, data.network],
    queryFn: () => data.getBalance(network.address),
  });

  const queryClient = useQueryClient();

  const refetchBalance = () => {
    queryClient.invalidateQueries([data.name, data.network]);
  };

  return (
    <div
      onClick={onClick && onClick}
      className={`${onClick ? "cursor-pointer" : ""} max-w-[400px] flex items-center justify-between`}
    >
      <div className="flex items-center">
        <div className="relative">
          <img className="mr-4" width={40} height={40} src={data.icon} alt="" />
          <img
            className="absolute right-3 bottom-[-5px] rounded-full"
            width={20}
            height={20}
            src={network.icon}
            alt=""
          />
        </div>
        <p className="mr-3">{data.name}</p>
        {data.tokenStandart && (
          <p className="bg-foreground px-3 py-1 text-sm rounded-md">
            {data.tokenStandart}
          </p>
        )}
      </div>
      <div className="flex gap-4 items-center">
        <p>{balance || "0.0000"}</p>
        {!onClick && (
          <button disabled={isFetching} onClick={refetchBalance}>
            <SlRefresh className={isFetching ? "spin" : ""} size="20px" />
          </button>
        )}
      </div>
    </div>
  );
}
export default CryptoItem;
