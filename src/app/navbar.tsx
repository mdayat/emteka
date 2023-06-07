"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { useDelayedUnmount } from "@hooks/useDelayedUnmount";
import { useClickOutside } from "@hooks/useClickOutside";

import { EmtekaIcon } from "./(icons)/emteka";
import { MenuIcon } from "./(icons)/menu";

export function Navbar() {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);
  const { isMounted, setIsMounted, animationOnUnmount } = useDelayedUnmount();

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
        } flex justify-between items-center py-4 px-6`}
      >
        <h2
          className={`${
            pathname === "/" ? "text-neutral-0" : "text-neutral-900"
          } font-medium flex justify-between items-center gap-x-1`}
        >
          <EmtekaIcon className="w-6 h-6" />
          Emteka
        </h2>

        <button
          ref={buttonRef}
          type="button"
          aria-label="Navigation Menu"
          onClick={openMenu}
        >
          <MenuIcon
            className={`${
              pathname === "/" ? "fill-neutral-0" : "fill-neutral-900"
            } w-7 h-7`}
          />
        </button>
      </div>

      {isOpened ? (
        <ul
          className={`${
            isMounted ? "animate-scaleIn" : "animate-scaleOut"
          } bg-neutral-0 flex flex-col`}
        >
          <li>
            <Link
              href="/"
              className="text-neutral-900 font-medium inline-block text-sm pt-4 pb-2 px-6"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/tentang-kami"
              className="text-neutral-900 font-medium inline-block text-sm py-2 px-6"
            >
              About
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
      ) : (
        <></>
      )}
    </nav>
  );
}
