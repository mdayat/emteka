import type { Metadata } from "next";
import Image from "next/image";

import { Man } from "@components/icons/man";
import { Navbar } from "@components/Navbar";

export const metadata: Metadata = {
  title: "Tentang Emteka",
  description: "",
};

export default function TentangKami() {
  return (
    <div className="w-full h-full">
      <Navbar
        background={"bg-neutral-0"}
        text={"text-neutral-900"}
        fill={"#ooo"}
      />
      <div className="relative w-full pt-20">
        <Image
          src="/Hero_Banner.png"
          alt="Hero Banner Image"
          width={1440}
          height={1440}
          className="w-full h-[220px] desktop:h-[403px] object-cover"
        />
        <h1 className="text-3xl desktop:text-6xl absolute inset-0 flex pt-10 items-center justify-center font-semibold text-neutral-0">
          Tentang Kami
        </h1>
      </div>

      <div className="w-full h-full px-8 desktop:flex desktop:flex-row-reverse desktop:px-14 mediumDesktop:px-24 largeDesktop:px-36">
        <div className="w-fit mx-auto my-14">
          <Man className="w-[240px] h-[366px] desktop:w-[344px] desktop:h-[524px] largeDesktop:w-[395px] largeDesktop:h-[603px]" />
        </div>

        <div className="h-fit items-center align-middle justify-center my-auto">
          <h2 className="font-semibold text-2xl desktop:text-5xl largeDesktop:text-6xl ">
            Siapa Kami
          </h2>
          <p className="my-8 desktop:text-xl largeDesktop:pr-10">
            Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar
            keprihatinan terhadap sistem pengembangan sumber daya manusia
            khususnya di Indonesia dan kepedulian akan percepatan implementasi
            teknologi perangkat lunak secara komprehensif sebagai upaya dalam
            mendukung pertumbuhan ekonomi di Indonesia.
          </p>
        </div>
      </div>

      <div className="bg-secondary-50 w-full h-full py-20">
        <h2 className="text-2xl desktop:text-4xl desktop:px-14 mediumDesktop:px-44 font-semibold text-center px-3 mb-10">
          Penghargaan- Aplikasi Asesmen Inovasi Matematika Inovatif
        </h2>

        <div className="px-10 desktop:flex desktop:justify-center desktop:gap-x-8">
          <Image
            src="/Lomba_XI.png"
            alt="Gambar Lomba"
            width={400}
            height={400}
            className="object-cover w-[245px] h-[82px] desktop:w-[306px] desktop:h-[112px] mx-auto mb-10 desktop:m-0"
          />
          <Image
            src="/Lomba_XVII.png"
            alt="Gambar Lomba"
            width={500}
            height={500}
            className="object-cover w-[300px] h-[82px] desktop:w-[413px] desktop:h-[112px] mx-auto desktop:m-0"
          />
        </div>
      </div>
    </div>
  );
}
