import TopTokens from "@/components/Home/TopTokens";
import TokenList from "@/components/TokenList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* TOP */}
      <div className="w-full flex flex-col items-center gap-4 p-4">
        <div>
          <TopTokens />
        </div>
        <div>growing fast tokens</div>
        <div>sponsored tokens</div>
        <div>recently created tokens</div>
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
      <div className="flex flex-col items-center gap-8">
        {/* stats */}
        <div className="">stats</div>
        {/* stats */}
        {/* Token list */}
        <div className="">
          <TokenList />
        </div>
        {/* Token List */}
      </div>
      {/* BOT */}
    </div>
  );
}
