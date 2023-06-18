"use client";

import Link from "next/link";
import { useState } from "react";
import type { MouseEvent } from "react";

import { ArrowDownIcon } from "../(icons)/ArrowDown";
import { useClickOutside } from "@hooks/useClickOutside";
import { useDelayedUnmount } from "@hooks/useDelayedUnmount";

type FAQAccordion = "unopened" | "first" | "second" | "third";

export function FAQ() {
  const { isMounted, setIsMounted, animationOnUnmount } = useDelayedUnmount();
  const [openedAccordion, setOpenedAccordion] =
    useState<FAQAccordion>("unopened");

  const divRef = useClickOutside<HTMLDivElement>(() => {
    animationOnUnmount(() => setOpenedAccordion("unopened"), 250);
  });

  function openAccordion(event: MouseEvent<HTMLButtonElement>) {
    const elementId = event.currentTarget.id as FAQAccordion;

    if (openedAccordion === elementId) {
      animationOnUnmount(() => setOpenedAccordion("unopened"), 250);
      return;
    }

    if (isMounted === false) {
      setIsMounted(true);
    }

    setOpenedAccordion(elementId);
  }

  return (
    <div className="mt-14 mx-8 lg:w-[868px] lg:mx-auto">
      <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-4 lg:text-[32px] lg:mb-6">
        FAQ
      </h2>

      <div ref={divRef}>
        <button
          id={"first" as FAQAccordion}
          type="button"
          className={`${
            openedAccordion === "first"
              ? ""
              : "pb-4 border-b border-b-neutral-900 lg:pb-5"
          } text-neutral-900 font-medium text-left flex justify-between text-sm w-full lg:text-base`}
          onClick={openAccordion}
        >
          Siapa yang dapat menggunakan Emteka?
          <ArrowDownIcon
            className={`${
              openedAccordion === "first" ? "-rotate-180 ease-in" : "ease-out"
            } fill-neutral-900 flex-shrink-0 w-6 h-6 transition duration-250`}
          />
        </button>

        {openedAccordion === "first" ? (
          <p
            className={`${
              isMounted ? "animate-fadeIn" : "animate-fadeOut"
            } text-neutral-300 text-xs border-b border-b-neutral-900 pb-4 mt-2 lg:text-sm lg:pb-5 lg:mt-3`}
          >
            Emteka diperuntukkan bagi siswa tingkat SMP dan SMA yang ingin
            meningkatkan kemampuan Matematika dan/atau untuk mempersiapkan
            ujian, serta pengajar dalam memonitor dan mengevaluasi kemampuan
            Matematika siswa, melalui sistem prioritasi yang didapatkan dari
            serangkaian proses asesmen.
          </p>
        ) : (
          <></>
        )}

        <button
          id={"second" as FAQAccordion}
          type="button"
          className={`${
            openedAccordion === "second"
              ? ""
              : "pb-4 border-b border-b-neutral-900 lg:pb-5"
          } text-neutral-900 font-medium text-left flex justify-between text-sm w-full pt-4 lg:text-base lg:pt-5`}
          onClick={openAccordion}
        >
          Apa yang dimaksud dengan pengalaman pembelajaran yang adaptif?
          <ArrowDownIcon
            className={`${
              openedAccordion === "second" ? "-rotate-180 ease-in" : "ease-out"
            } fill-neutral-900 flex-shrink-0 w-6 h-6 transition duration-250`}
          />
        </button>

        {openedAccordion === "second" ? (
          <p
            className={`${
              isMounted ? "animate-fadeIn" : "animate-fadeOut"
            } text-neutral-300 text-xs border-b border-b-neutral-900 pb-4 mt-2 lg:text-sm lg:pb-5 lg:mt-3`}
          >
            Pengalaman pembelajaran yang adaptif berarti, bahwa Emteka secara
            cerdas menyesuaikan konten dan tantangan dari asesmen berdasarkan
            tingkat kemampuan pengguna. Metode penyesuaian ini mampu membantu
            pengguna melakukan asesmen secara lebih lebih efektif.
          </p>
        ) : (
          <></>
        )}

        <button
          id={"third" as FAQAccordion}
          type="button"
          className={`${
            openedAccordion === "third"
              ? ""
              : "pb-4 border-b border-b-neutral-900 lg:pb-5"
          } text-neutral-900 font-medium text-left flex justify-between text-sm w-full pt-4 lg:text-base lg:pt-5`}
          onClick={openAccordion}
        >
          Bagaimana cara menghubungi support team Emteka?
          <ArrowDownIcon
            className={`${
              openedAccordion === "third" ? "-rotate-180 ease-in" : "ease-out"
            } fill-neutral-900 flex-shrink-0 w-6 h-6 transition duration-250`}
          />
        </button>

        {openedAccordion === "third" ? (
          <p
            className={`${
              isMounted ? "animate-fadeIn" : "animate-fadeOut"
            } text-neutral-300 text-xs border-b border-b-neutral-900 pb-4 mt-2 lg:text-sm lg:pb-5 lg:mt-3`}
          >
            Anda dapat menghubungi tim kami melalui media sosial Emteka&nbsp;
            <Link
              href="/#waiting-list"
              className="text-secondary-500 font-medium underline"
            >
              di bawah ini&nbsp;
            </Link>
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
