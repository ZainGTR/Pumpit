import Image from "next/image";
import TokenCard, { tokendataProps } from "./TokenCard";
import { alldata } from "@/utils/Temp";

const TokenList = () => {
  return (
    <table className="table-auto w-full text-sm rounded-md shadow-md text-left">
      <thead className="">
        <tr className="border-b border-slate-500">
          <th className="p-4">Token</th>
          <th>Price</th>
          <th>24H</th>
          <th>Trades</th>
          <th>Liquidity</th>
          <th>Volume</th>
          <th>MarketCap</th>
          <th>Created</th>
          <th>Community</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {alldata.map((token) => (
          <tr key={token.tokenId} className="border-b border-slate-300">
            <td className="flex gap-2 items-center p-2">
              <Image
                src={token.tokenImg}
                alt={token.tokenName}
                height={32}
                width={32}
                className="rounded-full"
              />

              <div>
                <p>
                  {token.tokenName}({token.tokenSymbol})
                </p>
                <p>{token.tokenId}</p>
              </div>
            </td>

            <td>{token.tokenPrice}</td>
            <td>{token.token24h}</td>
            <td>{token.trades}</td>
            <td>{token.liquidity}</td>
            <td>{token.totalvol}</td>
            <td>{token.tokenMarketCap}</td>
            <td>{token.created}</td>
            <td>{token.followers}</td>
            <td>75/100</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TokenList;
