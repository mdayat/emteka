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
      ? animationOnUnmount(() => setIsOpened(false), 250)
      : setIsOpened(true);
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-30 w-full duration-200">
        <div className="bg-[#3f75ff] backdrop-blur-[20px] font-nunito">
          <div className="flex justify-between items-center py-4 mx-5 lg:mx-16 xl:max-w-[1480px] xl:mx-auto xl:px-20">
            <strong className="text-neutral-0 font-extrabold flex flex-shrink-0 justify-between items-center gap-x-1 text-lg">
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

        <MobileNavbar
          isMounted={isMounted}
          openMenu={openMenu}
          pathname={pathname}
        />
      </div>
    </>
  );
}

function DesktopNavbar({ pathname }: { pathname: string }) {
  return (
    <>
      <nav className="hidden lg:flex lg:justify-center lg:items-center w-fit">
        <ul className="text-xl leading-7 lg:flex lg:justify-center lg:items-center lg:gap-x-6 xl:gap-x-8">
          {(pathname === "/" || pathname === "/about-us") && (
            <>
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === ("/" as string)
                      ? "text-neutral-0 font-bold"
                      : "text-neutral-200"
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
                      ? "text-neutral-0 font-bold"
                      : "text-neutral-200"
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
                      ? "text-neutral-0 font-bold"
                      : "text-neutral-200"
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
                    pathname === ("/about-us" as string)
                      ? "text-neutral-0 font-bold"
                      : "text-neutral-200"
                  }`}
                >
                  Profil Emteka
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

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
      bg-[#4075FFBF]/70 lg:hidden w-full h-[100vh] fixed backdrop-blur-lg pt-6 px-6 flex flex-col duration-500
      ${
        // isMounted ? "animate-scaleIn" : "animate-scaleOut"
        isMounted === true
          ? "left-0 ease-in opacity-100"
          : "left-full ease-out opacity-0"
      }`}
    >
      <ul className="flex flex-col text-xl">
        {(pathname === "/" || pathname === "/about-us") && (
          <>
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "font-bold" : "font-medium"
                } text-neutral-0 text-base pt-4`}
                onClick={() => openMenu(false)}
              >
                Beranda
              </Link>

              <hr className="w-full h-[1px] border-neutral-200 my-6" />
            </li>

            <li>
              <Link
                href="/bimbel"
                className={`${
                  pathname === ("/bimbel" as string)
                    ? "font-bold"
                    : "font-medium"
                } text-neutral-0 text-base`}
                onClick={() => openMenu(false)}
              >
                Bimbel Emteka
              </Link>

              <hr className="w-full h-[1px] border-neutral-200 my-6" />
            </li>
            <li>
              <Link
                href="/about-us"
                className={`${
                  pathname === ("/about-us" as string)
                    ? "font-bold"
                    : "font-medium"
                } text-neutral-0 text-base`}
                onClick={() => openMenu(false)}
              >
                Tentang Kami
              </Link>

              <hr className="w-full h-[1px] border-neutral-200 my-6" />
            </li>
          </>
        )}

        {pathname === "/bimbel" && (
          <>
            <li>
              <Link
                href="/"
                className={`${
                  pathname === ("/" as string) ? "font-bold" : "font-medium"
                } text-neutral-0 text-base`}
                onClick={() => openMenu(false)}
              >
                Beranda
              </Link>
              <hr className="w-full h-[1px] border-neutral-200 my-6" />
            </li>
            <li>
              <Link
                href="/about-us"
                className={`${
                  pathname === ("/about-us" as string)
                    ? "font-bold"
                    : "font-medium"
                } text-neutral-0 text-base`}
                onClick={() => openMenu(false)}
              >
                Profil Emteka
              </Link>
              <hr className="w-full h-[1px] border-neutral-200 my-6" />
            </li>
          </>
        )}
      </ul>

      <div className="flex items-center gap-y-4 flex-col-reverse absolute bottom-28 inset-x-0 justify-center">
        <Link
          href="https://wa.me/6282211000129"
          className="btn-yellow px-8 font-nunito font-semibold text-base"
        >
          Daftar Sekarang
        </Link>
      </div>
    </nav>
  );
}
