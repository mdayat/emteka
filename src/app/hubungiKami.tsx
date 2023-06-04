import Link from "next/link";

import { Email } from "@components/icons/email";

export function HubungiKami() {
  return (
    <section id="hubungi-kami" className="bg-secondary-50 mt-9 py-10 px-6">
      <form
        action="mailto:muhnurdayexp@gmail.com"
        method="post"
        encType="text/plain"
        className="bg-neutral-0 shadow-[0_24px_34px_-20px_rgba(185,206,234,0.25)] rounded-lg py-10 px-5 mb-8"
      >
        <article className="text-center mb-8">
          <h2 className="text-neutral-900 font-semibold text-2xl mb-4">
            Hubungi Kami
          </h2>

          <p className="text-neutral-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
            tristique senectus dui pharetra sit.
          </p>
        </article>

        <label htmlFor="nama" className="red-asterisk">
          Nama
        </label>

        <input
          required
          type="text"
          id="nama"
          name="nama"
          placeholder="Masukkan nama Anda"
          className="placeholder:text-[#AAAAAA] placeholder:font-medium bg-[#F9FAFF] border-[#DEE6FF] border block rounded-md w-full p-4 mt-2.5 mb-5"
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
          className="placeholder:text-[#AAAAAA] placeholder:font-medium bg-[#F9FAFF] border-[#DEE6FF] border block rounded-md w-full p-4 mt-2.5 mb-5"
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
          className="placeholder:text-[#AAAAAA] placeholder:font-medium bg-[#F9FAFF] border-[#DEE6FF] border block rounded-md w-full p-4 mt-2.5 mb-5"
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
          className="placeholder:text-[#AAAAAA] placeholder:font-medium bg-[#F9FAFF] border-[#DEE6FF] border block rounded-md w-full p-4 mt-2.5 mb-5"
        />

        <label htmlFor="pesan" className="red-asterisk">
          Pesan
        </label>

        <textarea
          required
          rows={3}
          id="pesan"
          name="pesan"
          placeholder="Masukkan pesan Anda"
          className="placeholder:text-[#AAAAAA] placeholder:font-medium bg-[#F9FAFF] border-[#DEE6FF] border block rounded-md w-full p-4 mt-2.5 mb-6 resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-secondary-300 text-neutral-0 font-medium block w-fit mx-auto py-2 px-10 rounded-lg"
        >
          Submit
        </button>
      </form>

      <ul className="flex flex-col gap-y-4">
        <li>
          <Link
            href="https://www.linkedin.com/company/emteka-id/"
            target="_blank"
            className="bg-secondary-300 text-neutral-0 flex items-center gap-x-4 rounded-lg py-4 pl-6"
          >
            <Email fill="#fff" />
            @emteka
          </Link>
        </li>

        <li>
          <Link
            href="mailto:emteka@gmail.com"
            target="_blank"
            className="bg-secondary-300 text-neutral-0 flex items-center gap-x-4 rounded-lg py-4 pl-6"
          >
            <Email fill="#fff" />
            emteka@gmail.com
          </Link>
        </li>

        <li>
          <Link
            href="https://www.instagram.com/emteka_frh/"
            target="_blank"
            className="bg-secondary-300 text-neutral-0 flex items-center gap-x-4 rounded-lg py-4 pl-6"
          >
            <Email fill="#fff" />
            @emteka.id
          </Link>
        </li>
      </ul>
    </section>
  );
}
