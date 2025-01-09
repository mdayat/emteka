import Image from "next/image";

import Maskot from "@images/bimbel/bimbel_maskot.webp";

import { EditPath } from "@components/icons/editPath";
import { Target } from "@components/icons/target";
import { Toga } from "@components/icons/toga";

export function Feature() {
  return (
    <section className="flex flex-col gap-10 px-[14px] mt-12 mb-8 old-lg:px-[103px] old-lg:py-12 old-lg:mt-6 old-lg:mb-12">
      <div className="flex flex-col gap-4 min-h-fit old-lg:grid old-lg:grid-cols-2 old-lg:gap-y-8 old-lg:gap-x-5">
        <div className="h-fit w-[328px] old-lg:w-[427px]">
          <div className="flex flex-col gap-4 old-lg:pl-4">
            <h2 className="text-[28px] leading-9 w-[177px] font-bold text-neutral-900 old-lg:text-[40px] old-lg:leading-[48px] old-lg:w-[255px]">
              Bimbel Privat Emteka
            </h2>
            <p className="text-sm w-[199px] text-neutral-800 old-lg:text-base old-lg:w-60">
              Belajar Matematika Secara{" "}
              <span className="font-bold">
                Online, Interaktif, dan Personal
              </span>
              , untuk <span className="font-bold">Semua Tujuan!</span>
            </p>
          </div>
          <hr className="h-3 mt-3 border-2 border-secondary-600 bg-primary-400 w-full rounded-full" />
          <div className="relative">
            <Image
              src={Maskot}
              alt={""}
              width={297}
              height={284}
              className="absolute bottom-0 w-[206px] h-[197px] -right-[57px] old-lg:-right-[91px] old-lg:w-[297px] old-lg:h-[284px]"
            />
          </div>
        </div>

        <div className="flex gap-6 p-4 w-full border-2 border-secondary-600 bg-secondary-400 text-neutral-0 rounded-2xl old-lg:px-4 old-lg:py-8">
          <span className="rounded-full p-[10px] h-[60px] w-[60px] bg-[#f2f5ff]">
            <Target className="h-10 w-10" />
          </span>
          <div className="flex flex-col gap-2 old-lg:gap-4">
            <h2 className="text-lg font-bold leading-7 old-lg:text-2xl">
              Pemetaan dan Diagnosa Kebutuhan Belajar
            </h2>
            <p className="text-sm font-normal leading-tight">
              Identifikasi kesulitan belajar matematika Anda melalui asesmen
              psikologi dan pemetaan kemampuan materi matematika
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 w-full border-2 border-secondary-600 bg-secondary-400 text-neutral-0 rounded-2xl old-lg:px-4 old-lg:py-8">
          <span className="rounded-full p-[10px] h-[60px] w-[60px] bg-[#f2f5ff]">
            <EditPath className="h-10 w-10" />
          </span>
          <div className="flex flex-col gap-2 old-lg:gap-4">
            <h2 className="text-lg font-bold leading-7 old-lg:text-2xl">
              Rencana Belajar yang Terarah (Learning Trajectory)
            </h2>
            <p className="text-sm font-normal leading-tight">
              Dapatkan rencana belajar yang dirancang khusus untuk membantu Anda
              menguasai materi yang dibutuhkan secara efektif!
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 w-full border-2 border-secondary-600 bg-secondary-400 text-neutral-0 rounded-2xl old-lg:px-4 old-lg:py-8">
          <span className="rounded-full p-[10px] h-[60px] w-[60px] bg-[#f2f5ff]">
            <Toga className="h-10 w-10" />
          </span>
          <div className="flex flex-col gap-2 old-lg:gap-4">
            <h2 className="text-lg font-bold leading-7 old-lg:text-2xl  ">
              Mentor Dipilih Sesuai Kemampuan dan Kepribadian
            </h2>
            <p className="text-sm font-normal leading-tight">
              Anda akan dibimbing oleh mentor yang sesuai dengan hasil asesmen
              pra-program Anda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
