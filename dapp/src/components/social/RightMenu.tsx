import Ad from "./RightMenuComp/Ad";
import Info from "./RightMenuComp/Info";
import Trending from "./RightMenuComp/Trending";

const RightMenu = ({ userId }: { userId?: "string" }) => {
  return (
    <div className=" flex flex-col sticky gap-8">
      <Info />
      <Ad />
      <Trending />
    </div>
  );
};

export default RightMenu;
