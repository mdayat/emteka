import Head from "next/head";
import { Poppins } from "next/font/google";
import type { AppProps } from "next/app";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.svg" type="image/svg" />
      </Head>

      <div className={`${poppins.variable} font-poppins`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
