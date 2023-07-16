import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { Hero } from "src/features/home/Hero";
import { Emteka } from "@components/icons/Emteka";
import { LatarBelakang } from "src/features/home/LatarBelakang";
import { SolusiKami } from "src/features/home/SolusiKami";
import { MailingList } from "src/features/home/MailingList";
import { FAQ } from "src/features/home/FAQ";
import { WhatsAppColored } from "@components/icons/WhatsAppColored";

import FlowerSmall1 from "@images/home/flower_small_1.png";
import FlowerSmall2 from "@images/home/flower_small_2.png";
import FlowerLarge1 from "@images/home/flower_large_1.png";
import FlowerLarge2 from "@images/home/flower_large_2.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emteka - Asesmen Matematika Terstruktur</title>
        <meta
          name="description"
          content="Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk membantu Anda dalam mengukur dan memetakan kemampuan Matematika secara menyeluruh."
        />

        <meta
          property="og:title"
          content="Emteka - Asesmen Matematika Terstruktur"
        />
        <meta
          property="og:description"
          content="Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk membantu Anda dalam mengukur dan memetakan kemampuan Matematika secara menyeluruh."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/favicon.svg" />
        <meta property="og:url" content="https://www.emteka.id/" />

        <meta
          property="twitter:title"
          content="Emteka - Asesmen Matematika Terstruktur"
        />
        <meta
          property="twitter:description"
          content="Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk membantu Anda dalam mengukur dan memetakan kemampuan Matematika secara menyeluruh."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/public/favicon.svg" />
        <meta property="twitter:url" content="https://www.emteka.id/" />
        <meta property="twitter:domain" content="emteka.id" />

        <link type="preload" href="https://www.youtube.com/embed/_JTp4JzZHbY" />
        <link
          type="preconnect"
          href="https://www.youtube.com/embed/_JTp4JzZHbY"
        />
        <link
          rel="dns-prefetch"
          href="https://www.youtube.com/embed/_JTp4JzZHbY"
        />
      </Head>

      <Link href="https://wa.me/6282211000129" target="_blank">
        <WhatsAppColored className="w-10 h-10 fixed bottom-4 right-4 z-50 old-lg:w-12 old-lg:h-12 old-lg:bottom-6 old-lg:right-6" />
      </Link>

      <Hero />

      <article className="mt-14 mx-8 old-lg:w-[868px] old-lg:mx-auto">
        <h2 className="text-neutral-900 font-semibold flex justify-center items-center gap-x-1 text-2xl mb-6 old-lg:text-[32px] old-lg:gap-x-2">
          <Emteka className="w-8 h-8 old-lg:w-10 old-lg:h-10" /> Emteka
        </h2>

        <p className="text-neutral-800 text-center text-sm old-lg:text-base">
          Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk
          membantu Anda dalam mengukur dan memetakan kemampuan Matematika secara
          menyeluruh. Emteka memberikan pengalaman pembelajaran yang adaptif dan
          dipersonalisasi melalui fitur-fitur canggih.
        </p>
      </article>

      <LatarBelakang />
      <SolusiKami />

      <div className="bg-secondary-500 relative mt-14 p-8 old-lg:px-16 old-lg:py-10 xl:px-20 old-2xl:px-28">
        <Image
          src={FlowerSmall1}
          alt=""
          className="absolute top-0 left-0 old-lg:hidden"
        />
        <Image
          src={FlowerSmall2}
          alt=""
          className="absolute bottom-0 right-0 old-lg:hidden"
        />
        <Image
          src={FlowerLarge1}
          alt=""
          className="hidden old-lg:block old-lg:absolute old-lg:top-0 old-lg:left-0"
        />
        <Image
          src={FlowerLarge2}
          alt=""
          className="hidden old-lg:block old-lg:absolute old-lg:bottom-0 old-lg:right-0"
        />

        <article className="flex flex-col justify-center items-center mb-8 mx-auto old-lg:w-[712px]">
          <h2 className="text-neutral-0 font-semibold uppercase text-[32px] old-lg:text-5xl old-lg:mb-4">
            Coming Soon
          </h2>

          <p className="text-neutral-100 font-medium text-center text-xs mx-8 old-lg:text-base">
            Segera hadir! Tetap terhubung dan jadilah yang pertama merasakan
            kemajuan luar biasa!
          </p>
        </article>

        <div className="relative w-full overflow-hidden pt-[55%] old-lg:w-[868px] old-lg:h-[404px] old-lg:pt-0 old-lg:mx-auto">
          <iframe
            allowFullScreen
            loading="lazy"
            src="https://www.youtube.com/embed/_JTp4JzZHbY"
            title="Cara Kerja Emteka"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="absolute top-0 bottom-0 right-0 left-0 rounded-md w-full h-full border-none old-lg:rounded-lg"
          ></iframe>
        </div>
      </div>

      <div className="old-lg:grid old-lg:grid-cols-2 old-lg:gap-x-6 old-lg:mx-16 old-lg:mb-14 xl:gap-x-8 xl:w-[1200px] xl:mx-auto old-2xl:gap-x-10">
        <FAQ />
        <MailingList />
      </div>
    </>
  );
}
