import Image from "next/image";

import Bookmark from "../../components/icons/collections_bookmark.svg";
import GreenCheck from "../../components/icons/green_check_circle.svg";
import Edit from "../../components/icons/edit.svg";

import Circle from "@images/home/circle_effect.png";
import MainImage from "@images/home/Emteka_Screen_02_1.png";
import TopRight from "@images/home/Emteka_Screen_02_2.png";
import BottomLeft from "@images/home/Emteka_Screen_02_3.png";

import SecondMain from "@images/home/Emteka_Screen_03_1.png";
import SecondBottom from "@images/home/Emteka_Screen_03_2.png";

import ThirdMain from "@images/home/Emteka_Screen_04.png";
export function LatarBelakang() {
  return (
    <article className="bg-secondary-500 relative overflow-hidden font-karla">
      <div className="w-[75%] mx-auto mt-10">
        <div className="flex">
          <p className="text-[30px] font-semibold text-neutral-0 tracking-widest w-[60%]">
            Cara mengukur kemampuan matematika Anda
          </p>
          <div className="flex gap-x-5">
            <button className="bg-transparent border-2 border-solid border-primary-100 text-primary-100 py-2.5 px-7 rounded-full mt-5 h-fit">
              Lihat Di bawah
            </button>
            <a href="https://youtu.be/_JTp4JzZHbY" target="_blank">
              <button className="bg-primary-300 text-neutral-900 rounded-full py-2.5 px-8 font-semibold mt-5 h-fit">
                Coba Sekarang
              </button>
            </a>
          </div>
        </div>

        <div className="mt-20 h-fit">
          <div className="flex justify-between w-full">
            <div className="flex justify-between">
              <div className="mt-0.5 w-[40%] flex">
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

              <div className="relative -mt-7">
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
                  className="absolute top-0 -right-20 z-10 w-[45%] h-[45%] object-contain"
                />
                <Image
                  src={BottomLeft}
                  alt="Circle Effect"
                  className="absolute bottom-36 -left-10 z-10 w-[45%] h-[45%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit">
          <div className="flex justify-between w-full">
            <div className="flex flex-row-reverse justify-between">
              <div className="mt-0.5 w-[40%] flex">
                <Image src={Edit} alt="Edit SVG" className="w-12 h-12" />
                <div className="ml-5">
                  <p className="-mb-1">02</p>
                  <p>Mulai Asesmen</p>

                  <p className="mt-5">
                    Ukur seberapa jauh kemampuanmu dalam suatu materi matematika
                    melalui asesmen hingga pada materi prasyarat nya!
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

              <div className="relative -mt-7">
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
                  className="absolute bottom-52 -left-10 z-10 w-[45%] h-[45%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit">
          <div className="flex justify-between w-full">
            <div className="flex justify-between">
              <div className="mt-0.5 w-[40%] flex">
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

              <div className="relative -mt-7">
                <Image
                  src={Circle}
                  alt="Circle Effect"
                  className="w-[80%] h-[80%] object-contain ml-10 -mt-8"
                />
                <Image
                  src={ThirdMain}
                  alt="Circle Effect"
                  className="absolute top-16"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-neutral-200"></div>
      </div>
    </article>
  );
}
