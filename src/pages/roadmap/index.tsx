import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@components/roadmap/Card";

import Divider from "@images/about/Divider.png";
import { WhatsappButton } from "@components/whatsappButton";

export default function RoadMapPage() {
  return (
    <>
      <Head>
        <title>Roadmap</title>
        <meta
          name="description"
          content="Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar keprihatinan terhadap sistem pengembangan sumber daya manusia khususnya di Indonesia dan kepedulian akan percepatan implementasi teknologi perangkat lunak secara komprehensif sebagai upaya dalam mendukung pertumbuhan ekonomi di Indonesia."
        />

        <meta property="og:title" content="Roadmap" />
        <meta
          property="og:description"
          content="Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar keprihatinan terhadap sistem pengembangan sumber daya manusia khususnya di Indonesia dan kepedulian akan percepatan implementasi teknologi perangkat lunak secara komprehensif sebagai upaya dalam mendukung pertumbuhan ekonomi di Indonesia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/favicon.svg" />
        <meta property="og:url" content="https://www.emteka.id/roadmap" />

        <meta property="twitter:title" content="Roadmap" />
        <meta
          property="twitter:description"
          content="Furaha Systems adalah sebuah perusahaan yang dibangun atas dasar keprihatinan terhadap sistem pengembangan sumber daya manusia khususnya di Indonesia dan kepedulian akan percepatan implementasi teknologi perangkat lunak secara komprehensif sebagai upaya dalam mendukung pertumbuhan ekonomi di Indonesia."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/public/favicon.svg" />
        <meta property="twitter:url" content="https://www.emteka.id/roadmap" />
        <meta property="twitter:domain" content="emteka.id" />
      </Head>

      <div className="relative overflow-x-clip flex flex-col justify-center items-center">
        <div className="w-[477px] h-[477px] absolute -top-[14rem] opacity-50 bg-[#FFE600] rounded-full blur-[200px] -z-10" />
      </div>
      <main className="y-[75px] mx-auto w-3/4">
        <section className="flex flex-col gap-y-4 text-center mt-[150px] mx-auto w-[738px] mb-8">
          <h1 className="text-5xl font-semibold text-neutral-0">
            Ikuti Jalan Produk Ini
          </h1>
          <p className="text-neutral-0 text-lg">
            Kami akan menciptakan lingkungan pembelajaran matematika yang lebih
            dinamis, responsif, dan menantang, membantu pengguna mencapai
            tingkat penguasaan yang lebih tinggi dan memperoleh keterampilan
            matematika yang lebih mendalam.
          </p>
        </section>

        <Card />

        <Image className="w-1 my-6 mx-auto" src={Divider} alt={""} />

        <section className="flex flex-col justify-center items-center text-center gap-y-4 mb-[120px]">
          <h2 className="text-5xl font-semibold text-neutral-0">
            Kolaborasi Industri
          </h2>
          <p className="w-[738px] text-lg font-normal text-neutral-0">
            Menjalin kemitraan dengan perusahaan terkemuka untuk memastikan
            materi pembelajaran sesuai dengan kebutuhan industri, sehingga
            lulusan memiliki keterampilan yang sesuai dengan tuntutan pasar
            kerja.
          </p>

          <Link
            href="mailto:info@emteka.id"
            className="bg-primary-400 px-8 font-semibold py-[10px] rounded-full text-sm"
          >
            Tertarik untuk bekerja sama?
          </Link>
        </section>

        <WhatsappButton />
      </main>
    </>
  );
}
