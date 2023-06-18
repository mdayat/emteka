import Image from "next/image";
import type { Metadata } from "next";

import { Hero } from "./(Home)/Hero";
import { LatarBelakang } from "./(Home)/LatarBelakang";
import { SolusiKami } from "./(Home)/SolusiKami";
import { FAQ } from "./(Home)/FAQ";
import { EmtekaIcon } from "./(icons)/Emteka";

import FlowerSmall1 from "@images/home/flower_small_1.png";
import FlowerSmall2 from "@images/home/flower_small_2.png";
import FlowerLarge1 from "@images/home/flower_large_1.png";
import FlowerLarge2 from "@images/home/flower_large_2.png";

export const metadata: Metadata = {
  title: "Emteka",
  description:
    "Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk membantu Anda dalam mengukur dan memetakan kemampuan Matematika secara menyeluruh.",
};

export default function Home() {
  return (
    <>
      <Hero />

      <article className="mt-14 mx-8 lg:w-[868px] lg:mx-auto">
        <h2 className="text-neutral-900 font-semibold flex justify-center items-center gap-x-1 text-2xl mb-6 lg:text-[32px] lg:gap-x-2">
          <EmtekaIcon className="w-8 h-8 lg:w-10 lg:h-10" /> Emteka
        </h2>

        <p className="text-neutral-800 text-center text-sm lg:text-base">
          Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk
          membantu Anda dalam mengukur dan memetakan kemampuan Matematika secara
          menyeluruh. Emteka memberikan pengalaman pembelajaran yang adaptif dan
          dipersonalisasi melalui fitur-fitur canggih.
        </p>
      </article>

      <LatarBelakang />
      <SolusiKami />

      <div className="bg-secondary-50 mt-14 py-6 px-8 lg:py-8 xl:py-10">
        <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-6 lg:text-[32px] lg:mb-8">
          How It Works
        </h2>

        <div className="relative w-full overflow-hidden pt-[50%] lg:w-[868px] lg:h-[404px] lg:pt-0 lg:mx-auto">
          <iframe
            allowFullScreen
            src="https://www.youtube.com/embed/_JTp4JzZHbY"
            title="Cara Kerja Emteka"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-0 bottom-0 right-0 left-0 rounded-lg w-full h-full border-none"
          ></iframe>
        </div>
      </div>

      <div className="mt-14 mx-8">
        <div className="relative w-full overflow-hidden pt-[50%] lg:w-[868px] lg:h-[404px] lg:pt-0 lg:mx-auto">
          <div className="bg-secondary-500 absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center rounded-lg w-full h-full">
            <Image
              src={FlowerSmall1}
              alt=""
              className="absolute top-0 left-0 lg:hidden"
            />
            <Image
              src={FlowerSmall2}
              alt=""
              className="absolute bottom-0 right-0 lg:hidden"
            />
            <Image
              src={FlowerLarge1}
              alt=""
              className="hidden lg:block lg:absolute lg:top-0 lg:left-0"
            />
            <Image
              src={FlowerLarge2}
              alt=""
              className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0"
            />

            <h3 className="text-neutral-0 font-extrabold uppercase text-[32px] leading-9 mb-2 lg:text-5xl lg:mb-4">
              Coming Soon
            </h3>

            <p className="text-neutral-100 text-center text-xs mx-8 lg:text-base lg:w-6/12 lg:mx-auto">
              Segera hadir! Tetap terhubung dan jadilah yang pertama merasakan
              kemajuan luar biasa!
            </p>
          </div>
        </div>
      </div>

      <FAQ />
    </>
  );
}
