"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

import { type WaitingListData } from "src/types/waitingList";

export function WaitingList() {
  const [waitingListData, setWaitingListData] = useState<WaitingListData>({
    nama: "",
    email: "",
    profesi: "",
    institusi: "",
  });

  function mutateInput(event: ChangeEvent<HTMLInputElement>) {
    setWaitingListData({
      ...waitingListData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(waitingListData),
    });

    const content = await response.json();
    alert(content.data.tableRange);
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
          value={waitingListData.nama}
          onChange={mutateInput}
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
          value={waitingListData.email}
          onChange={mutateInput}
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
          value={waitingListData.profesi}
          onChange={mutateInput}
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
          value={waitingListData.institusi}
          onChange={mutateInput}
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
    </section>
  );
}
