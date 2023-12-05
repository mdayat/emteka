import Image from "next/image";

import MenuBook from "../../components/icons/menu_book.svg";
import Psykolog from "../../components/icons/psychology.svg";
import Pages from "../../components/icons/pages.svg";
import CheckIcone from "../../components/icons/check_circle.svg";

export function PrioritasKami() {
  return (
    <div className="font-karla mt-0 xl:mt-10 xl:w-[1100px] mx-auto px-4">
      <h2 className="text-[30px] xl:text-[40px] font-semibold mb-4 text-neutral-0 text-center">
        Prioritas Kami
      </h2>

      <p className="text-center text-sm old-lg:text-base mb-5">
        Matematika tidak lagi menjadi mimpi buruk. Kami telah sediakan
        solusinya!
      </p>

      <div className="xl:flex xl:justify-between px-5 xl:px-0">
        <div className="w-full xl:w-[330px] h-full xl:h-[270px] py-[28px] mx-auto px-[16px] border-solid border-2 border-secondary-200 rounded-xl bg-secondary-600">
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

        <div className="w-full xl:w-[330px] h-full xl:h-[270px] py-[28px] mx-auto my-5 xl:my-0 px-[16px] border-solid border-2 border-secondary-200 rounded-xl bg-secondary-600">
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

        <div className="w-full xl:w-[330px] h-full xl:h-[270px] py-[28px] mx-auto px-[16px] border-solid border-2 border-secondary-200 rounded-xl bg-secondary-600">
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

      <div className="w-fit mx-auto mt-5">
        <div className="flex flex-wrap  justify-center xl:justify-between gap-x-2 gap-y-2 xl:gap-x-5 text-center">
          <div className="rounded-full bg-secondary-600 py-2 px-3 flex gap-x-2">
            <Image src={CheckIcone} alt="Check Icon" className="w-5 h-5" />
            <p className="font-semibold tracking-widest text-sm">
              Personalized
            </p>
          </div>

          <div className="rounded-full bg-secondary-600 py-2 px-3 flex gap-x-2">
            <Image src={CheckIcone} alt="Check Icon" className="w-5 h-5" />
            <p className="font-semibold tracking-widest text-sm">Accurate</p>
          </div>

          <div className="rounded-full bg-secondary-600 py-2 px-3 flex gap-x-2">
            <Image src={CheckIcone} alt="Check Icon" className="w-5 h-5" />
            <p className="font-semibold tracking-widest text-sm">Engaging</p>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto xl:w-full h-[2px] bg-neutral-200 mt-16"></div>
    </div>
  );
}
