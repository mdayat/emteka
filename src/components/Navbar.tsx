import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { Emteka } from "./icons/Emteka";
import { Menu } from "./icons/Menu";
import { useDelayedUnmount } from "@hooks/useDelayedUnmount";
import { useClickOutside } from "@hooks/useClickOutside";

export function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const { isMounted, setIsMounted, animationOnUnmount } = useDelayedUnmount();
  const { pathname } = useRouter();

  const buttonRef = useClickOutside<HTMLButtonElement>(() =>
    animationOnUnmount(() => setIsOpened(false), 250)
  );

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
      <div className="fixed top-0 left-0 right-0 z-20">
        <div className="bg-[#4075FFBF] backdrop-blur-md">
          <div className="flex justify-between items-center py-4 mx-8 lg:mx-16 xl:max-w-[1480px] xl:mx-auto xl:px-20">
            <strong className="text-neutral-0 font-semibold flex justify-between items-center gap-x-1 lg:text-xl">
              <Emteka className="w-6 h-6 lg:w-8 lg:h-8" />
              Emteka
            </strong>

            <button
              ref={buttonRef}
              onClick={openMenu}
              type="button"
              aria-label="Navigation Menu"
              className="lg:hidden"
            >
              <Menu className="fill-neutral-0  w-7 h-7" />
            </button>

            <DesktopNavbar pathname={pathname} />
          </div>
        </div>

        {isOpened ? (
          <MobileNavbar isMounted={isMounted} pathname={pathname} />
        ) : (
          <></>
        )}
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
        <a href="#" className="lg:block font-karla font-lg text-neutral-0">
          Masuk
        </a>

        <a
          href="https://app.emteka.id"
          className="btn-yellow lg:block lg:px-8 font-karla font-semibold"
        >
          Coba Sekarang
        </a>
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
    <nav>
      <ul
        className={`${
          isMounted ? "animate-scaleIn" : "animate-scaleOut"
        } bg-neutral-0 flex flex-col lg:hidden`}
      >
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "font-bold" : ""
            } text-neutral-900 font-medium inline-block text-sm pt-4 pb-2 px-6`}
          >
            Beranda
          </Link>
        </li>

        <li>
          <Link
            href="/about-us"
            className={`${
              pathname === "/about-us" ? "font-bold" : ""
            } text-neutral-900 font-medium inline-block text-sm py-2 px-6`}
          >
            Tentang Kami
          </Link>
        </li>

        <li>
          <Link
            href="/roadmap"
            scroll={false}
            className="text-neutral-900 font-medium inline-block text-sm pt-2 pb-4 px-6"
          >
            Roadmap
          </Link>
        </li>
      </ul>
    </nav>
  );
}
