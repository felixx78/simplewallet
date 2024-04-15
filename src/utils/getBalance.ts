import Web3 from "web3";
import { BigNumber } from "bignumber.js";
import { CryptoType } from "./cryptos";
import networks from "./networks";

const ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const getBalance = async (data: CryptoType, address: string) => {
  try {
    const network = networks.find((i) => i.name === data.network)!;

    const web3 = new Web3(network.web3);

    const contract = new web3.eth.Contract(ABI, data.contactAddress);

    const balance: any = await contract.methods.balanceOf(address).call();

    return new BigNumber(balance)
      .dividedBy(new BigNumber(10).pow(18))
      .toFixed(4);
  } catch (e) {
    return "error";
  }
};

export default getBalance;
