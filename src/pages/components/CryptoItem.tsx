import { CryptoType } from "../../utils/cryptos";
import { useQuery } from "react-query";
import { Network } from "../../utils/networks";

function CryptoItem({ data, network }: { data: CryptoType; network: Network }) {
  const { data: balance, isLoading } = useQuery({
    queryKey: [data.name, data.network],
    queryFn: () => data.getBalance(network.address),
  });

  if (isLoading) return <div className="">loading</div>;

  return (
    <div className="w-[400px] flex items-center justify-between">
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
      <p>{balance}</p>
    </div>
  );
}
export default CryptoItem;
