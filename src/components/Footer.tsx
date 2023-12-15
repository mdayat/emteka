import Image from "next/image";
import Link from "next/link";

import { useWindowSize } from "@hooks/useWindowSize";

import EmtekaLogo from "@images/Emteka-Logo White.png";
import { Instagram } from "./icons/Instagram";
import { LinkedIn } from "./icons/LinkedIn";

export function Footer() {
  const width = useWindowSize();

  return (
    <footer className="pt-8 pb-[2rem] xl:pb-[130px] xl:max-h-80 font-karla overflow-y-clip w-full">
      {width > 1280 && <FooterDesktop />}

      {width < 680 && <FooterMobile />}
    </footer>
  );
}

function FooterDesktop() {
  return (
    <>
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
              <Link
                target="_blank"
                href="https://wa.me/6282211000129"
                rel="noreferrer"
              >
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
                rel="noreferrer"
                href="https://www.instagram.com/emteka_frh/"
              >
                Instagram
              </Link>
            </li>
            <li className="font-normal text-neutral-200">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/emteka-id/"
              >
                Linkedin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function FooterMobile() {
  return (
    <>
      <div className="flex flex-col px-7 items-start xl:items-center justify-between w-full">
        <div className="mx-auto w-4/5 flex flex-col items-center text-center gap-5 mb-8">
          <Image src={EmtekaLogo} alt={""} className="w-24" />
          <p className="text-[26px] text-neutral-0 font-bold max-w-md leading-[40px]">
            <span className="text-primary-400">Matematika</span> ternyata
            gampang, lho!
          </p>
        </div>
        <hr className="mx-auto w-[90%] mb-5 h-0.5 border-[#D4D7DC80]" />

        <div className="flex gap-x-3 items-center mx-auto mb-6">
          <Link
            href="https://www.linkedin.com/company/emteka-id/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="w-7 fill-neutral-0" />
          </Link>
          <Link
            href="https://www.instagram.com/emteka_frh/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="w-7 fill-neutral-0" />
          </Link>
        </div>

        <div className="flex flex-col w-full gap-y-5 xl:gap-16 text-neutral-0">
          <ul className="text-sm">
            <li className="font-bold mb-4">Link</li>
            <li className="font-normal text-neutral-200 mb-2">
              <Link href="/">Beranda</Link>
            </li>
            <li className="font-normal text-neutral-200 mb-2">
              <Link href="/about-us">Tentang Kami</Link>
            </li>
            <li className="font-normal text-neutral-200">
              <Link href="/roadmap">Roadmap</Link>
            </li>
          </ul>

          <hr className="mx-auto w-full h-0.5  border-neutral-0" />

          <ul className="text-sm">
            <li className="font-bold mb-4">Kontak</li>
            <li className="font-normal text-neutral-200 mb-2">
              <Link
                target="_blank"
                href="https://wa.me/6282211000129"
                rel="noreferrer"
              >
                0822 1100 0129
              </Link>
            </li>
            <li className="font-normal text-neutral-200">
              <Link href="mailto:info@furahasystems.com">
                info@furahasystems.com
              </Link>
            </li>
          </ul>

          <hr className="mx-auto w-full h-0.5  border-neutral-0" />
          <ul className="text-sm">
            <li className="font-bold mb-4">Alamat</li>
            <li className="font-normal text-neutral-200 mb-1">
              Jl. Pamulang Permai, Kec. Pamulang, Kota Tangerang Selatan
            </li>
          </ul>
        </div>

        <div className="mt-12 mx-auto">
          <p className="text-sm font-karla text-neutral-0">
            &copy; {new Date().getFullYear()} Emteka. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
