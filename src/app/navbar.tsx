"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { useDelayedUnmount } from "@hooks/useDelayedUnmount";
import { useClickOutside } from "@hooks/useClickOutside";

import { EmtekaIcon } from "./(icons)/emteka";
import { MenuIcon } from "./(icons)/menu";

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
    <nav className="fixed top-0 left-0 right-0 z-10">
      <div
        className={`${
          pathname === "/" ? "bg-secondary-500" : "bg-neutral-0"
        } flex justify-between items-center py-4 px-6 desktop:py-6 desktop:px-20`}
      >
        <h2
          className={`${
            pathname === "/" ? "text-neutral-0" : "text-neutral-900"
          } font-medium flex justify-between items-center gap-x-1 desktop:text-xl`}
        >
          <EmtekaIcon className="w-6 h-6 desktop:w-8 desktop:h-8" />
          Emteka
        </h2>

        <button
          ref={buttonRef}
          onClick={openMenu}
          type="button"
          aria-label="Navigation Menu"
          className="desktop:hidden"
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
    </nav>
  );
}

function DesktopNavbar({ pathname }: { pathname: string }) {
  return (
    <>
      <ul className="hidden desktop:flex desktop:justify-between desktop:items-center desktop:gap-x-6 mediumDesktop:gap-x-8">
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

      <button
        aria-disabled
        disabled
        type="button"
        className="bg-primary-300 cursor-not-allowed hidden py-2.5 px-14 rounded-[30px] desktop:block desktop:py-3 desktop:px-16"
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
    <ul
      className={`${
        isMounted ? "animate-scaleIn" : "animate-scaleOut"
      } bg-neutral-0 flex flex-col desktop:hidden`}
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
  );
}
