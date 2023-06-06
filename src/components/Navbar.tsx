"use client";

import Link from "next/link";
import { useState } from "react";

import { EmtekaIcon } from "src/app/(icons)/emteka";
import { MenuIcon } from "src/app/(icons)/menu";

export function Navbar({ background, text, fill }: any) {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className={`w-full h-fit fixed z-10 ${background}`}>
      <div className="flex px-5 desktop:px-20 mediumDesktop:px-32 justify-between mt-2">
        <div className="flex">
          <div className="w-fit h-fit py-3.5">
            <EmtekaIcon className="w-6 h-6" />
          </div>
          <h1 className={`text-xl font-bold pt-5 ml-2 ${text}`}>Emteka</h1>
        </div>

        <div className="w-fit h-fit pt-5 desktop:flex gap-x-7 hidden">
          <Link className={`text-xl ${text}`} href="/">
            Home
          </Link>
          <Link className={`text-xl ${text}`} href="/tentang-kami">
            About Us
          </Link>
          <Link className={`text-xl ${text}`} href="/">
            Contact Us
          </Link>
        </div>

        <div className="pt-5 desktop:block hidden">
          <Link className="bg-primary-300 rounded-full px-20 py-2" href="/">
            Join Us
          </Link>
        </div>

        <div
          onClick={() => setNavbar(!navbar)}
          className="w-fit h-fit py-3.5 desktop:hidden"
        >
          <MenuIcon className={`${fill} w-6 h-6`} />
        </div>
      </div>

      {navbar ? (
        <div className="w-full h-fit bg-neutral-0 flex flex-col px-6 py-3 transition-all duration-300 ease-in-out animate-fadeIn absolute z-10">
          <Link className="" href="/">
            Home
          </Link>
          <Link className=" my-3" href="/tentang-kami">
            About Us
          </Link>
          <Link className="" href="/#waiting-list" passHref>
            Waiting List
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
