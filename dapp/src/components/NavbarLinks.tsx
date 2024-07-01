import Link from "next/link";

const NavbarLinks = () => {
  return (
    <div className="flex flex-col text-lg font-medium gap-2 items-center">
      <Link href="/">HOME</Link>
      <Link href="/">TOKENS</Link>
    </div>
  );
};

export default NavbarLinks;
