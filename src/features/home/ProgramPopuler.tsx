import Link from "next/link";

import { BlobWavesImage } from "@components/BlobWavesImage";
import { AtomIcon } from "@components/icons/AtomIcon";
import { BookOpenTextIcon } from "@components/icons/BookOpenTextIcon";
import { GraduationCapIcon } from "@components/icons/GraduationCapIcon";
import { HistoryIcon } from "@components/icons/HistoryIcon";
import { LocaleFixedIcon } from "@components/icons/LocateFixedIcon";
import { PencilRullerIcon } from "@components/icons/PencilRullerIcon";
import { RouteIcon } from "@components/icons/RouteIcon";
import { TitleProgramPopulerText } from "@components/TitleProgramPopulerText";
import { TrophyIcon } from "@components/icons/TrophyIcon";
import { TryFreeIcon } from "@components/icons/TryFree";
import { StarIcon } from "@components/icons/StarIcon";

export function ProgramPopuler() {
  return (
    <section
      id="programpopuler"
      className="bg-neutral-0 old-lg:absolute z-10 old-lg:w-[90%] old-lg:translate-x-[5.5%] mt-16 old-lg:-mt-16 py-5 mx-4 old-lg:mx-0 old-lg:px-8 rounded-3xl drop-shadow-xl mb-20"
    >
      <div className="absolute -left-6 -top-8  old-lg:-left-12 old-lg:-top-12">
        <StarIcon className="w-[80px] old-lg:w-[116px] h-full" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <TitleProgramPopulerText className="max-w-[250px] old-lg:max-w-[350px]" />

        <p className="text-center mx-3 lg:mx-0 lg:max-w-[700px] text-neutral-500 mt-2">
          kami menghadirkan program belajar yang dirancang khusus untuk membantu
          siswa memahami matematika dengan lebih mudah dan efektif.
        </p>
      </div>

      <div className="mt-4 old-lg:mt-6 grid old-lg:grid-cols-2 items-stretch w-full gap-y-10 gap-x-[60px] px-6 old-lg:px-0">
        <div className="relative" id="Bimbel Privat">
          <div className="absolute top-2 -right-[13px] flex justify-end z-10">
            <TryFreeIcon className="w-1/3 h-full" />
          </div>
          <div className="bg-gradient-to-r from-[#FCFFB4] to-[#F1C068] p-5 drop-shadow rounded-xl overflow-hidden h-full">
            <div className="relative z-10">
              <div className="flex flex-col old-lg:flex-row gap-4 old-lg:items-center">
                <div className="rounded-full border-[7px] border-neutral-0/80 p-2 w-fit">
                  <BookOpenTextIcon className="w-8" />
                </div>
                <div>
                  <h3 className="text-[#874600] font-bold text-2xl font-nunito">
                    Bimbel Private
                  </h3>
                  <p className="text-neutral-500 max-w-[375px]">
                    Belajar Matematika Sesuai Kebutuhanmu!
                  </p>
                </div>
              </div>

              <hr className="border-[#FAFAFA] border-[1.5px] my-5 block rounded-full" />

              <ul className="flex flex-col gap-y-5">
                <li className="flex items-center gap-x-3">
                  <LocaleFixedIcon className="min-w-[24px] max-w-[24px] fill-none" />
                  <p className="font-normal text-base text-[#232529]">
                    Pemetaan dan Diagnosa Kebutuhan Belajar
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <RouteIcon className="min-w-[24px] max-w-[24px] fill-none" />
                  <p className="font-normal text-base text-[#232529]">
                    Rencana Belajar yang Terarah (Learning Trajectory)
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <GraduationCapIcon className="min-w-[24px] max-w-[24px] fill-none" />
                  <p className="font-normal text-base text-[#232529]">
                    Mentor Dipilih Sesuai Kemampuan dan Kepribadian
                  </p>
                </li>
              </ul>

              <Link
                href="https://api.whatsapp.com/send/?phone=6282211000129&text&type=phone_number&app_absent=0"
                className="bg-gradient-to-r from-neutral-0/20 to-neutral-0/80 border-2 border-neutral-0 font-bold text-center px-3 old-lg:px-6 rounded-full py-3 text-[#874600] block mt-5 mb-7"
                target="_blank"
              >
                Coba Sekarang
              </Link>

              <div className="block text-center my-3">
                <Link
                  href="https://emteka.id/bimbel"
                  className="text-[#805300] font-bold underline outline-[#805300] text-sm"
                >
                  Apa saja yang akan aku dapatkan?
                </Link>
              </div>
            </div>

            <div>
              <div className="absolute -right-[10rem] lg:-right-[13.5rem] -bottom-16 lg:-bottom-20 lg:top-0">
                <BlobWavesImage className="fill-neutral-0/20 w-full h-2/3 lg:h-full" />
              </div>
              <div className="absolute -right-[13rem] lg:-right-[16rem] -bottom-16 lg:-bottom-20 lg:top-0">
                <BlobWavesImage className="fill-neutral-0/20 w-full h-2/3 lg:h-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative" id="Online Try Out">
          <div className="absolute top-2 -right-[13px] flex justify-end z-10">
            <TryFreeIcon className="w-1/3 h-full" />
          </div>
          <div className="bg-gradient-to-r from-[#E7F2FF] to-[#94C7F6] p-5 drop-shadow rounded-xl overflow-hidden h-full">
            <div className="relative z-10">
              <div className="flex flex-col old-lg:flex-row gap-4 old-lg:items-center">
                <div className="rounded-full border-[7px] border-neutral-0/80 p-2 w-fit">
                  <PencilRullerIcon className="w-8" />
                </div>
                <div>
                  <h3 className="text-secondary-800 font-bold text-2xl font-nunito">
                    Online Try Out
                  </h3>
                  <p className="text-neutral-500 max-w-[379px]">
                    Temukan kelemahanmu dan latih terus kemampuanmu!
                  </p>
                </div>
              </div>

              <hr className="border-[#FAFAFA] border-[1.5px] my-5 block rounded-full" />

              <ul className="flex flex-col gap-y-5">
                <li className="flex items-center gap-x-3">
                  <AtomIcon className="min-w-[24px] max-w-[24px] fill-none" />

                  <p className="font-normal text-base text-[#232529]">
                    Pelajari tipe soal yang sering muncul dan taklukkan
                    tantangannya
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <HistoryIcon className="min-w-[24px] max-w-[24px] fill-none" />
                  <p className="font-normal text-base text-[#232529]">
                    Kuasai manajemen waktu agar makin siap.
                  </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <TrophyIcon className="min-w-[24px] max-w-[24px] fill-none" />
                  <p className="font-normal text-base text-[#232529]">
                    Ketahui ranking kemampuan kamu dibanding teman-teman yang
                    lain
                  </p>
                </li>
              </ul>

              <Link
                href="https://app.emteka.id/"
                className="bg-gradient-to-r from-neutral-0/20 to-neutral-0/80 border-2 border-neutral-0 font-bold text-center px-3 old-lg:px-6 rounded-full py-3 text-[#3D6FF2] block mt-5 mb-7"
                target="_blank"
              >
                Coba Sekarang
              </Link>
            </div>

            <div>
              <div className="absolute -right-[10rem] lg:-right-[13.5rem] -bottom-16 lg:-bottom-20 lg:top-0">
                <BlobWavesImage className="fill-neutral-0/20 w-full h-2/3 lg:h-full" />
              </div>
              <div className="absolute -right-[13rem] lg:-right-[16rem] -bottom-16 lg:-bottom-20 lg:top-0">
                <BlobWavesImage className="fill-neutral-0/20 w-full h-2/3 lg:h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-6 -bottom-8 old-lg:-right-12 old-lg:-bottom-12">
        <StarIcon className="w-[80px] old-lg:w-[145px] h-full -rotate-[20deg]" />
      </div>
    </section>
  );
}
