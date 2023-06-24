import Image from "next/image";
import Head from "next/head";

import ManIllustrationImage from "@images/about/man_illustration.png";
import HeroImage from "@images/about/hero.jpg";
import InovasiXIImage from "@images/about/inovasi_XI.png";
import InovasiXVIIImage from "@images/about/inovasi_XVII.png";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Tentang Kami</title>
        <meta
          name="description"
          content="Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar keprihatinan terhadap sistem pengembangan sumber daya manusia khususnya di Indonesia dan kepedulian akan percepatan implementasi teknologi perangkat lunak secara komprehensif sebagai upaya dalam mendukung pertumbuhan ekonomi di Indonesia."
        />

        <meta property="og:title" content="Tentang Kami" />
        <meta
          property="og:description"
          content="Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar keprihatinan terhadap sistem pengembangan sumber daya manusia khususnya di Indonesia dan kepedulian akan percepatan implementasi teknologi perangkat lunak secara komprehensif sebagai upaya dalam mendukung pertumbuhan ekonomi di Indonesia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/favicon.svg" />
        <meta property="og:url" content="https://www.emteka.id/about-us" />

        <meta property="twitter:title" content="Tentang Kami" />
        <meta
          property="twitter:description"
          content="Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar keprihatinan terhadap sistem pengembangan sumber daya manusia khususnya di Indonesia dan kepedulian akan percepatan implementasi teknologi perangkat lunak secara komprehensif sebagai upaya dalam mendukung pertumbuhan ekonomi di Indonesia."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/public/favicon.svg" />
        <meta property="twitter:url" content="https://www.emteka.id/about-us" />
        <meta property="twitter:domain" content="emteka.id" />
      </Head>

      <div className="relative grid place-items-center w-full h-[220px] mt-[60px] lg:h-[403px] lg:mt-[76px]">
        <h2 className="text-neutral-0 font-semibold text-[32px] lg:text-4xl xl:text-5xl">
          Tentang Kami
        </h2>

        <Image
          priority
          fill
          alt=""
          className="object-cover object-center -z-10"
          src={HeroImage}
        />
      </div>

      <div className="mt-14 mx-8 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:w-[868px] lg:mx-auto">
        <Image
          priority
          src={ManIllustrationImage}
          alt=""
          className="object-cover object-center mb-8 mx-auto w-56 lg:shrink-0 lg:w-64 lg:mb-0 lg:mx-0"
        />

        <article className="lg:w-[500px]">
          <h1 className="text-neutral-900 font-semibold text-2xl mb-4 lg:text-[32px]">
            Siapa Kami
          </h1>

          <p className="text-neutral-800 text-sm lg:text-base">
            Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar
            keprihatinan terhadap sistem pengembangan sumber daya manusia
            khususnya di Indonesia dan kepedulian akan percepatan implementasi
            teknologi perangkat lunak secara komprehensif sebagai upaya dalam
            mendukung pertumbuhan ekonomi di Indonesia.
          </p>
        </article>
      </div>

      <div className="bg-secondary-50 mt-14 py-6 lg:py-14">
        <div className="mx-8 lg:w-[868px] lg:mx-auto">
          <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-6 lg:text-[32px] lg:mb-8">
            Penghargaan - Aplikasi Asesmen Inovasi Matematika Inovatif
          </h2>

          <div className="grid place-items-center lg:flex lg:justify-center lg:items-center">
            <Image
              alt="Inovasi Teknologi Tepat Guna X!"
              className="object-cover object-center mb-4 w-[245px] lg:w-[306px] lg:mb-0 lg:ml-auto"
              src={InovasiXIImage}
            />

            <Image
              alt="Inovasi Teknologi Tepat Guna XVIII"
              className="object-cover object-center w-[300px] lg:w-[413px] lg:mr-auto"
              src={InovasiXVIIImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
