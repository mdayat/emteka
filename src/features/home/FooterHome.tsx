import Image from "next/image";
import Link from "next/link";

import EmtekaLogoFullWhiteImage from "@images/Emteka-Logo-Full-White.png";
import FooterWave from "@images/home/footer_wave.svg";
import { AlternateEmailIcon } from "@components/icons/AlternateEmailIcon";
import { InstagramIcon } from "@components/icons/InstagramIcon";
import { WhatsappIcon } from "@components/icons/WhatsappIcon";
import { XIcon } from "@components/icons/XIcon";

export function FooterHome() {
  return (
    <>
      <Image src={FooterWave} alt="FooterWave" className="w-full" />
      <footer className="bg-[#2A4E94] pt-16 old-lg:pt-0 pb-16 border-none font-nunito text-neutral-0">
        <div className="mx-4 md:mx-16 old-lg:mx-20">
          <div className="w-full flex flex-col items-center gap-y-4 justify-center">
            <Image
              src={EmtekaLogoFullWhiteImage}
              alt="Emteka Logo"
              className="max-w-fit w-[122px] old-lg:max-w-prose old-lg:w-[220px]"
            />

            <h5 className="font-extrabold text-2xl text-center">
              <span className="text-warning-400">Matematika </span>mudah untuk
              semua.
            </h5>

            <p className="max-w-fit w-[456px] text-center">
              Kami akan mengabari Anda tentang aplikasi dan penawaran
              terbaru—tanpa spam, janji kami!
            </p>
          </div>

          <hr className="my-5" />
          <div className="flex items-center justify-center flex-col">
            <h6 className="font-extrabold text-xl">Hubungi Kami</h6>

            <div className="mt-4 flex gap-x-4 flex-wrap">
              <Link
                href=""
                className="w-8 h-8 bg-neutral-0 flex items-center justify-center rounded-lg"
              >
                <WhatsappIcon className="w-5 h-5" />
              </Link>
              <Link
                href=""
                className="w-8 h-8 bg-neutral-0 flex items-center justify-center rounded-lg"
              >
                <XIcon className="w-5 h-5" />
              </Link>
              <Link
                href=""
                className="w-8 h-8 bg-neutral-0 flex items-center justify-center rounded-lg"
              >
                <AlternateEmailIcon className="w-5 h-5" />
              </Link>
              <Link
                href=""
                className="w-8 h-8 bg-neutral-0 flex items-center justify-center rounded-lg"
              >
                <InstagramIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
