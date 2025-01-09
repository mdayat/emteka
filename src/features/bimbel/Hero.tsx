import Image from "next/image";

import HeroImage from "@images/bimbel/hero.webp";
import { Bubble } from "../../components/icons/bubble";
import CheckCircle from "../../components/icons/check_circle.svg";

export function Hero() {
  return (
    <section className="relative flex flex-col gap-8 px-[14px] py-8 old-lg:flex-col old-lg:gap-10 old-lg:px-[103px] old-lg:py-12">
      {/* Text Section */}
      <div className="flex flex-col gap-6 old-lg:gap-0 old-lg:flex-row old-lg:justify-between w-full">
        <div className="flex flex-col gap-2 leading-[48px] font-bold">
          <h1 className="text-[32px] old-lg:text-5xl">Belajar Matematika</h1>
          <div className="flex gap-1 old-lg:gap-4">
            <h1 className="text-[28px] leading-9 old-lg:text-4xl old-lg:leading-[44px]">
              Sesuai
            </h1>
            <span className="p-1 origin-top-left rotate-[-1.60deg] bg-[#3c6ff2] rounded-2xl justify-center items-center gap-2 inline-flex old-lg:px-2 old-lg:py-2.5 ">
              <p className="text-neutral-0 text-[28px] old-lg:leading-[48px] old-lg:text-5xl">
                Kebutuhan Anda!
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col old-lg:w-[366px] gap-4">
          <p className="text-neutral-600 text-base font-normal">
            Mulai dari dasar hingga tingkat lanjut, Bimbel Emteka membantu Anda
            memahami matematika dengan pendekatan yang terpersonalisasi.
          </p>
          <a
            className="bg-primary-300 text-neutral-900 rounded-full h-10 py-2.5 px-8 justify-center items-center w-fit font-bold leading-tight text-sm"
            href="https://wa.me/6282211000129"
            target="_blank"
          >
            <span>Tanya Kami dan Mulai Belajar</span>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <Image
          src={HeroImage}
          alt={"Hero"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="border-2 lg:w-full old-lg:w-[917px] old-lg:h-[479px] rounded-3xl old-lg:border-8 border-[#d8e3ff]"
        />
        <Bubble className="absolute w-8 h-8 -top-3 -left-3 old-lg:-top-[33px] old-lg:-left-[33px] old-lg:w-[66px] old-lg:h-[66px] fill-primary-400" />
        <Bubble className="absolute w-12 h-12 -bottom-4 -right-2 old-lg:-bottom-4 old-lg:-right-2 old-lg:w-[89px] old-lg:h-[89px] fill-primary-400 scale-x-[-1]" />

        <span className="absolute -left-[6px] bottom-[67px] old-lg:-left-[68px] old-lg:top-[222px] flex pl-2 pr-3 py-2 gap-[5px] w-fit h-fit rounded-full bg-secondary-400 text-neutral-0 text-xs old-lg:text-base font-semibold items-center">
          <Image
            src={CheckCircle}
            alt={""}
            className="w-4 h-4 old-lg:w-6 old-lg:h-6"
          />
          Personalized
        </span>
        <span className="absolute left-[35px] bottom-[26px] old-lg:left-[18px] old-lg:top-[292px] flex pl-2 pr-3 py-2 gap-[5px] w-fit h-fit rounded-full bg-secondary-400 text-neutral-0 text-xs old-lg:text-base font-semibold items-center">
          <Image
            src={CheckCircle}
            alt={""}
            className="w-4 h-4 old-lg:w-6 old-lg:h-6"
          />
          Private
        </span>
        <span className="absolute left-[5px] -bottom-[13px] old-lg:-left-[45px] old-lg:bottom-[78px] flex pl-2 pr-3 py-2 gap-[5px] w-fit h-fit rounded-full bg-secondary-400 text-neutral-0 text-xs old-lg:text-base font-semibold items-center">
          <Image
            src={CheckCircle}
            alt={""}
            className="w-4 h-4 old-lg:w-6 old-lg:h-6"
          />
          Engaging
        </span>
      </div>
    </section>
  );
}
