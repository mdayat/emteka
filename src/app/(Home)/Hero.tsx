import Image from "next/image";
import Link from "next/link";

import MobileImage from "@images/home/mobile.png";
import DesktopImage from "@images/home/desktop.png";
import OrnamentImage from "@images/home/ornament.png";

export function Hero() {
  return (
    <div className="bg-secondary-500 relative overflow-hidden h-[calc(100vh-60px)] mt-[60px] pt-8 pl-8 lg:grid lg:grid-cols-2 lg:place-items-center lg:h-[calc(100vh-80px)] lg:pt-0 lg:mt-20 lg:px-16 xl:px-20 2xl:px-28">
      <article className="w-[310px] lg:w-[518px] lg:mr-auto">
        <div className="col-span-10 w-11/12 my-auto lg:w-full">
          <h1 className="text-neutral-0 font-semibold text-[32px] leading-9 mb-4 lg:text-5xl">
            Buka Potensi Matematika Anda bersama Emteka
          </h1>

          <p className="text-neutral-100 text-sm mb-6 lg:text-base">
            Bersama Emteka, raih keberhasilan dalam pelajaran Matematika dengan
            cara yang lebih menyenangkan!
          </p>

          <Link
            href="/#waiting-list"
            className="bg-primary-300 text-neutral-900 font-medium inline-block text-xs py-3 px-4 rounded-3xl lg:text-sm lg:py-4 lg:px-6"
          >
            Bergabung Bersama Kami
          </Link>
        </div>

        <Image
          priority
          alt=""
          className="object-cover object-center absolute top-8 -right-[264px] lg:hidden"
          src={OrnamentImage}
        />
      </article>

      <div className="absolute bottom-0 right-0 lg:hidden">
        <div className="absolute z-10 w-[136px] -top-40 right-40">
          <Image
            priority
            alt=""
            className="object-cover object-center"
            src={MobileImage}
          />
        </div>

        <div className="absolute -bottom-60 -right-72 w-[532px] h-[460px]">
          <Image
            priority
            fill
            alt=""
            className="object-cover object-center"
            src={DesktopImage}
          />
        </div>
      </div>

      <div className="hidden lg:relative lg:flex lg:justify-between lg:items-center">
        <div className="relative mt-auto left-16">
          <Image src={MobileImage} alt="" priority />
        </div>

        <div>
          <Image src={DesktopImage} alt="" priority />
        </div>
      </div>
    </div>
  );
}
