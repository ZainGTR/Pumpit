import TopTokens from "@/components/Home/TopTokens";
import Post from "@/components/social/Post";
import Postmini from "@/components/social/Postmini";
import TokenList from "@/components/TokenList";
import Image from "next/image";

export default function Home() {
  const winners = [
    {
      image: "/tokens/meme1.png",
      marketcap: 5564,
      price: 0.0015,
      growth: 142,
      pair: "GGT/frxETH",
    },
    {
      image: "/tokens/meme2.png",
      marketcap: 4221,
      price: 0.0267,
      growth: 230,
      pair: "BAC/frxETH",
    },
    {
      image: "/tokens/meme3.png",
      marketcap: 3644,
      price: 0.054,
      growth: 600,
      pair: "SWC/frxETH",
    },
    {
      image: "/tokens/meme4.png",
      marketcap: 2566,
      price: 0.00122,
      growth: 410,
      pair: "WDS/frxETH",
    },
    {
      image: "/tokens/meme5.png",
      marketcap: 2401,
      price: 0.02564,
      growth: 250,
      pair: "RFG/frxETH",
    },
  ];

  const loosers = [
    {
      image: "/tokens/meme1.png",
      marketcap: 5564,
      price: 0.0002,
      growth: -300,
      pair: "GGT/frxETH",
    },
    {
      image: "/tokens/meme2.png",
      marketcap: 4221,
      price: 0.0067,
      growth: -230,
      pair: "BAC/frxETH",
    },
    {
      image: "/tokens/meme3.png",
      marketcap: 3644,
      price: 0.014,
      growth: -600,
      pair: "SWC/frxETH",
    },
    {
      image: "/tokens/meme4.png",
      marketcap: 2566,
      price: 0.00082,
      growth: -410,
      pair: "WDS/frxETH",
    },
    {
      image: "/tokens/meme5.png",
      marketcap: 2401,
      price: 0.00564,
      growth: -250,
      pair: "RFG/frxETH",
    },
  ];

  const recent = [
    {
      image: "/tokens/meme1.png",
      marketcap: 5564,
      price: 0.0015,
      growth: 142,
      pair: "GGT/frxETH",
    },
    {
      image: "/tokens/meme2.png",
      marketcap: 4221,
      price: 0.0267,
      growth: -5,
      pair: "BAC/frxETH",
    },
    {
      image: "/tokens/meme3.png",
      marketcap: 3644,
      price: 0.054,
      growth: 600,
      pair: "SWC/frxETH",
    },
    {
      image: "/tokens/meme4.png",
      marketcap: 2566,
      price: 0.00122,
      growth: -25,
      pair: "WDS/frxETH",
    },
    {
      image: "/tokens/meme5.png",
      marketcap: 2401,
      price: 0.02564,
      growth: 250,
      pair: "RFG/frxETH",
    },
  ];

  return (
    <div className="">
      {/* TOP */}
      <div className="w-full flex flex-col gap-4 p-4">
        {/* stats */}
        <div className="flex self-center gap-4 text-sm ">
          <p>Tokens: 995</p>
          <p>Volume: 6,552,104,201 USD </p>
          <p>24H: 3,365,120 USD</p>
          <p>7 Days: 18,249,962 USD</p>
        </div>
        {/* stats */}
        <div className="flex justify-between">
          <TopTokens title="Winners" tokens={winners} />
          <TopTokens title="Loosers" tokens={loosers} />
          <TopTokens title="Recent" tokens={recent} />
        </div>

        <div>
          <div className="flex p-2 bg-slate-200 items-center rounded-lg lg:hidden">
            <input
              type="text"
              placeholder="search for tokens"
              className="bg-transparent outline-none"
            />
            <Image src="/search.png" alt="search" height={16} width={16} />
          </div>
        </div>
      </div>
      {/* TOP */}
      {/* BOT */}
      <div className="flex gap-8">
        {/* Token list */}
        <div className="w-[80%]">
          <TokenList />
        </div>
        <div className="flex flex-col gap-4 w-[20%]">
          <Postmini />
          <Postmini />
          <Postmini />
          <Postmini />
        </div>
        {/* Token List */}
      </div>
      {/* BOT */}
    </div>
  );
}
