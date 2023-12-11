import Image from "next/image";

import { DoubleArrow } from "@icons/DoubleArrow";

import Images01 from "@images/roadmap/pelatih_pembelajaran.png";
import Images02 from "@images/roadmap/tantangan_pembelajaran.png";
import Images03 from "@images/roadmap/ruang_pembelajaran.png";
import Images04 from "@images/roadmap/proyek_selaras.png";
import Images05 from "@images/roadmap/akademi_pertumbuhan.png";
import Images06 from "@images/roadmap/rencana_pengembangan.png";

interface Card {
  id: number;
  title: string;
  paragraph: string;
}

const CardMobile = ({ id, title, paragraph }: Card) => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full px-4">
      <article
        className="bg-secondary-600 w-full pt-6 pb-8 px-5 rounded-lg border-[3px] border-secondary-200/40 my-2"
        key={id}
      >
        {id === 1 ? (
          <Image
            src={Images01}
            alt="Akademi Pertumbuhan"
            className="object-contain object-center w-full h-full px-5 mb-6"
          />
        ) : id === 2 ? (
          <Image
            src={Images02}
            alt="Akademi Pertumbuhan"
            className="object-contain object-center w-full h-full px-5 mb-6"
          />
        ) : id === 3 ? (
          <Image
            src={Images03}
            alt="Akademi Pertumbuhan"
            className="object-contain object-center w-full h-full px-5 mb-6"
          />
        ) : id === 4 ? (
          <Image
            src={Images04}
            alt="Akademi Pertumbuhan"
            className="object-contain object-center w-full h-full px-5 mb-6"
          />
        ) : id === 5 ? (
          <Image
            src={Images05}
            alt="Akademi Pertumbuhan"
            className="object-contain object-center w-full h-full px-5 mb-6"
          />
        ) : (
          id === 6 && (
            <Image
              src={Images06}
              alt="Akademi Pertumbuhan"
              className="object-contain object-center w-full h-full px-5 mb-6"
            />
          )
        )}

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
