import Head from "next/head";

import { Hero } from "src/features/home/Hero";
import { ProgramPopuler } from "src/features/home/ProgramPopuler";
import { WhatsappButton } from "@components/whatsappButton";

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

      <WhatsappButton />

      <div className="bg-[#E7F2FF] font-karla mb-[80rem]">
        <Hero />
        <ProgramPopuler />
      </div>
    </>
  );
}
