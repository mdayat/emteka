import type { Metadata } from "next";

import { Hero } from "./(Home)/Hero";
import { LatarBelakang } from "./(Home)/LatarBelakang";
import { SolusiKami } from "./(Home)/SolusiKami";

import { EmtekaIcon } from "./(icons)/Emteka";

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

      <section className="bg-secondary-50 mt-9 py-10 px-6 desktop:mt-20 desktop:px-20 desktop:py-20 mediumDesktop:px-32">
        <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-4 desktop:text-4xl desktop:mb-12">
          How It Works
        </h2>

        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/_JTp4JzZHbY"
          title="Cara Kerja Emteka"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-xl w-full h-[200px] desktop:w-[868px] desktop:h-[404px] desktop:mx-auto"
        ></iframe>
      </section>

      <section className="bg-secondary-500 text-center flex flex-col justify-center items-center rounded-xl mt-9 mx-6 h-[200px] desktop:mt-20 desktop:w-[868px] desktop:h-[448px] desktop:mx-auto">
        <h4 className="text-neutral-0 font-semibold text-[32px] leading-[38px] w-10/12 mx-auto mb-2 desktop:font-extrabold desktop:text-[88px] desktop:leading-normal desktop:mb-2">
          Coming Soon
        </h4>

        <p className="text-neutral-0 font-medium text-xs w-10/12 mx-auto desktop:text-xl">
          Segera hadir! Tetap terhubung dan jadilah yang pertama merasakan
          kemajuan luar biasa!
        </p>
      </section>
    </>
  );
}
