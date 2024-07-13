import Image from "next/image";
import Link from "next/link";

type info = {
  image: string;
  marketcap: number;
  price: number;
  growth: number;
  pair: string;
};

const TopTokens = (props: { title: string; tokens: info[] }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-sm">
      <div className="flex flex-col gap-4 w-max">
        <div className="flex justify-between items-center">
          <p>{props.title}</p>
          <Link href="">More..</Link>
        </div>
        {props.tokens.map((token) => (
          <div
            key={token.marketcap}
            className="flex gap-2 cursor-pointer items-center font-bold justify-between"
          >
            <Image
              src={token.image}
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 rounded-full ring-2"
            />
            <span className="text-gray-600">{token.pair}</span>
            <span
              className={`${
                token.growth > 1
                  ? "text-green-500 font-normal"
                  : "text-red-500 font-normal"
              }`}
            >
              {token.price} USD
            </span>
            <span
              className={`${
                token.growth > 1
                  ? "text-green-500 font-normal"
                  : "text-red-500 font-normal"
              }`}
            >
              {token.growth}%
            </span>
            <span
              className={`${
                token.growth > 1
                  ? "text-green-500 font-normal"
                  : "text-red-500 font-normal"
              }`}
            >
              {token.marketcap}k USD
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTokens;
