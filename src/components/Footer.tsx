import { ArrowDownIcon } from "src/app/(icons)/arrowDown";
import { EmtekaIcon } from "src/app/(icons)/emteka";
import { InstagramIcon } from "src/app/(icons)/instagram";
import { LinkedInIcon } from "src/app/(icons)/linkedIn";

export function Footer() {
  return (
    <div className="w-full h-full bg-secondary-500 text-neutral-50 py-5 px-8 largeDesktop:py-16 desktop:px-16 mediumDesktop:px-28">
      <div className=" desktop:flex desktop:justify-between">
        <div className="flex flex-col w-fit mediumDesktop:w-[60%] largeDesktop:w-[50%] h-fit mx-auto desktop:flex desktop:mx-0">
          <div className="flex flex-row mx-auto desktop:mx-0">
            <div className="w-fit h-fit py-3.5">
              <EmtekaIcon className="w-[25px] h-[25px] desktop:w-[44px] desktop:h-[55px] largeDesktop:w-[70px] largeDesktop:h-[86px]" />
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
            <LinkedInIcon className="fill-neutral-0 w-[20px] h-[20px] desktop:w-[30px] desktop:h-[30px]" />
            <InstagramIcon className="fill-neutral-0 w-[20px] h-[20px] desktop:w-[30px] desktop:h-[30px]" />
          </div>
        </div>

        <div className="flex flex-col desktop:flex-row largeDesktop:gap-x-14">
          <div className="w-full desktop:w-fit h-fit desktop:mt-10 largeDesktop:mt-[4rem]">
            <p className="font-bold mb-5  largeDesktop:text-xl">Perusahaan</p>
            <p className="mb-3 text-lg">About Us</p>
            <p className="text-lg">Contact Us</p>
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
                <ArrowDownIcon className="fill-neutral-0 w-6 h-6" />
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
