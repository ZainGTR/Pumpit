import Image from "next/image";

const token = [
  {
    image: "/tokens/meme1.png",
    marketcap: 5564,
  },
  {
    image: "/tokens/meme2.png",
    marketcap: 4221,
  },
  {
    image: "/tokens/meme3.png",
    marketcap: 3644,
  },
  {
    image: "/tokens/meme4.png",
    marketcap: 2566,
  },
  {
    image: "/tokens/meme5.png",
    marketcap: 2401,
  },
];

const TopTokens = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-sm">
      <div className="flex gap-8 w-max">
        {token.map((token) => (
          <div
            key={token.marketcap}
            className="flex flex-col gap-2 cursor-pointer items-center font-bold"
          >
            <Image
              src={token.image}
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 rounded-full ring-2"
            />
            <span>{token.marketcap}k USD</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTokens;
