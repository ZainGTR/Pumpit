import Image from "next/image";

export type tokendataProps = {
  tokenId: string;
  tokenImg: string;
  tokenDev: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDesc: string;
  tokenMarketCap: number;
  followers: number;
  trades: number;
};

const TokenCard = (props: { tokendata: tokendataProps }) => {
  return (
    <tr>
      <td className="flex gap-2 items-center">
        <div className="">
          <Image
            src={props.tokendata.tokenImg}
            alt={props.tokendata.tokenName}
            height={32}
            width={32}
          />
        </div>
        <div className="text-md font-bold">
          {props.tokendata.tokenName}({props.tokendata.tokenSymbol})
        </div>
      </td>
      <td>MarketCap: {props.tokendata.tokenMarketCap}</td>
      <td>Followers: {props.tokendata.followers}</td>
      <td>Trades: {props.tokendata.trades}</td>
      <td>{props.tokendata.tokenDesc}</td>
    </tr>
  );
};

export default TokenCard;
