import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import { useDelayedUnmount } from "@hooks/useDelayedUnmount";
import { useWindowSize } from "@hooks/useWindowSize";

import { Emteka } from "./icons/Emteka";
import { Close } from "./icons/Close";
import { Menu } from "./icons/Menu";
import { EmtekaBimbel } from "./icons/emtekaBimbel";

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
      ? animationOnUnmount(() => setIsOpened(false), 150)
      : setIsOpened(true);
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[999] w-full duration-200">
        <div className="bg-neutral-0 backdrop-blur-[20px] font-nunito absolute w-full z-[999] border-b border-neutral-200">
          <div className="flex justify-between items-center py-4 mx-5 lg:mx-16 xl:max-w-[1480px] xl:mx-auto xl:px-20">
            <strong className="text-neutral-800 font-extrabold flex flex-shrink-0 justify-between items-center gap-x-1 text-lg">
              {(pathname === "/" || pathname === "/about-us") && (
                <>
                  <Emteka className="w-7 h-7 lg:w-8 lg:h-8" />
                  Emteka
                </>
              )}
              {pathname === "/bimbel" && (
                <>
                  <EmtekaBimbel className="w-9 h-8" />
                  Bimbel Emteka
                </>
              )}
            </strong>

            <button
              onClick={openMenu}
              type="button"
              aria-label="Navigation Menu"
              className="old-lg:hidden"
            >
              {isOpened === false ? (
                <Menu className="fill-neutral-800  w-6 h-6" />
              ) : (
                <Close className="fill-neutral-800  w-6 h-6" />
              )}
            </button>

            {width > 1024 && <DesktopNavbar pathname={pathname} />}
          </div>
        </div>

        <MobileNavbar
          isMounted={isMounted}
          openMenu={openMenu}
          pathname={pathname}
        />
        {isOpened && (
          <button onClick={openMenu}>
            <div className="block old-lg:hidden fixed inset-0 bg-neutral-900/50 -z-10"></div>
          </button>
        )}
      </div>
    </>
  );
}

function DesktopNavbar({ pathname }: { pathname: string }) {
  return (
    <>
      <nav className="hidden lg:flex lg:justify-center lg:items-center w-fit">
        <ul className="text-base leading-7 lg:flex lg:justify-center lg:items-center lg:gap-x-10 xl:gap-x-16">
          {(pathname === "/" || pathname === "/about-us") && (
            <>
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === ("/" as string)
                      ? "text-secondary-500 font-bold"
                      : "text-neutral-500 font-normal"
                  }`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/bimbel"
                  className={`${
                    pathname === ("/bimbel" as string)
                      ? "text-secondary-500 font-bold"
                      : "text-neutral-500 font-normal"
                  }`}
                >
                  Bimbel Emteka
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`${
                    pathname === ("/about-us" as string)
                      ? "text-secondary-500 font-bold"
                      : "text-neutral-500 font-normal"
                  }`}
                >
                  Tentang Kami
                </Link>
              </li>
            </>
          )}

          {pathname === "/bimbel" && (
            <>
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === ("/" as string)
                      ? "text-secondary-500 font-bold"
                      : "text-neutral-500 font-normal"
                  }`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`${
                    pathname === ("/about-us" as string)
                      ? "text-secondary-500 font-bold"
                      : "text-neutral-500 font-normal"
                  }`}
                >
                  Profil Emteka
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      {pathname !== "/bimbel" && (
        <ul className="hidden lg:flex gap-x-2.5 items-center justify-center">
          <li>
            <div className="flex items-center gap-x-6">
              <Link
                href=""
                target="_blank"
                className="border border-neutral-250 py-3 rounded-full lg:block lg:px-8 font-nunito font-bold text-base"
              >
                Masuk Platform
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <Link
                href=""
                target="_blank"
                className="bg-warning-300 border border-warning-400 btn-yellow lg:block lg:px-8 font-nunito font-bold text-base"
              >
                Konsultasi
              </Link>
            </div>
          </li>
        </ul>
      )}

      {pathname === "/bimbel" && (
        <div className="flex items-center gap-x-6">
          <Link
            href="https://wa.me/6282211000129"
            target="_blank"
            className="btn-yellow lg:block lg:px-8 font-nunito font-bold"
          >
            Daftar Sekarang
          </Link>
        </div>
      )}
    </>
  );
}

function MobileNavbar({
  isMounted,
  pathname,
  openMenu,
}: {
  isMounted: boolean;
  pathname: string;
  openMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav
      className={`
      bg-[#FAFAFA] old-lg:hidden w-full fixed backdrop-blur-lg px-6 flex flex-col duration-500 gap-y-8 top-14
      ${
        // isMounted ? "animate-scaleIn" : "animate-scaleOut"
        isMounted === true
          ? "h-[330px] overflow-auto ease-in"
          : "h-0 overflow-hidden ease-out"
      }`}
    >
      <ul className="flex flex-col gap-y-8 mt-8">
        {(pathname === "/" || pathname === "/about-us") && (
          <>
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "text-secondary-500 font-bold"
                    : "text-neutral-500 font-normal"
                } text-lg`}
                onClick={() => openMenu(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/bimbel"
                className={`${
                  pathname === ("/bimbel" as string)
                    ? "text-secondary-500 font-bold"
                    : "text-neutral-500 font-normal"
                } text-lg`}
                onClick={() => openMenu(false)}
              >
                Bimbel Emteka
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`${
                  pathname === ("/about-us" as string)
                    ? "text-secondary-500 font-bold"
                    : "text-neutral-500 font-normal"
                } text-lg`}
                onClick={() => openMenu(false)}
              >
                Tentang Kami
              </Link>
            </li>
          </>
        )}

        {pathname === "/bimbel" && (
          <>
            <li>
              <Link
                href="/"
                className={`${
                  pathname === ("/" as string)
                    ? "text-secondary-500 font-bold"
                    : "text-neutral-500 font-normal"
                } text-lg`}
                onClick={() => openMenu(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={`${
                  pathname === ("/about-us" as string)
                    ? "text-secondary-500 font-bold"
                    : "text-neutral-500 font-normal"
                } text-lg`}
                onClick={() => openMenu(false)}
              >
                Profil Emteka
              </Link>
            </li>
          </>
        )}
      </ul>

      <ul className="flex flex-col gap-y-2.5">
        <li>
          <Link
            href=""
            className="w-full border block text-center py-2.5 rounded-full font-bold border-neutral-300"
          >
            Masuk Platforms
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="w-full border block text-center py-2.5 rounded-full font-bold border-warning-400 bg-warning-300"
          >
            Konsultasi
          </Link>
        </li>
      </ul>
    </nav>
  );
}
