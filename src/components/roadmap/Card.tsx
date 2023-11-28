import Image from "next/legacy/image";

import { DoubleArrow } from "@icons/DoubleArrow";
import { EffectCard } from "./Effect_Card";

const Card = () => {
  return (
    <>
      <section className="flex gap-x-12 flex-wrap justify-center relative mb-2">
        <article className="bg-secondary-500 w-[400px] pt-4 pb-8 px-8 rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative -ml-8 w-[400px] h-[190px] mb-8">
            <Image
              src="/images/roadmap/pelatih_pembelajaran.png"
              alt="Pelatih Pembelajaran"
              layout="fill"
            />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4">
            Pelatih Pembelajaran yang Didukung AI
          </h5>
          <p className="text-base font-normal text-neutral-0">
            Integrasikan asisten pembelajaran berbasis kecerdasan buatan (AI)
            yang memberikan panduan pribadi dalam pembelajaran Anda.
          </p>
        </article>

        <div
          className="flex justify-center items-center bg-no-repeat bg-center w-full h-full absolute -z-10 top-0 rounded-full"
          style={{ backgroundImage: "url(/images/roadmap/effect_card.png)" }}
        >
          <DoubleArrow className="w-10 h-10 fill-primary-400" />
        </div>

        <article className="bg-secondary-500 pt-4 pb-8 w-[400px] px-8 rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative -ml-8 w-[400px] h-[190px] mb-8">
            <Image
              src="/images/roadmap/tantangan_pembelajaran.png"
              alt="Tantangan Pembelajaran"
              layout="fill"
            />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4">
            Tantangan Pembelajaran yang Digamifikasi
          </h5>
          <p className="text-base font-normal text-neutral-0">
            Integrasikan asisten pembelajaran berbasis kecerdasan buatan (AI)
            yang memberikan panduan pribadi dalam pembelajaran Anda.
          </p>
        </article>

        <div className="absolute ml-[27rem] -z-10 -bottom-2">
          <div className="relative">
            <EffectCard className="w-[400px] h-[400px] absolute -right-[215px] -mt-40" />
            <DoubleArrow className="w-10 h-10 rotate-90 fill-primary-400 absolute" />
          </div>
        </div>
      </section>

      <section className="relative mt-[60px] mb-2 flex gap-x-12 flex-wrap justify-center">
        <article className="bg-secondary-500 w-[400px] pt-4 pb-8 px-8 rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative -ml-8 w-[400px] h-[190px] mb-8">
            <Image
              src="/images/roadmap/proyek_selaras.png"
              alt="Proyek Selaras"
              layout="fill"
            />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4">
            Proyek yang Selaras dengan Industri
          </h5>
          <p className="text-base font-normal text-neutral-0">
            Bangun proyek-proyek matematika yang terkait dengan industri,
            mempersiapkan Anda dengan keterampilan praktis yang sesuai dengan
            kebutuhan pasar kerja.
          </p>
        </article>

        <div
          className="flex justify-center items-center bg-no-repeat bg-center w-full h-full absolute -z-10 top-0 rounded-full rotate-180"
          style={{ backgroundImage: "url(/images/roadmap/effect_card.png)" }}
        >
          <DoubleArrow className="w-10 h-10 fill-primary-400" />
        </div>

        <article className="bg-secondary-500 pt-4 pb-8 px-8 w-[400px] rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative -ml-8 w-[400px] h-[190px] mb-8">
            <Image
              src="/images/roadmap/ruang_pembelajaran.png"
              alt="Ruang Pembelajaran Kolaboratif"
              layout="fill"
            />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4">
            Ruang Pembelajaran Kolaboratif
          </h5>
          <p className="text-base font-normal text-neutral-0">
            Membangun ruang belajar kolaboratif, di mana pengguna dan ekspert
            dapat berinteraksi, berdiskusi, dan belajar bersama.
          </p>
        </article>
        <div className="absolute mr-[30rem] -z-10 -bottom-2">
          <div className="relative">
            <EffectCard className="w-[400px] h-[400px] absolute -right-[215px] -mt-40" />
            <DoubleArrow className="w-10 h-10 rotate-90 fill-primary-400 absolute" />
          </div>
        </div>
      </section>

      <section className="relative mt-[60px] flex gap-x-12 flex-wrap justify-center">
        <article className="bg-secondary-500 w-[400px] pt-4 pb-8 px-8 rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative -ml-8 w-[400px] h-[190px] mb-8">
            <Image
              src="/images/roadmap/akademi_pertumbuhan.png"
              alt="Akademi Pertumbuhan"
              layout="fill"
            />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4">
            Akademi Pertumbuhan Profesional Berkelanjutan
          </h5>
          <p className="text-base font-normal text-neutral-0">
            Hadirkan akademi pertumbuhan profesional berkelanjutan yang mencakup
            pembaruan tren industri, pelatihan lanjutan, dan sumber daya karier.
          </p>
        </article>

        <div
          className="flex justify-center items-center bg-no-repeat bg-center w-full h-full absolute -z-10 top-0 rounded-full"
          style={{ backgroundImage: "url(/images/roadmap/effect_card.png)" }}
        >
          <DoubleArrow className="w-10 h-10 fill-primary-400" />
        </div>

        <article className="bg-secondary-500 pt-4 pb-8 px-8 w-[400px] rounded-lg border-[3px] border-secondary-200/40">
          <div className="relative -ml-8 w-[400px] h-[190px] mb-8">
            <Image
              src="/images/roadmap/rencana_pengembangan.png"
              alt="Akademi Pertumbuhan"
              layout="fill"
            />
          </div>

          <h5 className="font-semibold text-2xl text-neutral-0 mb-4">
            Rencana Pengembangan Karir yang Dipersonalisasi
          </h5>
          <p className="text-base font-normal text-neutral-0">
            Integrasi rencana pengembangan karier yang disesuaikan dengan
            kemampuan dan aspirasi pengguna, membimbing mereka menuju tujuan
            karier yang diinginkan.
          </p>
        </article>
      </section>
    </>
  );
};

export { Card };
