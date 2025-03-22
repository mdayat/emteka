import Link from "next/link";

import { BlobWavesImage } from "@components/BlobWavesImage";

export function Hero() {
  return (
    <section className="text-neutral-0 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#4F46E5] relative pt-[60px] overflow-hidden old-lg:pt-[76px] font-karla px-4 pb-24 old-lg:px-20 grid old-lg:grid-cols-2 gap-x-20">
      <div className="mt-10 old-lg:mt-[160px]">
        <div>
          <h1 className="mb-5 text-[32px] leading-10 old-lg:text-5xl max-w-max font-extrabold font-nunito w-full old-lg:w-[525px] font-outline-2 tracking-tighter">
            Belajar Matematika dengan{" "}
            <span className="text-warning-300">Lebih Mudah</span>
          </h1>
          <p className="max-w-[540px] mt-5">
            Identifikasi kesulitan belajar, pelajari materi yang sesuai, dan
            tingkatkan pemahaman matematikamu dengan cara yang lebih efektif
            melalui
            <span className="text-warning-50 font-semibold">
              asesmen yang terstruktur dan dipersonalisasi
            </span>
            .
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-x-4 mt-4 gap-y-1.5">
          <Link
            href="https://api.whatsapp.com/send/?phone=6282211000129&text&type=phone_number&app_absent=0"
            className=" bg-[#FFD22E] border border-[#F2B705] font-bold text-center px-3 old-lg:px-6 rounded-full py-3 text-neutral-900 text-sm"
            target="_blank"
          >
            Coba Sekarang
          </Link>

          <Link
            href="#programpopuler"
            className=" bg-neutral-0 border border-neutral-200 font-bold text-center px-3 old-lg:px-6 rounded-full py-3 text-neutral-900 text-sm"
            scroll={false}
          >
            Lihat Program
          </Link>
        </div>
      </div>

      <div className="mt-8 lg:mt-10 relative z-10">
        <img
          src="https://ec3q29jlfx8dke21.public.blob.vercel-storage.com/emteka-hero-img-lz38RmMJMaHhR6pff3SiyxQkekznuL.png"
          alt="Home Hero"
          className="w-full h-full object-contain"
        />
      </div>

      <div>
        <div className="absolute -bottom-20 lg:top-36 -right-28">
          <BlobWavesImage className="w-full h-1/2 lg:h-full fill-neutral-0 opacity-10" />
        </div>
        <div className="absolute -bottom-32 lg:top-48 -right-40">
          <BlobWavesImage className="w-full h-1/2 lg:h-full fill-neutral-0 opacity-10" />
        </div>
      </div>
    </section>
  );
}
