import Image from "next/image";

import EmtekaLogo from "@images/Emteka-Logo White.png";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="pt-8 pb-[4rem] xl:pb-[130px] xl:max-h-80 font-karla overflow-y-clip w-full">
      <div className="relative overflow-x-clip">
        <div className="w-[477px] h-[477px] absolute top-32 -right-[15rem] xl:-right-32 opacity-50 bg-[#FFE600] rounded-full blur-[200px]" />
      </div>
      <div className="relative overflow-x-clip">
        <div className="w-[477px] h-[477px] absolute -bottom-60 -left-60 opacity-50 bg-[#FFE600] rounded-full blur-[200px]" />
      </div>
      <hr className="mx-auto w-[90%] xl:w-[1200px] mb-8 h-0.5 border-[#D4D7DC80]" />
      <div className="flex flex-col xl:flex-row px-4 xl:px-20 xl:mx-auto items-start xl:items-center justify-between w-full xl:max-w-[1480px]">
        <div className="gap-4 mb-8 xl:mb-0">
          <Image src={EmtekaLogo} alt={""} className="w-28" />
          <p className="text-[38px] xl:text-[40px] text-neutral-0 font-bold max-w-md leading-[50px]">
            <span className="text-primary-400">Matematika</span> ternyata
            gampang, lho!
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-y-5 xl:gap-16 text-neutral-0">
          <ul className="text-xl">
            <li className="text-xl font-bold mb-4">Hubungi Kami</li>
            <li className="font-normal text-neutral-200 mb-2">
              <Link target="_blank" href="https://wa.me/6282211000129">
                0822 1100 0129
              </Link>
            </li>
            <li className="font-normal text-neutral-200">
              <Link href="mailto:info@furahasystems.com">
                info@furahasystems.com
              </Link>
            </li>
          </ul>
          <ul className="text-xl">
            <li className="font-bold mb-4">Halaman</li>
            <li className="font-normal text-neutral-200 mb-2">
              <Link href="/">Home</Link>
            </li>
            <li className="font-normal text-neutral-200 mb-2">
              <Link href="/about-us">Tentang Kami</Link>
            </li>
            <li className="font-normal text-neutral-200">
              <Link href="/roadmap">Roadmap</Link>
            </li>
          </ul>
          <ul className="text-xl">
            <li className="text-xl font-bold mb-4">Sosial Media</li>
            <li className="font-normal text-neutral-200 mb-2">
              <Link
                target="_blank"
                href="https://www.instagram.com/emteka_frh/"
              >
                Instagram
              </Link>
            </li>
            <li className="font-normal text-neutral-200">
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/emteka-id/"
              >
                Linkedin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
