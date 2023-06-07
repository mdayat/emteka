"use client";

import Image from "next/image";
import Link from "next/link";

import { useWindowSize } from "@hooks/useWindowSize";

import MobileImage from "@images/home/mobile.png";
import DesktopImage from "@images/home/desktop.png";
import OrnamentImage from "@images/home/ornament.png";

export function Hero() {
  const { width } = useWindowSize();

  return (
    <section className="bg-secondary-500 relative overflow-hidden h-[727px] pt-[60px] desktop:h-[512px] desktop:pt-[96px]">
      <article className="absolute left-6 desktop:top-1/2 desktop:-translate-y-1/2 desktop:left-20 desktop:w-[518px] mediumDesktop:left-52 mt-8">
        <h1 className="text-neutral-50 font-semibold text-[40px] leading-[48px] mb-4 desktop:text-[48px] desktop:leading-[58px] desktop:mb-6 mediumDesktop:text-[56px] mediumDesktop:leading-[68px]">
          Buka Potensi Matematika Anda dengan Emteka
        </h1>

        <p className="text-secondary-50 mb-8 leading-6 w-10/12 desktop:text-lg">
          Bersama Emteka, raih keberhasilan dalam pelajaran Matematika dengan
          cara yang lebih menyenangkan!
        </p>

        <Link
          href="/#waiting-list"
          className="bg-primary-300 text-neutral-900 font-medium inline-block text-xs leading-[18px] rounded-[30px] py-3 px-6 desktop:text-sm desktop:py-4 desktop:px-7"
        >
          Bergabung Bersama Kami
        </Link>

        {width !== 0 && width < 1024 ? <MobileHeroImage /> : <></>}
      </article>

      {width >= 1024 ? <DesktopHeroImage /> : <></>}
    </section>
  );
}

function MobileHeroImage() {
  return (
    <>
      <Image
        src={OrnamentImage}
        alt=""
        className="absolute top-1/2 -translate-y-1/2 -right-64"
      />

      <div className="absolute mt-6">
        <Image
          src={DesktopImage}
          alt="Aplikasi Emteka Pada Perangkat Desktop"
        />
        <Image
          src={MobileImage}
          alt="Aplikasi Emteka Pada Perangkat Mobile"
          className="absolute top-20"
        />
      </div>
    </>
  );
}

function DesktopHeroImage() {
  return (
    <div className="absolute right-0 h-full">
      <Image
        src={OrnamentImage}
        alt=""
        className="absolute top-1/2 -translate-y-1/2"
      />

      <Image
        src={DesktopImage}
        alt="Aplikasi Emteka Pada Perangkat Desktop"
        className="translate-x-14"
      />

      <Image
        src={MobileImage}
        alt="Aplikasi Emteka Pada Perangkat Mobile"
        className="absolute top-48 -left-14"
      />
    </div>
  );
}
