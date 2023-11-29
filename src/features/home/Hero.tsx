import Image from "next/image";

import Screen01 from "@images/home/Emteka_Screen_01.png";
import Effect01 from "@images/home/Effect_01.png";
import Effect02 from "@images/home/Effect_02.png";

export function Hero() {
  return (
    <div className="bg-secondary-500 relative overflow-hidden mt-[60px] old-lg:mt-[76px] font-karla">
      <Image src={Effect01} alt="Glowing Effect" className="absolute right-0" />
      <Image src={Effect02} alt="Glowing Effect" className="absolute left-0" />
      <div className="w-[840px] mx-auto mt-10">
        <div className="flex justify-between">
          <p className="text-[40px] font-semibold text-neutral-0">
            Alat Ukur Kemampuan Matematika Anda
          </p>
          <div>
            <p className="text-neutral-50 w-[334px]">
              Tidak Perlu Lagi Khawatir dalam menghadapi persoalan Matematika di
              setiap pembelajaran sekolah
            </p>
            <a href="https://app.emteka.id/" target="_blank">
              <button className="bg-primary-300 text-neutral-900 rounded-full py-2.5 px-8 font-semibold mt-5">
                Coba Sekarang
              </button>
            </a>
          </div>
        </div>
        <div className="relative">
          <Image src={Screen01} alt="Emteka Screen Capture" className="mt-10" />
          <button className="bg-secondary-500 absolute top-[18%] -right-14 px-5 py-2.5 rounded-full border-neutral-200 border-4 border-solid">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
