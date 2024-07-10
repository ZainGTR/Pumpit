import Image from "next/image";
import ProfileCard from "../UserComp/ProfileCard";
import Link from "next/link";
import Ad from "./RightMenuComp/Ad";

const LeftMenu = ({ type }: { type: "Home" | "Profile" }) => {
  return (
    <div className="flex flex-col gap-8 sticky">
      {type === "Home" && <ProfileCard />}
      <div className="flex flex-col gap-1 p-2 bg-white rounded-lg shadow-md text-sm text-gray-500">
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 "
        >
          <Image src="/posts.png" alt="" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 "
        >
          <Image src="/lists.png" alt="" width={20} height={20} />
          <span>Achievements</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 "
        >
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 "
        >
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 "
        >
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href=""
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 "
        >
          <Image src="/events.png" alt="" width={20} height={20} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
      </div>
      <Ad />
    </div>
  );
};

export default LeftMenu;
