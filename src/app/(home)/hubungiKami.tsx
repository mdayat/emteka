import Link from "next/link";

import { Email } from "@components/icons/email";
import { Instagram } from "@components/icons/instagram";
import { LinkedIn } from "@components/icons/linkedIn";

export function HubungiKami() {
  return (
    <section
      id="hubungi-kami"
      className="bg-secondary-50 mt-9 py-10 px-6 desktop:mt-20 desktop:py-20 desktop:px-20"
    >
      <form
        action="mailto:ravaneloe@gmail.com"
        method="post"
        encType="text/plain"
        className="bg-neutral-0 shadow-[0_24px_34px_-20px_rgba(185,206,234,0.25)] rounded-lg py-10 px-5 mb-8 desktop:px-28 desktop:mb-14 mediumDesktop::px-56"
      >
        <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-4 desktop:text-4xl desktop:mb-6">
          Waiting List
        </h2>

        <label htmlFor="nama" className="red-asterisk">
          Nama
        </label>

        <input
          required
          type="text"
          id="nama"
          name="nama"
          placeholder="Masukkan nama Anda"
          className="bg-[#F9FAFF] border-[#DEE6FF] placeholder:text-[#AAAAAA] placeholder:font-medium placeholder:text-sm border block rounded-md w-full p-4 mt-2.5 mb-5"
        />

        <label htmlFor="email" className="red-asterisk">
          Email
        </label>

        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Masukkan email Anda"
          className="bg-[#F9FAFF] border-[#DEE6FF] placeholder:text-[#AAAAAA] placeholder:font-medium placeholder:text-sm border block rounded-md w-full p-4 mt-2.5 mb-5"
        />

        <label htmlFor="profesi" className="red-asterisk">
          Profesi
        </label>

        <input
          required
          type="text"
          id="profesi"
          name="profesi"
          placeholder="Masukkan profesi Anda"
          className="bg-[#F9FAFF] border-[#DEE6FF] placeholder:text-[#AAAAAA] placeholder:font-medium placeholder:text-sm border block rounded-md w-full p-4 mt-2.5 mb-5"
        />

        <label htmlFor="institusi" className="red-asterisk">
          Institusi
        </label>

        <input
          required
          type="institusi"
          id="institusi"
          name="institusi"
          placeholder="Masukkan institusi Anda"
          className="bg-[#F9FAFF] border-[#DEE6FF] placeholder:text-[#AAAAAA] placeholder:font-medium placeholder:text-sm border block rounded-md w-full p-4 mt-2.5 mb-5 desktop:mb-12"
        />

        <button
          type="submit"
          className="bg-secondary-500 text-neutral-0 font-medium block w-fit mx-auto py-2 px-10 rounded-[30px] desktop:px-36 desktop:py-3"
        >
          Submit
        </button>
      </form>

      <ul className="grid gap-y-4 desktop:grid-cols-3 desktop:gap-y-0 desktop:gap-x-6">
        <li>
          <Link
            href="https://www.linkedin.com/company/emteka-id/"
            target="_blank"
            className="bg-secondary-500 text-neutral-0 flex items-center gap-x-4 rounded-lg py-4 pl-6 desktop:h-[231px] desktop:flex-col desktop:justify-center desktop:gap-x-0 desktop:gap-y-4 desktop:py-0 desktop:pl-0"
          >
            <LinkedIn fill="#fff" className="desktop:w-10 desktop:h-10" />
            @emteka
          </Link>
        </li>

        <li className="desktop:">
          <Link
            href="mailto:emteka@gmail.com"
            target="_blank"
            className="bg-secondary-500 text-neutral-0 flex items-center gap-x-4 rounded-lg py-4 pl-6 desktop:h-[231px] desktop:flex-col desktop:justify-center desktop:gap-x-0 desktop:gap-y-4 desktop:py-0 desktop:pl-0"
          >
            <Email fill="#fff" className="desktop:w-10 desktop:h-10" />
            emteka@gmail.com
          </Link>
        </li>

        <li className="desktop:">
          <Link
            href="https://www.instagram.com/emteka_frh/"
            target="_blank"
            className="bg-secondary-500 text-neutral-0 flex items-center gap-x-4 rounded-lg py-4 pl-6 desktop:h-[231px] desktop:flex-col desktop:justify-center desktop:gap-x-0 desktop:gap-y-4 desktop:py-0 desktop:pl-0"
          >
            <Instagram fill="#fff" className="desktop:w-10 desktop:h-10" />
            @emteka.id
          </Link>
        </li>
      </ul>
    </section>
  );
}
