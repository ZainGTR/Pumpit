import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:block lg:w-[10%]">
        <Link href="/" className="font-bold text-slate-800 text-xl">
          PUMPiT
        </Link>
      </div>
      <div className="hidden md:flex w-[60%]">
        <div className=" font-medium text-sm flex gap-3">
          <Link href="/">HOME</Link>
          <Link href="/">TOKENS</Link>
        </div>
      </div>
      <div className="">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
