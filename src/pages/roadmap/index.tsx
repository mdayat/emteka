import Image from "next/image";
import Link from "next/link";

import { Card } from "@components/roadmap/Card";

import Divider from "@images/about/Divider.png";

export default function RoadMapPage() {
  return (
    <main className="y-[75px] mx-auto w-3/4">
      <div
        className="bg-no-repeat bg-center absolute -top-40 left-0 -z-10 w-full h-full"
        style={{ backgroundImage: "url(/images/roadmap/effect_jumbotron.png)" }}
      ></div>

      <section className="flex flex-col gap-y-4 text-center mt-[150px] mx-auto w-[738px] mb-8">
        <h1 className="text-5xl font-semibold text-neutral-0">
          Ikuti Jalan Produk Ini
        </h1>
        <p className="text-neutral-0 text-lg">
          Kami akan menciptakan lingkungan pembelajaran matematika yang lebih
          dinamis, responsif, dan menantang, membantu pengguna mencapai tingkat
          penguasaan yang lebih tinggi dan memperoleh keterampilan matematika
          yang lebih mendalam.
        </p>
      </section>

      <Card />

      <Image className="w-1 my-6 mx-auto" src={Divider} alt={""} />

      <section className="flex flex-col justify-center items-center text-center gap-y-4 mb-[120px]">
        <h2 className="text-5xl font-semibold text-neutral-0">
          Kolaborasi Industri
        </h2>
        <p className="w-[738px] text-lg font-normal text-neutral-0">
          Menjalin kemitraan dengan perusahaan terkemuka untuk memastikan materi
          pembelajaran sesuai dengan kebutuhan industri, sehingga lulusan
          memiliki keterampilan yang sesuai dengan tuntutan pasar kerja.
        </p>

        <Link
          href="mailto:info@furahasystems.com"
          className="bg-primary-400 px-8 font-semibold py-[10px] rounded-full text-sm"
        >
          Tertarik untuk bekerja sama?
        </Link>
      </section>
    </main>
  );
}
