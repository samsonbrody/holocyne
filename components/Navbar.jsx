import React, { useState } from "react";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full font-Smooch bg-white h-24 sm:h-36 md:h-40 flex sm:flex-col items-center border-b justify-between sm:justify-center">
      <h1
        onClick={() => router.push("/")}
        className="text-3xl sm:text-4xl md:text-5xl sm:ml-0 ml-6 cursor-pointer"
      >
        Holocyne
      </h1>
      <div id="browsebar" className="hidden sm:flex mt-6 space-x-14 font-Lato">
        <h2 className="cursor-pointer hover:text-slate-700">Home</h2>
        <h2 className="cursor-pointer hover:text-slate-700">Portfolio</h2>
        <h2 className="cursor-pointer hover:text-slate-700">About</h2>
        <h2 className="cursor-pointer hover:text-slate-700">Contact</h2>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 sm:hidden mr-6 cursor-pointer hover:opacity-60"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
}

export default Navbar;
