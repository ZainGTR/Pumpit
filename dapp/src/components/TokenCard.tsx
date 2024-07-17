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
    <div className="flex justify-between items-center text-sm p-2 bg-slate-300 rounded-sm">
      <div className="flex gap-2 items-center">
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
      </div>
      <div>MarketCap: {props.tokendata.tokenMarketCap}</div>
      <div>Followers: {props.tokendata.followers}</div>
      <div>Trades: {props.tokendata.trades}</div>
      <div>{props.tokendata.tokenDesc}</div>
    </div>
  );
};

export default TokenCard;
