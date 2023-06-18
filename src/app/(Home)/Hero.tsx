import Image from "next/image";
import Link from "next/link";

import MobileImage from "@images/home/mobile.png";
import DesktopImage from "@images/home/desktop.png";
import OrnamentImage from "@images/home/ornament.png";

export function Hero() {
  return (
    <div className="bg-secondary-500 relative overflow-hidden pt-8">
      <div className="h-[580px] ml-8 lg:grid lg:grid-cols-2 lg:place-items-center lg:h-full lg:ml-16 xl:ml-20 2xl:ml-28">
        <article className="grid grid-cols-12 pb-6 lg:block lg:w-[518px] lg:pb-0">
          <div className="col-span-10 w-11/12 my-auto lg:w-full">
            <h1 className="text-neutral-0 font-semibold text-[32px] leading-9 mb-4 lg:text-5xl">
              Buka Potensi Matematika Anda bersama Emteka
            </h1>

            <p className="text-neutral-100 text-sm mb-6 lg:text-base">
              Bersama Emteka, raih keberhasilan dalam pelajaran Matematika
              dengan cara yang lebih menyenangkan!
            </p>

            <Link
              href="/#waiting-list"
              className="bg-primary-300 text-neutral-900 font-medium inline-block text-xs py-3 px-4 rounded-3xl lg:text-sm lg:py-4 lg:px-6"
            >
              Bergabung Bersama Kami
            </Link>
          </div>

          <div className="col-span-2 place-self-center relative w-[300px] h-[290px] left-[136px] lg:hidden">
            <Image src={OrnamentImage} alt="" fill />
          </div>
        </article>

        <div className="absolute right-0 pl-8 lg:hidden">
          <Image src={DesktopImage} alt="" className="relative -right-6" />
          <Image src={MobileImage} alt="" className="absolute top-16" />
        </div>

        <div className="hidden lg:block lg:relative lg:ml-auto">
          <Image
            src={OrnamentImage}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 scale-[.8]"
          />

          <Image
            src={DesktopImage}
            alt=""
            className="relative -right-20 scale-75"
          />

          <Image
            src={MobileImage}
            alt=""
            className="absolute top-40 scale-90"
          />
        </div>
      </div>
    </div>
  );
}
