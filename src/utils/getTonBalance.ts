import { TonClient } from "@ton/ton";
import { BigNumber } from "bignumber.js";

const getTonBalance = async (address: string) => {
  try {
    const client = new TonClient({
      endpoint: "https://toncenter.com/api/v2/jsonRPC",
    });

    const balance = (await client.getBalance(address as any)).toString();

    return new BigNumber(balance)
      .dividedBy(new BigNumber(10).pow(9))
      .toFixed(4);
  } catch (e) {
    console.log(e);
    return "error";
  }
};

export default getTonBalance;
