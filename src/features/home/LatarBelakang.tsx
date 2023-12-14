import Image from "next/image";
import Link from "next/link";

import { Bookmark } from "../../components/icons/bookmark";
import GreenCheck from "../../components/icons/green_check_circle.svg";
import { Edit } from "../../components/icons/edit";
import Arrow from "../../components/icons/arrow_downward.svg";
import { Poll } from "@components/icons/poll";

import Circle from "@images/home/circle_effect.png";
import MainImage from "@images/home/Emteka_Screen_02_1.png";
import TopRight from "@images/home/Emteka_Screen_02_2.png";
import BottomLeft from "@images/home/Emteka_Screen_02_3.png";

import SecondMain from "@images/home/Emteka_Screen_03_1.png";
import SecondBottom from "@images/home/Emteka_Screen_03_2.png";

import ThirdMain from "@images/home/Emteka_Screen_04.png";

import { KemampuanMengukur } from "./temp/kemampuanMengukur";
export function LatarBelakang() {
  return (
    <section className="bg-secondary-500 relative overflow-hidden font-karla">
      <div className="mt-10">
        <div className="xl:flex xl:w-[1000px] mx-auto px-4 xl:px-0">
          <h2 className="text-[30px] font-semibold text-neutral-0 tracking-widest xl:w-[60%] text-left leading-[40px]">
            Cara mengukur kemampuan matematika Anda
          </h2>

          <div className="flex gap-x-5 mx-auto w-fit">
            <Link
              href="#01pilihan-materi"
              className="bg-transparent border-2 border-solid border-primary-100 text-primary-100 py-2.5 px-3 rounded-full mt-5 h-fit flex"
            >
              <Image src={Arrow} alt="Arrow SVG" className="mr-3" />
              Lihat Di bawah
            </Link>
            <a
              href="https://youtu.be/_JTp4JzZHbY"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-primary-300 text-neutral-900 rounded-full py-3 px-4 font-semibold mt-5 h-fit">
                Tonton Vidio
              </button>
            </a>
          </div>
        </div>

        <div
          className="pt-[6rem] h-fit mx-auto xl:w-[1000px] px-4 flex flex-col gap-y-6 xl:gap-y-0"
          id="01pilihan-materi"
        >
          {KemampuanMengukur.map(({ id, title, text, poin }, index) => (
            <article
              className={`xl:flex xl:justify-between  ${
                id === 2 && "flex-row-reverse"
              }`}
              key={id}
            >
              <div className="mt-0.5 w-full xl:w-[40%] flex ">
                {id === 1 ? (
                  <Bookmark className="w-12 h-12 flex-none fill-primary-400 " />
                ) : id === 2 ? (
                  <Edit className="w-12 h-12 flex-none fill-primary-400 " />
                ) : (
                  id === 3 && (
                    <Poll className="w-12 h-12 flex-none fill-primary-400 " />
                  )
                )}

                <div>
                  <h5 className="-mb-1 ml-4 xl:ml-5">0{index + 1}</h5>
                  <h2 className="text-xl ml-4 xl:ml-5 font-semibold font-karla">
                    {title}
                  </h2>

                  <div className="-ml-10 xl:ml-5">
                    <p className="mt-5">{text}</p>

                    <p className="my-5">
                      {id === 1
                        ? "Pilihan materi sudah mencakup"
                        : id === 2
                        ? "Pada asesmen terdiri atas"
                        : id === 3 && "Kamu akan mendapatkan"}
                      :
                    </p>

                    {poin.map((point) => (
                      <div className="flex mb-3" key={point}>
                        <Image
                          src={GreenCheck}
                          alt="Green Check Svg"
                          className="mr-3"
                        />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative xl:-mt-7 mt-10">
                {id === 1 ? (
                  <>
                    <Image
                      src={Circle}
                      alt=""
                      className="w-[80%] h-[80%] object-contain ml-10 -mt-8"
                    />
                    <Image src={MainImage} alt="" className="absolute top-14" />
                    <Image
                      src={TopRight}
                      alt=""
                      className="absolute top-2 -right-4 xl:-right-20 z-10 w-[45%] h-[45%] object-contain"
                    />
                    <Image
                      src={BottomLeft}
                      alt=""
                      className="absolute bottom-4 -left-3 xl:-left-10 z-10 w-[45%] h-[45%] object-contain"
                    />
                  </>
                ) : id === 2 ? (
                  <>
                    {" "}
                    <Image
                      src={Circle}
                      alt=""
                      className="w-[80%] h-[80%] object-contain ml-10 -mt-8"
                    />
                    <Image
                      src={SecondMain}
                      alt=""
                      className="absolute top-14"
                    />
                    <Image
                      src={SecondBottom}
                      alt=""
                      className="absolute bottom-8 xl:bottom-52 -left-4 z-10 w-[45%] h-[45%] object-contain"
                    />
                  </>
                ) : (
                  id === 3 && (
                    <>
                      <Image
                        src={Circle}
                        alt=""
                        className="w-[80%] h-[80%] object-contain ml-10 -mt-8"
                      />
                      <Image
                        src={ThirdMain}
                        alt=""
                        className="absolute top-10 xl:top-16"
                      />
                    </>
                  )
                )}
              </div>
            </article>
          ))}

          <hr className="w-full border-[#d4d7dc]/40 border my-7 xl:my-[64px] mx-auto" />
        </div>
      </div>
    </section>
  );
}
