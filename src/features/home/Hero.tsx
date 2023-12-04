import Image from "next/image";
import Link from "next/link";

import Screen01 from "@images/home/Emteka_Screen_01.png";
import Effect01 from "@images/home/Effect_01.png";
import Effect02 from "@images/home/Effect_02.png";

export function Hero() {
  return (
    <div className="bg-secondary-500 relative mt-[60px] overflow-hidden old-lg:mt-[76px] font-karla px-4 xl:px-0 pb-20 xl:pb-0">
      <Image src={Effect01} alt="Glowing Effect" className="absolute right-0" />
      <Image
        src={Effect02}
        alt="Glowing Effect"
        className="absolute left-0 -top-36 xl:top-0"
      />
      <div className="w-full xl:max-w-[840px] mx-auto mt-10">
        <div className="xl:flex xl:justify-between">
          <p className="text-[30px] xl:text-[40px] font-semibold text-neutral-0 text-center">
            Alat Ukur Kemampuan Matematika Anda
          </p>
          <div className="w-fit mx-auto px-4">
            <p className="text-neutral-50 xl:w-[334px] text-center mt-5">
              Tidak Perlu Lagi Khawatir dalam menghadapi persoalan Matematika di
              setiap pembelajaran sekolah
            </p>
            <div className="relative z-10 text-center">
              <Link
                href="https://app.emteka.id/"
                target="_blank"
                className="inline-block bg-primary-300 text-neutral-900 rounded-full py-2.5 px-8 font-semibold mt-5"
              >
                Coba Sekarang
              </Link>
            </div>
          </div>
        </div>
        <div className="relative px-5">
          <Image
            src={Screen01}
            alt="Emteka Screen Capture"
            className="mt-10 w-fit h-fit"
          />
          <button className="bg-secondary-500 absolute top-[18%] xl:right-14 right-1 px-3 py-1.5 rounded-full border-neutral-200 border-4 border-solid cursor-default">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
