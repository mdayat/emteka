import Image from "next/image";

import MenuBook from "../../components/icons/menu_book.svg";
import Psykolog from "../../components/icons/psychology.svg";
import Pages from "../../components/icons/pages.svg";

export function PrioritasKami() {
  return (
    <div className="font-karla mt-10 w-[80%] mx-auto">
      <h2 className="text-[40px] font-semibold text-neutral-0 text-center">
        Prioritas Kami
      </h2>

      <p className="text-center text-sm old-lg:text-base mb-5">
        Matematika tidak lagi menjadi mimpi buruk. Kami telah sediakan
        solusinya!
      </p>

      <div className="flex justify-between">
        <div className="w-[330px] h-[270px] py-[28px] px-[16px] border-solid border-2 border-secondary-200 rounded-xl bg-secondary-600">
          <div className="w-fit mx-auto rounded-full bg-secondary-400 p-3">
            <Image
              src={MenuBook}
              alt="Menu Book SVG"
              className="text-primary-400 fill-primary-400"
            />
          </div>
          <p className="text-xl font font-semibold text-center mt-3">
            Memberi pemahaman yang dibutuhkan
          </p>
          <p className="text-center mt-3 text-sm">
            Tinjau apa yang belum kamu kuasai! Kami akan berikan mulai dari
            prasyarat materi
          </p>
        </div>

        <div className="w-[330px] h-[270px] py-[28px] px-[16px] border-solid border-2 border-secondary-200 rounded-xl bg-secondary-600">
          <div className="w-fit mx-auto rounded-full bg-secondary-400 p-3">
            <Image
              src={Psykolog}
              alt="Psycholog SVG"
              className="text-primary-400 fill-primary-400"
            />
          </div>
          <p className="text-xl font font-semibold text-center mt-3">
            Menemukan potensi yang hilang
          </p>
          <p className="text-center mt-3 text-sm">
            Temukan mata rantai matematika mu yang hilang secara akurat
          </p>
        </div>

        <div className="w-[330px] h-[270px] py-[28px] px-[16px] border-solid border-2 border-secondary-200 rounded-xl bg-secondary-600">
          <div className="w-fit mx-auto rounded-full bg-secondary-400 p-5">
            <Image
              src={Pages}
              alt="Pages SVG"
              className="text-primary-400 fill-primary-400"
            />
          </div>
          <p className="text-xl font font-semibold text-center mt-3">
            Pemetaan kemampuan secara menyeluruh
          </p>
          <p className="text-center mt-3 text-sm">
            Tidak ada letih! Kami memberikan dukungan penuh untuk perjalanan
            matematika mu
          </p>
        </div>
      </div>

      <div className="w-fit mx-auto">
        <div className="fle"></div>
      </div>
    </div>
  );
}
