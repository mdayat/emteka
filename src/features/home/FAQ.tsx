import Link from "next/link";
import { useState, type MouseEvent } from "react";

import { ArrowDown } from "@components/icons/ArrowDown";
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
    <div className="mt-14 mx-8 old-lg:order-2 old-lg:mx-0 old-lg:pt-6">
      <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-4 old-lg:text-[32px] old-lg:mb-6">
        FAQ
      </h2>

      <div ref={divRef}>
        <button
          id={"first" as FAQAccordion}
          type="button"
          className={`${
            openedAccordion === "first"
              ? ""
              : "pb-4 border-b border-b-neutral-900 old-lg:pb-5"
          } text-neutral-900 font-medium text-left flex justify-between text-sm w-full old-lg:text-base`}
          onClick={openAccordion}
        >
          Siapa yang dapat menggunakan Emteka?
          <ArrowDown
            className={`${
              openedAccordion === "first" ? "-rotate-180 ease-in" : "ease-out"
            } fill-neutral-900 flex-shrink-0 w-6 h-6 transition duration-250`}
          />
        </button>

        {openedAccordion === "first" ? (
          <p
            className={`${
              isMounted ? "animate-fadeIn" : "animate-fadeOut"
            } text-neutral-300 text-xs border-b border-b-neutral-900 pb-4 mt-2 old-lg:text-sm old-lg:pb-5 old-lg:mt-3`}
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
              : "pb-4 border-b border-b-neutral-900 old-lg:pb-5"
          } text-neutral-900 font-medium text-left flex justify-between text-sm w-full pt-4 old-lg:text-base old-lg:pt-5`}
          onClick={openAccordion}
        >
          Apa yang dimaksud dengan pengalaman pembelajaran yang adaptif?
          <ArrowDown
            className={`${
              openedAccordion === "second" ? "-rotate-180 ease-in" : "ease-out"
            } fill-neutral-900 flex-shrink-0 w-6 h-6 transition duration-250`}
          />
        </button>

        {openedAccordion === "second" ? (
          <p
            className={`${
              isMounted ? "animate-fadeIn" : "animate-fadeOut"
            } text-neutral-300 text-xs border-b border-b-neutral-900 pb-4 mt-2 old-lg:text-sm old-lg:pb-5 old-lg:mt-3`}
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
              : "pb-4 border-b border-b-neutral-900 old-lg:pb-5"
          } text-neutral-900 font-medium text-left flex justify-between text-sm w-full pt-4 old-lg:text-base old-lg:pt-5`}
          onClick={openAccordion}
        >
          Bagaimana cara menghubungi support team Emteka?
          <ArrowDown
            className={`${
              openedAccordion === "third" ? "-rotate-180 ease-in" : "ease-out"
            } fill-neutral-900 flex-shrink-0 w-6 h-6 transition duration-250`}
          />
        </button>

        {openedAccordion === "third" ? (
          <p
            className={`${
              isMounted ? "animate-fadeIn" : "animate-fadeOut"
            } text-neutral-300 text-xs border-b border-b-neutral-900 pb-4 mt-2 old-lg:text-sm old-lg:pb-5 old-lg:mt-3`}
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
