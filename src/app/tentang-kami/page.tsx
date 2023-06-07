import type { Metadata } from "next";
import Image from "next/image";

import ManIllustrationImage from "@images/about/man_illustration.png";
import HeroImage from "@images/about/hero.jpg";
import InovasiXIImage from "@images/about/inovasi_XI.png";
import InovasiXVIIImage from "@images/about/inovasi_XVII.png";

export const metadata: Metadata = {
  title: "Tentang Emteka",
  description:
    "Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar keprihatinan terhadap sistem pengembangan sumber daya manusia khususnya di Indonesia dan kepedulian akan percepatan implementasi teknologi perangkat lunak secara komprehensif sebagai upaya dalam mendukung pertumbuhan ekonomi di Indonesia.",
};

export default function TentangKami() {
  return (
    <>
      <div className="relative grid place-items-center w-full h-[220px] mt-[60px] desktop:h-[403px]">
        <h2 className="text-neutral-0 font-semibold text-[32px] desktop:text-5xl mediumDesktop:text-[56px]">
          Tentang Kami
        </h2>

        <Image
          src={HeroImage}
          alt=""
          fill
          className="object-cover object-center -z-10"
        />
      </div>

      <div className="w-full h-full px-8 desktop:flex desktop:flex-row-reverse desktop:px-14 mediumDesktop:px-24 largeDesktop:px-36">
        <Image
          src={ManIllustrationImage}
          alt=""
          className="object-cover object-center w-[240px] h-[366px] my-14 mx-auto desktop:w-[344px] desktop:h-[524px] largeDesktop:w-[395px] largeDesktop:h-[603px]"
        />

        <article className="h-fit items-center align-middle justify-center my-auto">
          <h1 className="font-semibold text-2xl desktop:text-5xl largeDesktop:text-6xl ">
            Siapa Kami
          </h1>

          <p className="my-8 desktop:text-xl largeDesktop:pr-10">
            Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar
            keprihatinan terhadap sistem pengembangan sumber daya manusia
            khususnya di Indonesia dan kepedulian akan percepatan implementasi
            teknologi perangkat lunak secara komprehensif sebagai upaya dalam
            mendukung pertumbuhan ekonomi di Indonesia.
          </p>
        </article>
      </div>

      <div className="bg-secondary-50 w-full h-full py-20">
        <h2 className="text-2xl desktop:text-4xl desktop:px-14 mediumDesktop:px-44 font-semibold text-center px-3 mb-10">
          Penghargaan- Aplikasi Asesmen Inovasi Matematika Inovatif
        </h2>

        <div className="flex flex-col justify-center items-center gap-y-10 desktop:flex-row desktop:gap-y-0 desktop:gap-x-8 px-10">
          <Image
            src={InovasiXIImage}
            alt="Inovasi Teknologi Tepat Guna"
            className="object-cover object-center w-[245px] h-[82px] desktop:w-[306px] desktop:h-[112px]"
          />

          <Image
            src={InovasiXVIIImage}
            alt="Inovasi Teknologi Tepat Guna"
            className="object-cover object-center w-[300px] h-[82px] desktop:w-[413px] desktop:h-[112px]"
          />
        </div>
      </div>
    </>
  );
}
