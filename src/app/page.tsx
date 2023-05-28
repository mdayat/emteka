import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snippo Emteka",
  description: "Selamat datang di halaman utama Snippo Emteka",
};

export default function Home() {
  return (
    <>
      <h1 className="text-2xl">Selamat Datang</h1>
    </>
  );
}
