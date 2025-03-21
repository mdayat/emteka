import Image from "next/image";
import Link from "next/link";

import PoseContactConsultan from "@images/home/pose_contact_consultan.svg";
import { BlobWavesImage } from "@components/BlobWavesImage";
import { CircleMessageIcon } from "@components/icons/CircleMessageIcon";

export function ContactKonsultan() {
  return (
    <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#4F46E5] text-neutral-0 mx-4 old-lg:mx-auto old-lg:w-[90%] pt-8 px-3 old-lg:py-10 old-lg:px-8 rounded-3xl drop-shadow-xl relative overflow-hidden">
      <div>
        <div className="absolute left-5 old-lg:-left-28 -bottom-[55%] old-lg:-bottom-3/4 -z-10">
          <BlobWavesImage className="fill-neutral-0 w-full h-full opacity-10" />
        </div>
        <div className="absolute -left-32 old-lg:left-16 -bottom-[35%] old-lg:-bottom-full -z-10">
          <BlobWavesImage className="fill-neutral-0 w-full h-full opacity-10" />
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col mb-5 old-lg:mb-0 old-lg:block items-center old-lg:ml-20 xl:ml-52">
          <h6 className="bg-warning-300 text-[#874600] w-fit px-3 py-1 rounded-md font-bold">
            Punya pertanyaan?
          </h6>
          <h1 className="mt-3 mb-8 text-4xl max-w-max font-extrabold font-nunito w-full lg:w-[525px] text-center old-lg:text-start font-outline-2 tracking-tighter">
            Hubungi konsultan pendidikan kami melalui chat
          </h1>
          <Link
            href="https://api.whatsapp.com/send/?phone=6282211000129&text&type=phone_number&app_absent=0"
            className="flex w-full justify-center lg:w-fit items-center gap-x-2 bg-neutral-0 text-neutral-900 font-semibold px-6 py-3 rounded-full"
            target="_blank"
          >
            <CircleMessageIcon className="stroke-[#000] w-6" />
            Chat Konsultan
          </Link>
        </div>
        <div className="old-lg:absolute flex justify-center old-lg:block old-lg:-bottom-10 old-lg:right-20 xl:right-56">
          <Image src={PoseContactConsultan} alt="Pose Kontak Konsultan" />
        </div>
      </div>

      <div className="hidden old-lg:block">
        <div className="absolute -right-16 old-lg:-right-28 old-lg:-bottom-24 -top-10 old-lg:-top-24 -z-10">
          <BlobWavesImage className="fill-neutral-0 w-full h-full opacity-10" />
        </div>
        <div className="absolute -right-32 old-lg:-right-48 old-lg:-bottom-24 -top-10 old-lg:-top-24 -z-10">
          <BlobWavesImage className="fill-neutral-0 w-full h-full opacity-10" />
        </div>
      </div>
    </section>
  );
}
