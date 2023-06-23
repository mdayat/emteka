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
        <title>Tentang Emteka</title>
        <meta
          name="description"
          content="Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar keprihatinan terhadap sistem pengembangan sumber daya manusia khususnya di Indonesia dan kepedulian akan percepatan implementasi teknologi perangkat lunak secara komprehensif sebagai upaya dalam mendukung pertumbuhan ekonomi di Indonesia."
        />
      </Head>

      <div className="relative grid place-items-center w-full h-[220px] mt-[60px] lg:h-[403px] lg:mt-[76px]">
        <h2 className="text-neutral-0 font-semibold text-[32px] lg:text-4xl xl:text-5xl">
          Tentang Kami
        </h2>

        <Image
          src={HeroImage}
          alt=""
          fill
          className="object-cover object-center -z-10"
        />
      </div>

      <div className="mt-14 mx-8 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:w-[868px] lg:mx-auto">
        <Image
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
              src={InovasiXIImage}
              alt="Inovasi Teknologi Tepat Guna X!"
              className="object-cover object-center mb-4 w-[245px] lg:w-[306px] lg:mb-0 lg:ml-auto"
            />

            <Image
              src={InovasiXVIIImage}
              alt="Inovasi Teknologi Tepat Guna XVIII"
              className="object-cover object-center w-[300px] lg:w-[413px] lg:mr-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
