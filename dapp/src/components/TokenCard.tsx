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
    <div className="flex justify-start text-sm p-2 gap-4 min-w-[450px] bg-slate-300 rounded-lg">
      <div className="">
        <Image
          src={props.tokendata.tokenImg}
          alt={props.tokendata.tokenName}
          height={128}
          width={128}
        />
      </div>
      <div className="min-w-72">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            {props.tokendata.tokenName}({props.tokendata.tokenSymbol})
          </div>
          <div className="">by {props.tokendata.tokenDev}</div>
        </div>
        <div>badges</div>
        <div>MarketCap: {props.tokendata.tokenMarketCap}</div>
        <div>Followers: {props.tokendata.followers}</div>
        <div>Trades: {props.tokendata.trades}</div>
        <div>{props.tokendata.tokenDesc}</div>
      </div>
    </div>
  );
};

export default TokenCard;
