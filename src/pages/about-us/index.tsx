import Image from "next/image";
import Head from "next/head";

import HeroImage from "@images/about/Furaha Image 01.png";
import HeroImage2 from "@images/about/Furaha Image 02.png";
import LogoFuraha from "@images/about/Logo_Furaha.png";
import Title from "@images/about/Title.png";
import Divider from "@images/about/Divider.png";
import Penghargaan1 from "@images/about/Penghargaan 01.png";
import Penghargaan2 from "@images/about/Penghargaan 02.png";
import { WhatsappButton } from "@components/whatsappButton";

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

      <div className="relative overflow-x-clip">
        <div className="w-[477px] h-[477px] absolute -top-60 -right-60 opacity-50 bg-[#FFE600] rounded-full blur-[200px]" />
      </div>

      <WhatsappButton />

      <div className="flex flex-col items-center justify-center max-h-fit mt-16 pt-[77px] font-karla">
        <Image priority src={HeroImage} alt="" className="w-[790px]" />
        <Image
          priority
          src={LogoFuraha}
          alt=""
          className="w-28 relative -top-72"
        />
        <Image
          priority
          src={Title}
          alt=""
          className="w-[503px] relative bottom-20 drop-shadow-md"
        />
        <p className="text-center max-w-xl -mt-16 text-neutral-0">
          Ini dimulai dari semangat tim Furaha Systems untuk mendukung kemajuan
          dan pengembangan SDM Indonesia melalui Inovasi.
        </p>
      </div>

      <Image className="w-1 my-6 mx-auto" src={Divider} alt={""} />

      <div className="flex flex-col mx-auto gap-4 max-w-3xl text-neutral-0 font-karla">
        <h4 className="text-2xl font-bold text-center">
          Didirikannya Emteka juga didasari oleh adanya{" "}
          <span className="text-primary-400">
            kesenjangan signifikan dalam pengetahuan dan keterampilan Matematika
            siswa/i Indonesia.
          </span>
        </h4>
        <p className="text-xl font-normal text-center">
          Oleh karena itu, Furaha Systems menghadirkan Emteka untuk membantu
          mereka mencapai potensi terbaik dalam belajar Matematika!
        </p>
      </div>

      <Image className="w-1 my-6 mx-auto" src={Divider} alt={""} />

      <div className="flex flex-row gap-16 justify-center text-neutral-0 font-karla">
        <Image priority src={HeroImage2} alt="" className="w-[400px]" />
        <div className="flex flex-col">
          <Image priority src={LogoFuraha} alt="" className="w-28" />
          <p className="mt-4 font-normal text-xl max-w-lg">
            <span className="text-primary-400 font-bold">Furaha Systems</span>{" "}
            adalah sebuah organisasi tim pengembangan startup yang dibangun atas
            dasar keprihatinan terhadap sistem pengembangan SDM khususnya di
            Indonesia dan kepedulian akan percepatan implementasi teknologi
            perangkat lunak secara komprehensif sebagai upaya dalam mendukung
            pertumbuhan ekonomi di Indonesia.
          </p>
          <a
            href="https://www.furahasystems.com/"
            target="_blank"
            className="bg-primary-400 rounded-full w-max py-3 px-8 mt-6 text-sm font-bold text-neutral-900 "
          >
            Cari tahu lebih lanjut
          </a>
        </div>
      </div>

      <Image className="w-1 my-6 mx-auto" src={Divider} alt={""} />

      <div className="flex flex-col gap-8 items-center font-karla mb-[104px]">
        <h1 className="text-5xl font-bold text-neutral-0">Penghargaan</h1>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col items-center justify-center py-8 px-4 gap-6 h-[199px] w-[357px] rounded-2xl bg-secondary-500 border-2 border-[#F2F6FF40]">
            <Image
              src={Penghargaan1}
              alt={""}
              className="w-[203px] mix-blend-plus-lighter	"
            />
            <p className="text-base font-bold text-center text-primary-300 w-full">
              Kota Tangerang Selatan. Tahun 2023
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-8 px-4 gap-6 h-[199px] w-[357px] rounded-2xl bg-secondary-500 border-2 border-[#F2F6FF40]">
            <Image
              src={Penghargaan2}
              alt={""}
              className="w-[273px] mix-blend-plus-lighter	"
            />
            <p className="text-base font-bold text-center text-primary-300 w-full">
              Kota Tangerang Selatan. Tahun 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
