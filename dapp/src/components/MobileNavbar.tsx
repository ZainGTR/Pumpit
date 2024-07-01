"use client";

import Link from "next/link";
import { useState } from "react";
import Connect from "./Connect";
import NavbarLinks from "./NavbarLinks";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div
        className=" flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-slate-700 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-slate-700 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-slate-700 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] flex flex-col items-center justify-center bg-slate-400 gap-16 font-medium z-10">
          <NavbarLinks />
          <Connect />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
