import Image from "next/image";
import type { Metadata } from "next";

import { Hero } from "./(Home)/Hero";
import { LatarBelakang } from "./(Home)/LatarBelakang";

import { EmtekaIcon } from "./(icons)/Emteka";
import BranchingImage from "@images/home/branching.png";
import FeedbackImage from "@images/home/feedback.png";
import TrackingImage from "@images/home/tracking.png";

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

      <section className="text-center mt-9 mx-6 desktop:mt-20 desktop:mx-20 mediumDesktop:mx-32">
        <article>
          <h2 className="text-neutral-900 font-semibold text-2xl mb-4 desktop:text-4xl desktop:mb-6">
            Solusi Kami
          </h2>

          <p className="text-neutral-900 desktop:text-lg">
            Dalam menghadapi tantangan tersebut, Emteka hadir sebagai solusi
            yang inovatif untuk membantu memetakan kemampuan serta strategi
            pembelajaran yang tepat dalam meningkatkan kemampuan Matematika Anda
          </p>
        </article>
      </section>

      <section className="grid gap-y-8 mt-10 mx-6 desktop:grid-cols-3 desktop:gap-y-0 desktop:gap-x-6 desktop:mt-12 desktop:mx-20 mediumDesktop:mx-32">
        <article className="shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg py-4 px-3">
          <Image
            src={BranchingImage}
            alt="Fitur Branching"
            className="object-cover object-center w-[140px] h-[140px] mb-4"
          />

          <h3 className="text-neutral-900 font-bold text-lg mb-4 desktop:text-xl">
            Fitur Branching
          </h3>

          <p className="text-neutral-900 desktop:text-lg">
            Mengarahkan Anda melalui penyesuaian konten dan tantangan dari
            asesmen berdasarkan tingkat kemampuan Anda
          </p>
        </article>

        <article className="shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg py-4 px-3">
          <Image
            src={TrackingImage}
            alt="Fitur Tracking"
            className="object-cover object-center w-[140px] h-[140px] mb-4"
          />

          <h3 className="text-neutral-900 font-bold text-lg mb-4 desktop:text-xl">
            Fitur Tracking
          </h3>

          <p className="text-neutral-900 desktop:text-lg">
            Melacak dan memantau kemajuan Anda dalam mempelajari Matematika
            selama mengerjakan asesmen
          </p>
        </article>

        <article className="shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg py-4 px-3">
          <Image
            src={FeedbackImage}
            alt="Fitur Feedback"
            className="object-cover object-center w-[140px] h-[140px] mb-4"
          />

          <h3 className="text-neutral-900 font-bold text-lg mb-4 desktop:text-xl">
            Fitur Feedback
          </h3>

          <p className="text-neutral-900 desktop:text-lg">
            Memberikan pemetaan menyeluruh tentang kemampuan Anda yang mencakup
            pendangan secara terperinci
          </p>
        </article>
      </section>

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
