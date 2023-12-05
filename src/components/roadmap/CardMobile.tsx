import Image from "next/legacy/image";

import { DoubleArrow } from "@icons/DoubleArrow";

import { Card } from "./interface/Card";

const CardMobile = ({ id, title, paragraph, images }: Card) => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-4">
      <article
        className="bg-secondary-500 w-full pt-4 pb-8 px-5 rounded-lg border-[3px] border-secondary-200/40 my-2"
        key={id}
      >
        <div className="relative w-full h-[190px] mb-8">
          <Image
            src={`/images/roadmap/${images}`}
            alt="Akademi Pertumbuhan"
            // className="object-cover object-center"
            layout="fill"
          />
        </div>

        <h5 className="font-semibold text-2xl text-neutral-0 mb-4">{title}</h5>
        <p className="text-base font-normal text-neutral-0">{paragraph}</p>
      </article>

      {id < 6 && (
        <DoubleArrow className="w-10 h-10 fill-primary-400 rotate-90" />
      )}
    </section>
  );
};

export { CardMobile };
