import TokenCard, { tokendataProps } from "./TokenCard";

const TokenList = () => {
  const tokeninfo: tokendataProps = {
    tokenId: "0xssdd",
    tokenImg: "/tokens/factory.jpeg",
    tokenDev: "Jhonny",
    tokenName: "factory token",
    tokenSymbol: "FUE",
    tokenDesc: "a token for factory meme community",
    tokenMarketCap: 1000.125,
    followers: 52,
    trades: 215,
  };

  const alldata = [
    {
      tokenId: "0xssdd",
      tokenImg: "/tokens/factory.jpeg",
      tokenDev: "Jhonny",
      tokenName: "factory token",
      tokenSymbol: "FUE",
      tokenDesc: "a token for factory meme community",
      tokenMarketCap: 1000.125,
      followers: 52,
      trades: 215,
    },
    {
      tokenId: "0xggfdd",
      tokenImg: "/tokens/factory2.jpeg",
      tokenDev: "Lamma",
      tokenName: "Smart",
      tokenSymbol: "SMT",
      tokenDesc: "a token for smart community",
      tokenMarketCap: 556.58,
      followers: 1650,
      trades: 66980,
    },
    {
      tokenId: "0xetrfdd",
      tokenImg: "/tokens/factory2.jpeg",
      tokenDev: "Lamma",
      tokenName: "Smart",
      tokenSymbol: "SMT",
      tokenDesc: "a token for smart community",
      tokenMarketCap: 556.58,
      followers: 1650,
      trades: 66980,
    },
  ];

  return (
    <div className="w-full flex-col gap-2 rounded-md shadow-md">
      <div className="bg-white flex p-2">filters</div>
      <div className="flex flex-col justify-start">
        {alldata.map((token) => (
          <div key={token.tokenId}>
            <TokenCard tokendata={token} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenList;
