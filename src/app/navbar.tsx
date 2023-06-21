"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { useDelayedUnmount } from "@hooks/useDelayedUnmount";
import { useClickOutside } from "@hooks/useClickOutside";

import { EmtekaIcon } from "./(icons)/Emteka";
import { MenuIcon } from "./(icons)/Menu";

export function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const { isMounted, setIsMounted, animationOnUnmount } = useDelayedUnmount();
  const pathname = usePathname();

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
        <div
          className={`${
            pathname === "/" ? "bg-secondary-500" : "bg-neutral-0"
          } flex justify-between items-center py-4 px-8 lg:px-16 xl:px-20 2xl:px-28`}
        >
          <h2
            className={`${
              pathname === "/" ? "text-neutral-0" : "text-neutral-900"
            } font-semibold flex justify-between items-center gap-x-1 lg:text-xl`}
          >
            <EmtekaIcon className="w-6 h-6 lg:w-8 lg:h-8" />
            Emteka
          </h2>

          <button
            ref={buttonRef}
            onClick={openMenu}
            type="button"
            aria-label="Navigation Menu"
            className="lg:hidden"
          >
            <MenuIcon
              className={`${
                pathname === "/" ? "fill-neutral-0" : "fill-neutral-900"
              } w-7 h-7`}
            />
          </button>

          <DesktopNavbar pathname={pathname} />
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
                  ? "text-neutral-0 font-semibold"
                  : "text-neutral-900"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/tentang-kami"
              className={`${
                pathname === "/tentang-kami"
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-0"
              }`}
            >
              Tentang Kami
            </Link>
          </li>

          <li>
            <Link
              href="/#waiting-list"
              className={`${
                pathname === "/" ? "text-neutral-0" : "text-neutral-900"
              }`}
            >
              Waiting List
            </Link>
          </li>
        </ul>
      </nav>

      <button
        aria-disabled
        disabled
        type="button"
        className="bg-primary-300 hidden cursor-not-allowed py-2.5 px-14 rounded-[30px] lg:block lg:py-3 lg:px-16"
      >
        Join us
      </button>
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
              pathname === "/" ? "font-semibold" : ""
            } text-neutral-900 font-medium inline-block text-sm pt-4 pb-2 px-6`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/tentang-kami"
            className={`${
              pathname === "/tentang-kami" ? "font-semibold" : ""
            } text-neutral-900 font-medium inline-block text-sm py-2 px-6`}
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            href="/#waiting-list"
            className="text-neutral-900 font-medium inline-block text-sm pt-2 pb-4 px-6"
          >
            Waiting List
          </Link>
        </li>
      </ul>
    </nav>
  );
}
