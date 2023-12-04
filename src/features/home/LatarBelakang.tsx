import Image from "next/image";
import Link from "next/link";

import Bookmark from "../../components/icons/collections_bookmark.svg";
import GreenCheck from "../../components/icons/green_check_circle.svg";
import Edit from "../../components/icons/edit.svg";
import Arrow from "../../components/icons/arrow_downward.svg";

import Circle from "@images/home/circle_effect.png";
import MainImage from "@images/home/Emteka_Screen_02_1.png";
import TopRight from "@images/home/Emteka_Screen_02_2.png";
import BottomLeft from "@images/home/Emteka_Screen_02_3.png";

import SecondMain from "@images/home/Emteka_Screen_03_1.png";
import SecondBottom from "@images/home/Emteka_Screen_03_2.png";

import Effect02 from "@images/home/Effect_02.png";

import ThirdMain from "@images/home/Emteka_Screen_04.png";
export function LatarBelakang() {
  return (
    <article className="bg-secondary-500 relative overflow-hidden font-karla">
      <div className="mt-10">
        <div className="xl:flex xl:w-[1000px] mx-auto px-4 xl:px-0">
          <p className="text-[30px] font-semibold text-neutral-0 text-center tracking-widest xl:w-[60%]">
            Cara mengukur kemampuan matematika Anda
          </p>
          <div className="flex gap-x-5 mx-auto w-fit">
            <Link
              href="#01pilihan-materi"
              className="bg-transparent border-2 border-solid border-primary-100 text-primary-100 py-2.5 px-3 rounded-full mt-5 h-fit flex"
            >
              <Image src={Arrow} alt="Arrow SVG" className="mr-3" />
              Lihat Di bawah
            </Link>
            <a href="https://youtu.be/_JTp4JzZHbY" target="_blank">
              <button className="bg-primary-300 text-neutral-900 rounded-full py-3 px-4 font-semibold mt-5 h-fit">
                Tonton Vidio
              </button>
            </a>
          </div>
        </div>

        <div
          className="pt-[6rem] h-fit mx-auto xl:w-[1000px] px-4"
          id="01pilihan-materi"
        >
          <div className="xl:flex xl:justify-between w-full px-4 xl:px-0">
            <div className="xl:flex xl:justify-between">
              <div className="mt-0.5 xl:w-[40%] flex">
                <Image
                  src={Bookmark}
                  alt="Bookmark SVG"
                  className="w-12 h-12"
                />
                <div className="ml-5">
                  <p className="-mb-1">01</p>
                  <p>Pilihan Materi</p>

                  <p className="mt-5">
                    Kami menyediakan beragam pilihan materi matematika mulai
                    dari tingkat SMP hingga SMA untuk setiap kurikulum, seperti
                    Kurikulum 2013, Kurikulum K13 Revisi, dan Kurikulum Merdeka.
                  </p>

                  <p className="my-5">Pilihan materi sudah mencakup:</p>

                  <div className="flex mb-3">
                    <Image
                      src={GreenCheck}
                      alt="Green Check Svg"
                      className="mr-3"
                    />
                    <p>Materi Prasyarat</p>
                  </div>
                  <div className="flex">
                    <Image
                      src={GreenCheck}
                      alt="Green Check Svg"
                      className="mr-3"
                    />
                    <p>Peta Materi</p>
                  </div>
                </div>
              </div>

              <div className="relative xl:-mt-7 mt-10">
                <Image
                  src={Circle}
                  alt="Circle Effect"
                  className="w-[80%] h-[80%] object-contain ml-10 -mt-8"
                />
                <Image
                  src={MainImage}
                  alt="Circle Effect"
                  className="absolute top-14"
                />
                <Image
                  src={TopRight}
                  alt="Circle Effect"
                  className="absolute top-2 -right-4 xl:-right-20 z-10 w-[45%] h-[45%] object-contain"
                />
                <Image
                  src={BottomLeft}
                  alt="Circle Effect"
                  className="absolute bottom-4 -left-3 xl:-left-10 z-10 w-[45%] h-[45%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit relative mt-20 xl:mt-0 px-4">
          <div className="xl:w-[1000px] mx-auto flex flex-col-reverse">
            <Image
              src={Effect02}
              alt="Effect Image"
              className="absolute top-1 rotate-180 -right-1 object-cover"
            />
            <div className="xl:flex xl:justify-between w-full px-4 xl:px-0">
              <div className="xl:flex xl:flex-row-reverse justify-between">
                <div className="mt-0.5 xl:w-[40%] flex">
                  <Image src={Edit} alt="Edit SVG" className="w-12 h-12" />
                  <div className="ml-5">
                    <p className="-mb-1">02</p>
                    <p>Mulai Asesmen</p>

                    <p className="mt-5">
                      Ukur seberapa jauh kemampuanmu dalam suatu materi
                      matematika melalui asesmen hingga pada materi prasyarat
                      nya!
                    </p>

                    <p className="my-5">Pada asesmen terdiri atas:</p>

                    <div className="flex">
                      <Image
                        src={GreenCheck}
                        alt="Green Check Svg"
                        className="mr-3"
                      />
                      <p>Fitur Tracking</p>
                    </div>
                  </div>
                </div>

                <div className="relative xl:-mt-7 mt-10">
                  <Image
                    src={Circle}
                    alt="Circle Effect"
                    className="w-[80%] h-[80%] object-contain ml-10 -mt-8"
                  />
                  <Image
                    src={SecondMain}
                    alt="Circle Effect"
                    className="absolute top-14"
                  />
                  <Image
                    src={SecondBottom}
                    alt="Circle Effect"
                    className="absolute bottom-8 xl:bottom-52 -left-4 z-10 w-[45%] h-[45%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit mx-auto xl:w-[1000px] px-4">
          <div className="xl:flex xl:justify-between w-full">
            <div className="xl:flex xl:justify-between">
              <div className="mt-0.5 xl:w-[40%] flex">
                <Image
                  src={Bookmark}
                  alt="Bookmark SVG"
                  className="w-12 h-12"
                />
                <div className="ml-5">
                  <p className="-mb-1">03</p>
                  <p>Lihat Hasil Asesmen</p>

                  <p className="mt-5">
                    Analisis kemampuanmu dengan evaluasi yang kami berikan
                    secara menyeluruh dan terstruktur.
                  </p>

                  <p className="my-5">Kamu akan mendapatkan:</p>

                  <div className="flex mb-3">
                    <Image
                      src={GreenCheck}
                      alt="Green Check Svg"
                      className="mr-3"
                    />
                    <p>Skor Penilaian</p>
                  </div>

                  <div className="flex mb-3">
                    <Image
                      src={GreenCheck}
                      alt="Green Check Svg"
                      className="mr-3"
                    />
                    <p>Rekomendasi Pembelajaran</p>
                  </div>

                  <div className="flex">
                    <Image
                      src={GreenCheck}
                      alt="Green Check Svg"
                      className="mr-3"
                    />
                    <p>Pembahasan Soal</p>
                  </div>
                </div>
              </div>

              <div className="relative xl:-mt-7 mt-10">
                <Image
                  src={Circle}
                  alt="Circle Effect"
                  className="w-[80%] h-[80%] object-contain ml-10 -mt-8"
                />
                <Image
                  src={ThirdMain}
                  alt="Circle Effect"
                  className="absolute top-10 xl:top-16"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] mx-auto h-[2px] bg-neutral-200 mt-16"></div>
      </div>
    </article>
  );
}
