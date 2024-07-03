import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";
import ConnectComponent from "./ConnectComponent";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="w-[20%]">
        <Link href="/">PumPiT</Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm justify-between items-center">
        <div className=" flex gap-6 text-gray-500">
          <Link href="/" className="flex gap-2 items-center">
            {" "}
            <Image
              src="/home.png"
              width={16}
              height={16}
              alt="HomePage"
              className="w-4 h-4"
            />{" "}
            <span>Home</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            {" "}
            <Image
              src="/home.png"
              width={16}
              height={16}
              alt="HomePage"
              className="w-4 h-4"
            />{" "}
            <span>Home</span>
          </Link>
        </div>
        <div className="hidden lg:flex p-2 bg-slate-200 items-center rounded-lg">
          <input
            type="text"
            placeholder="search for tokens"
            className="bg-transparent outline-none"
          />
          <Image src="/search.png" alt="search" height={16} width={16} />
        </div>
      </div>

      <div className="w-[30%] flex items-center gap-6 xl:gap-8 justify-end">
        <ConnectComponent />
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
