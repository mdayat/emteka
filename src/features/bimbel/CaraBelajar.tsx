import Image from "next/image";

import CB1 from "@images/bimbel/cara_belajar-1.webp";
import CB2 from "@images/bimbel/cara_belajar-2.webp";
import CB3 from "@images/bimbel/cara_belajar-3.webp";
import { GreenCheck } from "@components/icons/greenCheck";

export function CaraBelajar() {
  return (
    <section className="flex flex-col gap-6 px-[14px] my-8 old-lg:gap-10 old-lg:px-[103px] old-lg:py-10">
      <h1 className="text-[28px] old-lg:text-4xl font-bold leading-[44px]">
        Bagaimana Anda Belajar di Bimbel Emteka?
      </h1>
      <div className="flex flex-col gap-6">
        {/* Pra-Program Bimbel Emteka */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2 old-lg:flex-row old-lg:gap-20 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex px-2 py-[6px] rounded-lg bg-secondary-400">
                <h2 className="text-neutral-0 text-xl font-bold leading-7">
                  Pra-Program Bimbel Emteka
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-neutral-800 w-fit">
                <p className="text-base text-balance">
                  Kami akan <span className="font-bold">identifikasi</span> apa
                  yang perlu anda pelajari dan bagaimana caranya dengan:
                </p>
                <ul className="flex flex-col gap-3 list-none text-base">
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" /> Pemetaan
                    penguasaan materi matematika
                  </li>
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" /> Pemeriksaan
                    tantangan dan kesulitan belajar
                  </li>
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" /> Asesmen
                    psikologi
                  </li>
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" /> Diskusi
                    langsung dengan ahli dan tim kami untuk mencari tahu apa dan
                    bagaimana cara terbaik bagi Anda untuk belajar di Emteka
                  </li>
                </ul>
              </div>
            </div>
            <Image
              src={CB1}
              alt={""}
              width={430}
              height={320}
              className="flex-shrink-0"
            />
          </div>
        </div>
        {/* Rencana Pembelajaran Personal */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2 old-lg:flex-row old-lg:gap-20 w-full">
            <Image
              src={CB2}
              alt={""}
              width={430}
              height={308}
              className="flex-shrink-0 hidden old-lg:block"
            />
            <div className="flex flex-col gap-4">
              <div className="flex px-2 py-[6px] rounded-lg bg-secondary-400">
                <h2 className="text-neutral-0 text-xl font-bold leading-7">
                  Renacana Pembelajaran Personal
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-neutral-800 w-fit">
                <p className="text-base text-balance">
                  Setiap siswa mendapatkan Learning Trajectory (jalur
                  belajar/rencana pembelajaran) yang terpersonalisasi
                  berdasarkan hasil pra-program.
                </p>
                <ul className="flex flex-col gap-3 list-none text-base">
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" /> Rencana
                    pembelajaran yang terstruktur
                  </li>
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" /> Kurikulum
                    dan materi yang disesuaikan dengan kebutuhan
                  </li>
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" /> Setiap sesi
                    diisi oleh mentor yang sesuai dengan kemampuan dan
                    kepribadian Anda!
                  </li>
                </ul>
              </div>
            </div>
            <Image
              src={CB2}
              alt={""}
              width={430}
              height={308}
              className="flex-shrink-0 old-lg:hidden"
            />
          </div>
        </div>
        {/* Belajar dengan Cara yang Efektif */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2 old-lg:flex-row old-lg:gap-20 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex px-2 py-[6px] rounded-lg bg-secondary-400">
                <h2 className="text-neutral-0 text-xl font-bold leading-7">
                  Belajar dengan Cara yang Efektif
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-neutral-800 w-fit">
                <p className="text-base text-balance">
                  Nikmati program belajar yang interaktif dan mudah bagi Anda.
                </p>
                <ul className="flex flex-col gap-3 list-none text-base">
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" />{" "}
                    <p>Setiap sesi dijalankan dengan private</p>
                  </li>
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" />{" "}
                    <p>
                      Pantau dan kelola program pembelajaran melalui page{" "}
                      <span className="font-bold">Notion</span> pribadi khusus
                      untuk Anda
                    </p>
                  </li>
                  <li className="flex flex-row gap-2">
                    <GreenCheck className="w-6 h-6 flex-shrink-0" />{" "}
                    <p>
                      Media pembelajaran menggunakan{" "}
                      <span className="font-bold">Google Meet</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <Image
              src={CB3}
              alt={""}
              width={430}
              height={308}
              className="flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
