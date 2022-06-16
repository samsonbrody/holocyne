import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="w-full font-Smooch bg-black h-24 sm:h-40 md:h-44 flex sm:flex-col items-center border-b justify-between sm:justify-center">
        <h1
          onClick={() => router.push("/")}
          className="text-3xl sm:text-4xl md:text-5xl sm:ml-0 ml-6 cursor-pointer text-white"
        >
          Holocyne
        </h1>
        <div
          id="browsebar"
          className="hidden sm:flex mt-6 space-x-14 font-Lato"
        >
          <h2 className="cursor-pointer hover:text-slate-200 text-white">
            Home
          </h2>
          <h2 className="cursor-pointer hover:text-slate-200 text-white">
            Portfolio
          </h2>
          <h2 className="cursor-pointer hover:text-slate-200 text-white">
            About
          </h2>
          <h2 className="cursor-pointer hover:text-slate-200 text-white">
            Contact
          </h2>
        </div>
        <div className="sm:hidden mr-6">
          <Hamburger
            color="white"
            toggled={isOpen}
            toggle={setIsOpen}
            size={20}
          />
        </div>
      </div>
      <div
        className={
          isOpen
            ? `flex flex-col absolute sm:hidden items-center shadow-2xl justify-center top-[5.8rem] w-full bg-black`
            : `hidden`
        }
      >
        <h2 className="text-gray-50 cursor-pointer font-Lato hover:bg-slate-600 w-full flex py-3 justify-center">
          Home
        </h2>
        <h2 className="text-gray-50 cursor-pointer font-Lato hover:bg-slate-600 w-full py-3  flex justify-center">
          Portfolio
        </h2>
        <h2 className="text-gray-50 cursor-pointer font-Lato hover:bg-slate-600 w-full py-3  flex justify-center">
          About
        </h2>
        <h2 className="text-gray-50 cursor-pointer font-Lato hover:bg-slate-600 w-full py-3  flex justify-center">
          Contact
        </h2>
      </div>
    </>
  );
}

export default Navbar;
