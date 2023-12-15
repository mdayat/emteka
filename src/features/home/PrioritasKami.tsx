import Image from "next/image";

import { CardHomeTemp } from "./temp/cardHome";

import MenuBook from "../../components/icons/menu_book.svg";
import Psykolog from "../../components/icons/psychology.svg";
import Pages from "../../components/icons/pages.svg";
import CheckIcone from "../../components/icons/check_circle.svg";

export function PrioritasKami() {
  return (
    <div className="font-karla mt-0 xl:mt-16 xl:w-[1100px] mx-auto px-4">
      <h2 className="text-4xl xl:text-[40px] font-semibold mb-3 text-neutral-0 text-center">
        Prioritas Kami
      </h2>

      <p className="text-center text-sm old-lg:text-base mb-6 xl:mb-12 px-4 xl:px-0">
        Matematika tidak lagi menjadi mimpi buruk. Kami telah sediakan
        solusinya!
      </p>

      <div className="flex flex-col xl:flex-row xl:justify-between gap-y-4 xl:gap-y-0 xl:px-0">
        {CardHomeTemp.map(({ id, title, paragraph }) => (
          <article
            className="w-full xl:w-[330px] h-full xl:h-[270px] py-[28px] mx-auto px-[16px] border-solid border-2 border-secondary-200 rounded-xl bg-secondary-600"
            key={id}
          >
            <div className="w-fit mx-auto rounded-full bg-secondary-400 p-3">
              <Image
                src={
                  id === 1 ? MenuBook : id === 2 ? Psykolog : id === 3 && Pages
                }
                alt=""
                className="text-primary-400 fill-primary-400"
              />
            </div>
            <p className="text-xl font font-semibold text-center mt-3">
              {title}
            </p>
            <p className="text-center mt-3 text-sm">{paragraph}</p>
          </article>
        ))}
      </div>

      <div className="w-fit mx-auto mt-5">
        <div className="flex flex-wrap  justify-center xl:justify-between gap-x-2 gap-y-2 xl:gap-x-5 text-center">
          <div className="rounded-full bg-secondary-600 py-2 px-3 flex gap-x-2">
            <Image src={CheckIcone} alt="" className="w-5 h-5" />
            <p className="font-semibold tracking-widest text-sm">
              Personalized
            </p>
          </div>

          <div className="rounded-full bg-secondary-600 py-2 px-3 flex gap-x-2">
            <Image src={CheckIcone} alt="" className="w-5 h-5" />
            <p className="font-semibold tracking-widest text-sm">Accurate</p>
          </div>

          <div className="rounded-full bg-secondary-600 py-2 px-3 flex gap-x-2">
            <Image src={CheckIcone} alt="" className="w-5 h-5" />
            <p className="font-semibold tracking-widest text-sm">Engaging</p>
          </div>
        </div>
      </div>

      <hr className="w-full border-[#d4d7dc]/40 border my-10 xl:my-[62px]" />
    </div>
  );
}
