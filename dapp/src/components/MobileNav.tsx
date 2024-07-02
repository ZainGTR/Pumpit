"use client";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${
            isOpen ? "-rotate-45" : ""
          }`}
        ></div>
      </div>
      {isOpen && (
        <div className="absolute h-[calc(100vh-96px)] w-full top-24 left-0 flex flex-col justify-center items-center bg-slate-100 z-10 font-medium gap-4">
          <Link href="/">Tokens</Link>
          <Link href="/">Tokens</Link>
          <Link href="/">Tokens</Link>
          <Link href="/">Tokens</Link>
          <Link href="/">Tokens</Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
