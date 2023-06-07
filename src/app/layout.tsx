import { Poppins } from "next/font/google";
import type { ReactNode } from "react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${poppins.variable} font-poppins`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
