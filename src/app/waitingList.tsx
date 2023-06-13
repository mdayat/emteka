"use client";

import Link from "next/link";
import { useState } from "react";
import { FormEvent } from "react";

import { LinkedInIcon } from "./(icons)/linkedIn";
import { EmailIcon } from "./(icons)/email";
import { InstagramIcon } from "./(icons)/instagram";

export function WaitingList() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profesi, setProfesi] = useState("");
  const [institusi, setInstitusi] = useState("");

  console.log(name);
  console.log(email);
  console.log(profesi);
  console.log(institusi);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      profesi,
      institusi,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await response.json();
    alert(content.data.tableRange);
    setName("");
    setEmail("");
    setProfesi("");
    setInstitusi("");
  };
  return (
    <section
      id="waiting-list"
      className="bg-secondary-50 mt-9 py-10 px-6 desktop:mt-20 desktop:py-20 desktop:px-20"
    >
      <form
        onSubmit={handleSubmit}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={profesi}
          onChange={(e) => setProfesi(e.target.value)}
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
          value={institusi}
          onChange={(e) => setInstitusi(e.target.value)}
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
            <LinkedInIcon className="fill-neutral-0 w-6 h-6 desktop:w-10 desktop:h-10" />
            @emteka
          </Link>
        </li>

        <li className="desktop:">
          <Link
            href="mailto:emteka@gmail.com"
            target="_blank"
            className="bg-secondary-500 text-neutral-0 flex items-center gap-x-4 rounded-lg py-4 pl-6 desktop:h-[231px] desktop:flex-col desktop:justify-center desktop:gap-x-0 desktop:gap-y-4 desktop:py-0 desktop:pl-0"
          >
            <EmailIcon className="fill-neutral-0 w-6 h-6 desktop:w-10 desktop:h-10" />
            emteka@gmail.com
          </Link>
        </li>

        <li className="desktop:">
          <Link
            href="https://www.instagram.com/emteka_frh/"
            target="_blank"
            className="bg-secondary-500 text-neutral-0 flex items-center gap-x-4 rounded-lg py-4 pl-6 desktop:h-[231px] desktop:flex-col desktop:justify-center desktop:gap-x-0 desktop:gap-y-4 desktop:py-0 desktop:pl-0"
          >
            <InstagramIcon className="fill-neutral-0 w-6 h-6 desktop:w-10 desktop:h-10" />
            @emteka.id
          </Link>
        </li>
      </ul>
    </section>
  );
}
