"use client";
import { usePathname } from "next/navigation";
import Ad from "./RightMenuComp/Ad";
import Info from "./RightMenuComp/Info";
import Trending from "./RightMenuComp/Trending";

const RightMenu = () => {
  const userId = usePathname().slice(11);
  console.log(userId);
  return (
    <div className=" flex flex-col sticky gap-8">
      {userId && <Info userId={userId} />}
      <Ad />
      <Trending />
    </div>
  );
};

export default RightMenu;
