import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { useDelayedUnmount } from "@hooks/useDelayedUnmount";
import { useWindowSize } from "@hooks/useWindowSize";

import { Emteka } from "./icons/Emteka";
import { Close } from "./icons/Close";
import { Menu } from "./icons/Menu";

export function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const { isMounted, setIsMounted, animationOnUnmount } = useDelayedUnmount();
  const { pathname } = useRouter();
  const width = useWindowSize();

  function openMenu() {
    if (isMounted === false) {
      setIsMounted(true);
    }

    isOpened
      ? animationOnUnmount(() => setIsOpened(false), 250)
      : setIsOpened(true);
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-30 w-full duration-200">
        <div className="bg-[#4075FFBF] backdrop-blur-md">
          <div className="flex justify-between items-center py-4 mx-5 lg:mx-16 xl:max-w-[1480px] xl:mx-auto xl:px-20">
            <strong className="text-neutral-0 font-semibold flex justify-between items-center gap-x-1 text-lg lg:text-xl">
              <Emteka className="w-7 h-7 lg:w-8 lg:h-8" />
              Emteka
            </strong>

            <button
              // ref={buttonRef}
              onClick={openMenu}
              type="button"
              aria-label="Navigation Menu"
              className="lg:hidden"
            >
              {isOpened === false ? (
                <Menu className="fill-neutral-0  w-8 h-8" />
              ) : (
                <Close className="fill-neutral-0  w-8 h-8" />
              )}
            </button>

            {width > 640 && <DesktopNavbar pathname={pathname} />}
          </div>
        </div>

        <MobileNavbar isMounted={isMounted} pathname={pathname} />
      </div>
    </>
  );
}

function DesktopNavbar({ pathname }: { pathname: string }) {
  return (
    <>
      <nav className="hidden lg:flex lg:justify-between lg:items-center">
        <ul className="lg:flex lg:justify-between lg:items-center lg:gap-x-6 xl:gap-x-8">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-neutral-0 font-bold"
                  : "text-neutral-200"
              }`}
            >
              Beranda
            </Link>
          </li>

          <li>
            <Link
              href="/about-us"
              className={`${
                pathname === "/about-us"
                  ? "text-neutral-0 font-bold"
                  : "text-neutral-200"
              }`}
            >
              Tentang Kami
            </Link>
          </li>

          <li>
            <Link
              href="/roadmap"
              // scroll={false}
              className={`${
                pathname === "/roadmap"
                  ? "text-neutral-0 font-bold"
                  : "text-neutral-200"
              }`}
            >
              Roadmap
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-6">
        <Link href="#" className="lg:block font-karla font-lg text-neutral-0">
          Masuk
        </Link>

        <Link
          href="https://app.emteka.id"
          className="btn-yellow lg:block lg:px-8 font-karla font-semibold"
        >
          Coba Sekarang
        </Link>
      </div>
    </>
  );
}

function MobileNavbar({
  isMounted,
  pathname,
}: {
  isMounted: boolean;
  pathname: string;
}) {
  return (
    <nav
      className={`
      bg-[#4075FFBF]/70 lg:hidden w-full h-[100vh] fixed backdrop-blur-lg pt-6 px-6 flex flex-col duration-500
      ${
        // isMounted ? "animate-scaleIn" : "animate-scaleOut"
        isMounted === true
          ? "left-0 ease-in opacity-100"
          : "left-full ease-out opacity-0"
      }`}
    >
      <ul className="flex flex-col">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "font-bold" : ""
            } text-neutral-0 font-medium text-base pt-4`}
          >
            Beranda
          </Link>

          <hr className="w-full h-[1px] border-neutral-200 my-6" />
        </li>

        <li>
          <Link
            href="/about-us"
            className={`${
              pathname === "/about-us" ? "font-bold" : ""
            } text-neutral-0 font-medium text-base`}
          >
            Tentang Kami
          </Link>

          <hr className="w-full h-[1px] border-neutral-200 my-6" />
        </li>

        <li>
          <Link
            href="/roadmap"
            className="text-neutral-0 font-medium text-base"
          >
            Roadmap
          </Link>

          <hr className="w-full h-[1px] border-neutral-200 my-6" />
        </li>
      </ul>

      <div className="flex items-center gap-y-4 flex-col-reverse h-full justify-center">
        <Link href="#" className="font-karla text-lg text-neutral-0">
          Masuk
        </Link>

        <Link
          href="https://app.emteka.id"
          className="btn-yellow px-8 font-karla font-semibold text-base"
        >
          Coba Sekarang
        </Link>
      </div>
    </nav>
  );
}
