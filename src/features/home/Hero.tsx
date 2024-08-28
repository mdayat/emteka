import Image from "next/image";
import Link from "next/link";

import Screen01 from "@images/home/Emteka_Screen_01.png";

export function Hero() {
  return (
    <section className="bg-secondary-500 relative mt-[60px] overflow-hidden old-lg:mt-[76px] font-karla px-4 xl:px-0 pb-20 xl:pb-0">
      <div className="relative overflow-x-clip">
        <div className="hidden xl:block w-[400px] h-[400px] absolute -top-40 -right-[10rem] opacity-30 bg-[#FFE600] rounded-full blur-[200px]" />
      </div>

      <div className="relative overflow-x-clip">
        <div className="hidden xl:block w-[400px] h-[400px] absolute top-48 -left-[16.5rem] opacity-40 bg-[#FFE600] rounded-full blur-[200px]" />
      </div>

      <div className="w-full xl:max-w-[840px] xl:mx-auto mt-10">
        <div className="xl:flex xl:justify-between">
          <h1 className="text-4xl xl:text-[40px] font-semibold text-neutral-0 text-left leading-[45px] xl:leading-[50px]">
            Alat Ukur Kemampuan Matematika Anda
          </h1>

          <div className="w-fit mx-auto">
            <p className="text-neutral-50 xl:w-[334px] mt-3 xl:mt-1.5 text-left">
              Tidak Perlu Lagi Khawatir dalam menghadapi persoalan Matematika di
              setiap pembelajaran sekolah
            </p>
            <div className="relative z-10 text-left">
              <Link
                href="https://app.emteka.id/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary-300 text-neutral-900 rounded-full py-2.5 px-6 xl:px-8 font-semibold mt-5"
              >
                Coba Sekarang
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Screen01} alt="Emteka Screen Capture" className="mt-10" />
          {/* <button className="hidden xl:block bg-secondary-500 absolute top-[18%] xl:right-14 right-1 px-3 py-1.5 rounded-full border-neutral-200 border-4 border-solid cursor-default">
            Coming Soon
          </button> */}
        </div>
      </div>
    </section>
  );
}
