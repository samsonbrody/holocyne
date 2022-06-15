import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="w-full font-Smooch bg-gray-200 h-24 sm:h-36 md:h-40 flex sm:flex-col items-center border-b justify-between sm:justify-center">
        <h1
          onClick={() => router.push("/")}
          className="text-3xl sm:text-4xl md:text-5xl sm:ml-0 ml-6 cursor-pointer"
        >
          Holocyne
        </h1>
        <div
          id="browsebar"
          className="hidden sm:flex mt-6 space-x-14 font-Lato"
        >
          <h2 className="cursor-pointer hover:text-slate-700">Home</h2>
          <h2 className="cursor-pointer hover:text-slate-700">Portfolio</h2>
          <h2 className="cursor-pointer hover:text-slate-700">About</h2>
          <h2 className="cursor-pointer hover:text-slate-700">Contact</h2>
        </div>
        <div className="sm:hidden mr-6">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
      </div>
      <div
        className={
          isOpen
            ? `flex flex-col absolute sm:hidden items-center shadow-2xl py-6 gap-y-6 justify-center top-24 w-full bg-slate-900`
            : `hidden`
        }
      >
        <h2 className="text-gray-50 cursor-pointer font-Lato">Home</h2>
        <h2 className="text-gray-50 cursor-pointer font-Lato">Portfolio</h2>
        <h2 className="text-gray-50 cursor-pointer font-Lato">About</h2>
        <h2 className="text-gray-50 cursor-pointer font-Lato">Contact</h2>
      </div>
    </>
  );
}

export default Navbar;
