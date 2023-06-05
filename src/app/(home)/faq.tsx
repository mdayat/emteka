"use client";

import Link from "next/link";
import { useState } from "react";
import type { MouseEvent } from "react";

import { ArrowDown } from "@components/icons/arrowDown";
import { useClickOutside } from "@hooks/useClickOutside";
import { useDelayedUnmount } from "@hooks/useDelayedUnmount";

type FAQAccordion = "unopened" | "first" | "second" | "third" | "fourth";

export function FAQ() {
  const [openedAccordion, setOpenedAccordion] =
    useState<FAQAccordion>("unopened");
  const { isMounted, setIsMounted, animationOnUnmount } = useDelayedUnmount();

  const ulRef = useClickOutside<HTMLUListElement>(() => {
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
    <section className="mt-9 mx-6 desktop:mt-20 desktop:mx-20">
      <article>
        <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-4 desktop:text-4xl desktop:mb-6">
          FAQ
        </h2>

        <ul ref={ulRef} className="flex flex-col">
          <li>
            <button
              id={"first" as FAQAccordion}
              type="button"
              className={`${
                openedAccordion === "first" ? "pt-2 pb-0" : "py-2 desktop:py-4"
              } text-neutral-900 font-medium text-left w-full flex justify-between gap-x-4 px-4 desktop:text-lg`}
              onClick={openAccordion}
            >
              <span>Siapa yang dapat menggunakan Emteka?</span>

              <span>
                <ArrowDown
                  className={`${
                    openedAccordion === "first" ? "-rotate-180" : ""
                  } transition-all duration-250`}
                />
              </span>
            </button>

            {openedAccordion === "first" ? (
              <p
                className={`${
                  isMounted ? "animate-fadeIn" : "animate-fadeOut"
                } text-[#75808A] text-sm mx-4 mt-1 mb-4 desktop:text-base desktop:mt-2`}
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
          </li>

          <li>
            <button
              id={"second" as FAQAccordion}
              type="button"
              className={`${
                openedAccordion === "second" ? "pt-2 pb-0" : "py-2 desktop:py-4"
              } text-neutral-900 font-medium text-left w-full flex justify-between gap-x-4 px-4 desktop:text-lg`}
              onClick={openAccordion}
            >
              <span>
                Apa yang dimaksud dengan pengalaman pembelajaran yang adaptif?
              </span>

              <span>
                <ArrowDown
                  className={`${
                    openedAccordion === "second" ? "-rotate-180" : ""
                  } transition-all duration-250`}
                />
              </span>
            </button>

            {openedAccordion === "second" ? (
              <p
                className={`${
                  isMounted ? "animate-fadeIn" : "animate-fadeOut"
                } text-[#75808A] text-sm mx-4 mt-1 mb-4 desktop:text-base desktop:mt-2`}
              >
                Pengalaman pembelajaran yang adaptif berarti, bahwa Emteka
                secara cerdas menyesuaikan konten dan tantangan dari asesmen
                berdasarkan tingkat kemampuan pengguna. Metode penyesuaian ini
                mampu membantu pengguna melakukan asesmen secara lebih lebih
                efektif.
              </p>
            ) : (
              <></>
            )}
          </li>

          <li>
            <button
              id={"third" as FAQAccordion}
              type="button"
              className={`${
                openedAccordion === "third" ? "pt-2 pb-0" : "py-2 desktop:py-4"
              } text-neutral-900 font-medium text-left w-full flex justify-between gap-x-4 px-4 desktop:text-lg`}
              onClick={openAccordion}
            >
              <span>Bagaimana cara menghubungi support team Emteka?</span>

              <span>
                <ArrowDown
                  className={`${
                    openedAccordion === "third" ? "-rotate-180" : ""
                  } transition-all duration-250`}
                />
              </span>
            </button>

            {openedAccordion === "third" ? (
              <p
                className={`${
                  isMounted ? "animate-fadeIn" : "animate-fadeOut"
                } text-[#75808A] text-sm mx-4 mt-1 desktop:text-base desktop:mt-2`}
              >
                Anda dapat menghubungi tim kami melalui formulir&nbsp;
                <Link href="/#hubungi-kami" className="hover:underline">
                  di bawah ini&nbsp;
                </Link>
                atau media sosial Emteka
              </p>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </article>
    </section>
  );
}
