import Link from "next/link";
import Head from "next/head";

import { Hero } from "src/features/home/Hero";
import { LatarBelakang } from "src/features/home/LatarBelakang";
import { PrioritasKami } from "src/features/home/PrioritasKami";
import { Berlangganan } from "src/features/home/Berlangganan";
import { WhatsAppColored } from "@components/icons/WhatsAppColored";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emteka - Asesmen Matematika Terstruktur</title>
        <meta
          name="description"
          content="Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk membantu Anda dalam mengukur dan memetakan kemampuan Matematika secara menyeluruh."
        />

        <meta
          property="og:title"
          content="Emteka - Asesmen Matematika Terstruktur"
        />
        <meta
          property="og:description"
          content="Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk membantu Anda dalam mengukur dan memetakan kemampuan Matematika secara menyeluruh."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/favicon.svg" />
        <meta property="og:url" content="https://www.emteka.id/" />

        <meta
          property="twitter:title"
          content="Emteka - Asesmen Matematika Terstruktur"
        />
        <meta
          property="twitter:description"
          content="Emteka adalah aplikasi asesmen berbasis web yang dirancang untuk membantu Anda dalam mengukur dan memetakan kemampuan Matematika secara menyeluruh."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/public/favicon.svg" />
        <meta property="twitter:url" content="https://www.emteka.id/" />
        <meta property="twitter:domain" content="emteka.id" />

        <link type="preload" href="https://www.youtube.com/embed/_JTp4JzZHbY" />
        <link
          type="preconnect"
          href="https://www.youtube.com/embed/_JTp4JzZHbY"
        />
        <link
          rel="dns-prefetch"
          href="https://www.youtube.com/embed/_JTp4JzZHbY"
        />
      </Head>

      <Link href="https://wa.me/6282211000129" target="_blank">
        <WhatsAppColored className="w-10 h-10 fixed bottom-4 right-4 z-50 old-lg:w-12 old-lg:h-12 old-lg:bottom-6 old-lg:right-6" />
      </Link>

      <div className="bg-secondary-500 font-karla text-neutral-0">
        <Hero />
        <PrioritasKami />
        <LatarBelakang />
        <Berlangganan />
      </div>
    </>
  );
}
