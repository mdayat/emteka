import Image from "next/legacy/image";

import { DoubleArrow } from "@icons/DoubleArrow";

import CardImage01 from "@images/roadmap/pelatih_pembelajaran.png";
import CardImage02 from "@images/roadmap/tantangan_pembelajaran.png";
import CardImage03 from "@images/roadmap/proyek_selaras.png";
import CardImage04 from "@images/roadmap/ruang_pembelajaran.png";
import CardImage05 from "@images/roadmap/akademi_pertumbuhan.png";
import CardImage06 from "@images/roadmap/rencana_pengembangan.png";

const CardDesktop = () => {
  return (
    <>
      <section className="flex flex-col xl:flex-row gap-x-12 xl:flex-wrap justify-center relative mb-2">
        <article className="bg-secondary-500 w-[400px] pt-4 pb-8  rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative w-full h-[190px]">
            <Image src={CardImage01} alt="Pelatih Pembelajaran" layout="fill" />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4 mt-6 px-5">
            Pelatih Pembelajaran yang Didukung AI
          </h5>
          <p className="text-base font-normal text-neutral-0 px-5">
            Integrasikan asisten pembelajaran berbasis kecerdasan buatan (AI)
            yang memberikan panduan pribadi dalam pembelajaran Anda.
          </p>
        </article>

        <div className="flex justify-center items-center bg-no-repeat bg-center w-full h-full absolute -z-10 top-0 rounded-full">
          <div className="w-[200px] h-[200px] absolute opacity-70 bg-[#FFE600] rounded-full blur-[200px]" />
          <DoubleArrow className="w-10 h-10 fill-primary-400" />
        </div>

        <article className="bg-secondary-500 pt-4 pb-8 w-[400px]  rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative w-full h-[190px]">
            <Image src={CardImage02} alt="Ruang Pembelajaran" layout="fill" />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4 mt-6 px-5">
            Tantangan Pembelajaran yang Digamifikasi
          </h5>
          <p className="text-base font-normal text-neutral-0 px-5">
            Menambahkan tantangan pembelajaran berbasis game untuk meningkatkan
            motivasi dan membuat matematika lebih menyenangkan.
          </p>
        </article>

        <div className="absolute ml-[27rem] -z-10 -bottom-2">
          <div className="relative">
            <div className="w-[200px] h-[200px] absolute opacity-70 bg-[#FFE600] -right-[120px] -mt-16 rounded-full blur-[200px]" />
            <DoubleArrow className="w-10 h-10 rotate-90 fill-primary-400 absolute" />
          </div>
        </div>
      </section>

      <section className="flex flex-col xl:flex-row relative mt-[60px] mb-2 gap-x-12 xl:flex-wrap justify-center">
        <article className="bg-secondary-500 w-[400px] pt-4 pb-8  rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative w-full h-[190px]">
            <Image src={CardImage03} alt="Proyek Selaras" layout="fill" />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4 mt-6 px-5">
            Proyek yang Selaras dengan Industri
          </h5>
          <p className="text-base font-normal text-neutral-0 px-5">
            Bangun proyek-proyek matematika yang terkait dengan industri,
            mempersiapkan Anda dengan keterampilan praktis yang sesuai dengan
            kebutuhan pasar kerja.
          </p>
        </article>

        <div className="flex justify-center items-center bg-no-repeat bg-center w-full h-full absolute -z-10 top-0 rounded-full rotate-180">
          <div className="w-[200px] h-[200px] absolute opacity-70 bg-[#FFE600] rounded-full blur-[200px]" />
          <DoubleArrow className="w-10 h-10 fill-primary-400" />
        </div>

        <article className="bg-secondary-500 pt-4 pb-8  w-[400px] rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative w-full h-[190px]">
            <Image
              src={CardImage04}
              alt="Ruang Pembelajaran Kolaboratif"
              layout="fill"
            />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4 mt-6 px-5">
            Ruang Pembelajaran Kolaboratif
          </h5>
          <p className="text-base font-normal text-neutral-0 px-5">
            Membangun ruang belajar kolaboratif, di mana pengguna dan ekspert
            dapat berinteraksi, berdiskusi, dan belajar bersama.
          </p>
        </article>
        <div className="absolute mr-[30rem] -z-10 -bottom-2">
          <div className="relative">
            <div className="w-[200px] h-[200px] absolute opacity-70 bg-[#FFE600] rounded-full blur-[200px] -right-[120px] -mt-16" />
            <DoubleArrow className="w-10 h-10 rotate-90 fill-primary-400 absolute" />
          </div>
        </div>
      </section>

      <section className="flex flex-col xl:flex-row relative mt-[60px] mb-2 gap-x-12 xl:flex-wrap justify-center">
        <article className="bg-secondary-500 pt-4 pb-8  w-[400px] rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative w-full h-[190px]">
            <Image src={CardImage05} alt="Akademi Pertumbuhan" layout="fill" />
          </div>
          <h5 className="font-semibold text-2xl text-neutral-0 mb-4 mt-6 px-5">
            Akademi Pertumbuhan Profesional Berkelanjutan
          </h5>
          <p className="text-base font-normal text-neutral-0 px-5">
            Hadirkan akademi pertumbuhan profesional berkelanjutan yang mencakup
            pembaruan tren industri, pelatihan lanjutan, dan sumber daya karier.
          </p>
        </article>

        <div className="flex justify-center items-center bg-no-repeat bg-center w-full h-full absolute -z-10 top-0 rounded-full">
          <div className="w-[200px] h-[200px] absolute opacity-70 bg-[#FFE600] rounded-full blur-[200px]" />
          <DoubleArrow className="w-10 h-10 fill-primary-400" />
        </div>

        <article className="bg-secondary-500 pt-4 pb-8  w-[400px] rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative w-full h-[190px]">
            <Image src={CardImage06} alt="Rencana Pengembangan" layout="fill" />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4 mt-6 px-5">
            Rencana Pengembangan Karir yang Dipersonalisasi
          </h5>
          <p className="text-base font-normal text-neutral-0 px-5">
            Integrasi rencana pengembangan karier yang disesuaikan dengan
            kemampuan dan aspirasi pengguna, membimbing mereka menuju tujuan
            karier yang diinginkan.
          </p>
        </article>
      </section>
    </>
  );
};

export { CardDesktop };
