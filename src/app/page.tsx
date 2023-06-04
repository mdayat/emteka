import Link from "next/link";
import type { Metadata } from "next";

import { HubungiKami } from "./hubungiKami";
import { FAQ } from "./faq";

export const metadata: Metadata = {
  title: "Snippo Emteka",
  description: "",
};

export default function Home() {
  return (
    <>
      <section className="bg-secondary-500 relative h-[609px]">
        <article className="absolute top-1/2 -translate-y-1/2 left-6 w-[284px]">
          <h1 className="text-neutral-50 font-semibold text-[40px] leading-[48px] mb-4">
            Buka Potensi Matematika Anda dengan Emteka
          </h1>

          <p className="text-secondary-50 mb-8 leading-6">
            Bersama Emteka, raih keberhasilan dalam pelajaran Matematika dengan
            cara yang lebih menyenangkan!
          </p>

          <Link
            href="/#hubungi-kami"
            className="bg-primary-300 text-neutral-900 font-medium inline-block text-xs leading-[18px] rounded-[30px] py-4 px-7"
          >
            Bergabung Bersama Kami
          </Link>
        </article>
      </section>

      <section className="my-16">
        <article className="text-center mx-11">
          <h2 className="text-neutral-900 font-bold text-[28px] mb-16">
            Emteka
          </h2>

          <p className="text-neutral-900">
            Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk
            membantu Anda dalam mengukur dan memetakan kemampuan Matematika
            secara menyeluruh. Emteka memberikan pengalaman pembelajaran yang
            adaptif dan dipersonalisasi melalui fitur-fitur canggih.
          </p>
        </article>
      </section>

      <section className="bg-secondary-50 py-10">
        <article className="text-center mx-6">
          <div className="mx-5">
            <h2 className="text-neutral-900 font-semibold uppercase text-2xl mb-4">
              Latar Belakang
            </h2>

            <p className="text-neutral-900 mb-8">
              Matematika adalah fondasi utama bagi perkembangan teknologi dan
              kunci dalam memecahkan permasalahan sehari-hari. Namun, mengapa
              begitu banyak dari siswa merasa dipersulit?
            </p>
          </div>

          <ul className="flex flex-col gap-y-4">
            <li className="bg-neutral-0 rounded-lg p-4">
              <div className="blue-ball text-neutral-0 font-semibold text-[32px]">
                1
              </div>

              <p className="text-neutral-900">
                Metode pembelajaran yang tidak efektif akibat inkompetensi
                pengajar dalam membangun dasar pemahaman Matematika yang kuat
                pada siswa
              </p>
            </li>

            <li className="bg-neutral-0 rounded-lg p-4">
              <div className="blue-ball text-neutral-0 font-semibold text-[32px]">
                2
              </div>

              <p className="text-neutral-900">
                Kurangnya pemahaman Matematika secara terstruktur berakibat pada
                kemampuan berpikir yang lemah
              </p>
            </li>

            <li className="bg-neutral-0 rounded-lg p-4">
              <div className="blue-ball text-neutral-0 font-semibold text-[32px]">
                3
              </div>

              <p className="text-neutral-900">
                Instrumen penilaian yang tidak akurat dalam mengukur dan
                memetakan kemampuan Matematika siswa secara komprehensif
              </p>
            </li>
          </ul>
        </article>
      </section>

      <section className="mt-9 mx-6">
        <article className="text-center mx-5">
          <h2 className="text-neutral-900 font-semibold uppercase text-2xl mb-4">
            Solusi Kami
          </h2>

          <p className="text-neutral-900">
            Dalam menghadapi tantangan tersebut, Emteka hadir sebagai solusi
            yang inovatif untuk membantu memetakan kemampuan serta strategi
            pembelajaran yang tepat dalam meningkatkan kemampuan Matematika Anda
          </p>
        </article>
      </section>

      <section className="flex flex-col gap-y-8 mt-16 mx-6">
        <article className="shadow-[0_14px_24px_0_rgba(189,172,172,0.15)] rounded-lg py-4 px-3">
          <h3 className="text-neutral-900 font-bold text-lg mb-4">
            Fitur Branching
          </h3>

          <p className="text-neutral-900">
            Mengarahkan Anda melalui penyesuaian konten dan tantangan dari
            asesmen berdasarkan tingkat kemampuan Anda
          </p>
        </article>

        <article className="shadow-[0_14px_24px_0_rgba(189,172,172,0.15)] rounded-lg py-4 px-3">
          <h3 className="text-neutral-900 font-bold text-lg mb-4">
            Fitur Tracking
          </h3>

          <p className="text-neutral-900">
            Melacak dan memantau kemajuan Anda dalam mempelajari Matematika
            selama mengerjakan asesmen
          </p>
        </article>

        <article className="shadow-[0_14px_24px_0_rgba(189,172,172,0.15)] rounded-lg py-4 px-3">
          <h3 className="text-neutral-900 font-bold text-lg mb-4">
            Fitur Feedback
          </h3>

          <p className="text-neutral-900">
            Memberikan pemetaan menyeluruh tentang kemampuan Anda yang mencakup
            pendangan secara terperinci
          </p>
        </article>
      </section>

      <section className="mt-9 mx-6">
        <h2 className="text-neutral-900 font-semibold uppercase text-2xl text-center mb-9">
          How It Works
        </h2>

        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/_JTp4JzZHbY"
          title="Cara Kerja Emteka"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-xl w-full h-[200px] mb-9"
        ></iframe>

        <div className="bg-secondary-500 text-center flex flex-col justify-center items-center rounded-xl h-[200px]">
          <h4 className="text-neutral-0 font-semibold uppercase text-[32px] leading-[38px] w-10/12 mx-auto mb-2">
            Coming Soon
          </h4>

          <p className="text-neutral-0 font-medium text-xs w-10/12 mx-auto">
            Segera hadir! Tetap terhubung dan jadilah yang pertama merasakan
            kemajuan luar biasa!
          </p>
        </div>
      </section>

      <FAQ />
      <HubungiKami />
    </>
  );
}
