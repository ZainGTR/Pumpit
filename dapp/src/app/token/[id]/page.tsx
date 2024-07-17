import AddToken from "@/components/token/AddToken";
import Chart from "@/components/token/Chart";
import Swap from "@/components/token/Swap";
import TokenProfile from "@/components/token/TokenProfile";
import TradeList from "@/components/token/TradeList";

const TokenPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <AddToken />
      <div className="flex gap-4 w-full justify-between">
        <div className=" w-[20%] flex flex-col gap-4">
          <TokenProfile />
        </div>
        <div className=" w-[60%] flex flex-col gap-4 ">
          <Chart />
          <TradeList />
        </div>
        <div className=" w-[20%] flex flex-col gap-4">
          <Swap />
        </div>
      </div>
    </div>
  );
};

export default TokenPage;
