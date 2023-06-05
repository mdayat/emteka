"use client";
import { useState, useEffect } from "react";

import { Logo } from "./icons/logo";
import { Linkedin } from "./icons/linkedin";
import { Insta } from "./icons/insta";
import { ArrowDown } from "./icons/arrowDown";

export function Footer() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    logoWidth: 0,
    logoHeight: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1440) {
        setDimensions({ width: 70, height: 86, logoWidth: 30, logoHeight: 30 });
      } else if (windowWidth >= 1280) {
        setDimensions({ width: 44, height: 55, logoWidth: 30, logoHeight: 30 });
      } else if (windowWidth >= 1024) {
        setDimensions({ width: 44, height: 55, logoWidth: 30, logoHeight: 30 });
      } else {
        setDimensions({ width: 25, height: 25, logoWidth: 20, logoHeight: 20 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height, logoWidth, logoHeight } = dimensions;

  return (
    <div className="w-full h-full bg-secondary-500 text-neutral-50 py-5 px-8 largeDesktop:py-16 desktop:px-16 mediumDesktop:px-28">
      <div className=" desktop:flex desktop:justify-between">
        <div className="flex flex-col w-fit mediumDesktop:w-[60%] largeDesktop:w-[50%] h-fit mx-auto desktop:flex desktop:mx-0">
          <div className="flex flex-row mx-auto desktop:mx-0">
            <div className="w-fit h-fit py-3.5">
              <Logo width={width} height={height} />
            </div>
            <h1 className="text-xl desktop:text-4xl font-semibold pt-3 desktop:pt-[1.30rem] largeDesktop:pt-[1.50rem] largeDesktop:text-6xl ml-2">
              Emteka
            </h1>
          </div>

          <div className="w-fit desktop:w-[300px] h-fit mx-auto desktop:mx-0 text-center desktop:text-start largeDesktop:text-lg mt-3">
            <p>Lorem Ipsum nanti ganti sama tagline atau gambaran produk</p>
            <div className="w-full h-[1px] bg-neutral-0 mt-7 desktop:hidden"></div>
          </div>

          <div className="w-fit h-fit mt-7 flex justify-center mx-auto desktop:mx-0 gap-x-5">
            <Linkedin width={logoWidth} height={logoHeight} />
            <Insta width={logoWidth} height={logoHeight} />
          </div>
        </div>

        <div className="flex flex-col desktop:flex-row largeDesktop:gap-x-14">
          <div className="w-full desktop:w-fit h-fit desktop:mt-10 largeDesktop:mt-[4rem]">
            <p className="font-bold mb-5  largeDesktop:text-xl">Perusahaan</p>
            <p className="mb-3 text-lg">About Us</p>
            <p className=" text-lg">Contact Us</p>
            <div className="w-full h-[1px] bg-neutral-100 my-7 desktop:hidden"></div>
          </div>

          <div className="w-full desktop:w-fit h-fit desktop:mx-6 desktop:mt-10 largeDesktop:mt-[4rem]">
            <p className="font-bold mb-5 largeDesktop:text-xl">Kontak</p>
            <p className="mb-3 underline text-lg">info@furahasystems.com</p>
            <p className="underline text-lg">0822-1080-4537</p>
            <div className="w-full h-[1px] bg-neutral-100 my-7 desktop:hidden"></div>
          </div>

          <div className="w-full desktop:w-fit h-fit desktop:mt-10 largeDesktop:mt-[4rem]">
            <div className="flex justify-between">
              <p className="font-bold mb-5 largeDesktop:text-xl">Lokasi</p>
              <div className="desktop: hidden">
                <ArrowDown fill="#FFFFFF" />
              </div>
            </div>
            <p className="mb-3 underline text-lg">
              Blok A30, Jl. Pamulang Permai Bar. 1 No.23, Pamulang Bar., Kec.
              Pamulang, Kota Tangerang Selatan,
            </p>
            <div className="w-full h-[1px] bg-neutral-100 mt-7 desktop:hidden"></div>
          </div>
        </div>
      </div>

      <div className="w-fit desktop:w-fit h-fit mt-5 mx-auto desktop:mt-10 self-start">
        <p>&copy; 2023 Emteka. All Rights Reserved</p>
      </div>
    </div>
  );
}
