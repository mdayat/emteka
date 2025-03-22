import Image from "next/image";
import { useWindowSize } from "@hooks/useWindowSize";

import { TitleLatarBelakangTextDesktop } from "@components/TitleText/TitleLatarBelakangTextDesktop";
import KenapaHarusEmtekaMobileImage from "@images/home/Kenapa Harus Emteka_.png";

import WhyEmtekaImage from "@images/home/maskot_1_pose_1.svg";
import { BlobWavesImage } from "@components/BlobWavesImage";
import { FlaxConicalIcon } from "@components/icons/FlaxConicalIcon";
import { LocaleFixedIcon } from "@components/icons/LocateFixedIcon";
import { MapIcon } from "@components/icons/MapIcon";

export function LatarBelakang() {
  const resize = useWindowSize();

  return (
    <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#4F46E5] text-neutral-0 mx-4 old-lg:mx-auto old-lg:w-[90%] pt-5 px-3 pb-44 old-lg:py-10 old-lg:px-8 rounded-3xl drop-shadow-xl relative overflow-hidden mb-16 old-lg:mb-20">
      <div className="absolute bottom-0 left-0 right-0 flex old-lg:block justify-center old-lg:left-20 -z-10">
        <div className="absolute -bottom-10 old-lg:-top-8 old-lg:-left-7 -z-10 w-[233px] h-[233px] bg-neutral-0 rounded-full opacity-10" />
        <div className="absolute -bottom-8 old-lg:-left-0 -z-10 w-[176px] h-[176px] bg-neutral-0 rounded-full opacity-10" />
        <Image
          src={WhyEmtekaImage}
          alt="Kenapa Harus Emteka"
          className="max-w-max max-h-max"
        />
      </div>

      <div className="old-lg:grid grid-cols-4 items-start gap-x-11">
        <div className="flex flex-col items-center old-lg:items-start mb-6">
          {resize > 1024 ? (
            <TitleLatarBelakangTextDesktop className="max-w-max w-64" />
          ) : (
            <Image
              src={KenapaHarusEmtekaMobileImage}
              alt="Kenapa Harus Emtekaa"
            />
          )}
          <p className="mt-2 font-semibold text-center lg:text-start">
            Matematika tidak lagi menjadi mimpi buruk. Kami telah sediakan
            solusinya!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 old-lg:grid-cols-3 gap-5 col-span-3">
          <div className="bg-neutral-0 border px-5 py-4 rounded-lg">
            <div className="rounded-full bg-[#E3F0FF] w-10 h-10 lg:w-[68px] lg:h-[68px] mx-auto old-lg:mx-0 flex items-center justify-center">
              <LocaleFixedIcon className="w-6 lg:w-11 fill-none stroke-[#3D6FF2]" />
            </div>

            <h4 className="text-[#1937A6] font-extrabold font-nunito text-center old-lg:text-start old-lg:text-xl my-4">
              Ketahui Kesulitanmu
            </h4>
            <p className="text-base text-[#656876] text-justify lg:text-left">
              Lewat Asesmen Kesiapan Belajar, kamu bisa cek dulu pemahamanmu
              sebelum masuk ke materi inti. Jadi, nggak ada lagi kejutan yang
              bikin pusing!
            </p>
          </div>

          <div className="bg-neutral-0 border px-5 py-4 rounded-lg">
            <div className="rounded-full bg-[#FFF5A8] w-10 h-10 lg:w-[68px] lg:h-[68px] mx-auto old-lg:mx-0 flex items-center justify-center">
              <MapIcon className="w-6 lg:w-11 fill-none stroke-[#F2B705]" />
            </div>

            <h4 className="text-[#A67100] font-extrabold font-nunito text-center old-lg:text-start old-lg:text-xl my-4">
              Belajar Sesuai Kebutuhan
            </h4>
            <p className="text-base text-[#656876] text-justify lg:text-left">
              Materi yang disediakan Emteka nggak cuma lengkap, tapi juga
              disusun biar kamu bisa paham konsep dasar sebelum lanjut ke yang
              lebih sulit.
            </p>
          </div>

          <div className="bg-neutral-0 border px-5 py-4 rounded-lg">
            <div className="rounded-full bg-[#E3F0FF] w-10 h-10 lg:w-[68px] lg:h-[68px] mx-auto old-lg:mx-0 flex items-center justify-center">
              <FlaxConicalIcon className="w-6 lg:w-11 fill-none stroke-[#3D6FF2]" />
            </div>

            <h4 className="text-[#1937A6] font-extrabold font-nunito text-center old-lg:text-start old-lg:text-xl my-4">
              Uji Diri & Lihat Progresmu
            </h4>
            <p className="text-base text-[#656876] text-justify lg:text-left">
              Selesai belajar? Tantang dirimu di Asesmen Akhir dan Try-Out untuk
              lihat sejauh mana kamu berkembang!
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="absolute -right-16 old-lg:-right-28 old-lg:-bottom-24 -top-10 old-lg:-top-24 -z-10">
          <BlobWavesImage className="fill-neutral-0 w-full h-full opacity-10" />
        </div>
        <div className="absolute -right-32 old-lg:-right-48 old-lg:-bottom-24 -top-10 old-lg:-top-24 -z-10">
          <BlobWavesImage className="fill-neutral-0 w-full h-full opacity-10" />
        </div>
      </div>
    </section>
  );
}
