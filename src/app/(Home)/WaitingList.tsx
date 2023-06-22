"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";

import { type WaitingListData } from "src/types/waitingList";

import { Success } from "../(icons)/succes";

export function WaitingList() {
  const [waitingListData, setWaitingListData] = useState<WaitingListData>({
    nama: "",
    email: "",
    profesi: "",
    institusi: "",
  });
  const [openModal, setOpenModal] = useState(false);

  function mutateInput(event: ChangeEvent<HTMLInputElement>) {
    setWaitingListData({
      ...waitingListData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(waitingListData),
    });
    setOpenModal(true);
    setWaitingListData({
      nama: "",
      email: "",
      profesi: "",
      institusi: "",
    });
  };
  return (
    <div id="waiting-list" className="pt-14 mb-14 lg:mb-0">
      <div
        className={
          openModal
            ? "w-screen h-screen bg-neutral-900 bg-opacity-30 fixed top-0 right-0 flex justify-center items-center"
            : "hidden"
        }
      >
        <div className="bg-neutral-0 p-10 rounded-md shadow-md">
          <div className="mx-auto w-fit">
            <Success />
          </div>
          <h1 className="font-bold text-center text-lg my-5">Selamat!</h1>
          <p className="text-center">Anda telah masuk Waiting List Emteka.</p>
          <div className="flex justify-between mt-5">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="mx-auto w-fit bg-secondary-300 hover:bg-secondary-500 active:bg-secondary-300 rounded-lg py-3 px-5 text-neutral-0"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
      <div className="bg-neutral-0 rounded-lg mx-8 py-6 px-4 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] lg:order-1 lg:mx-0 xl:px-6">
        <article className="mb-6">
          <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-4 desktop:text-4xl desktop:mb-6">
            Waiting List
          </h2>

          <p className="text-neutral-800 text-center text-sm lg:text-base">
            Tertarik dengan Emteka? Isi Form di bawah ini dan jangan lewatkan
            kesempatan untuk menjadi salah satu yang pertama merasakan aplikasi
            asesmen Matematika terbaru ini!
          </p>
        </article>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="nama"
            className="red-asterisk font-medium text-sm lg:text-base"
          >
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
            className="waiting-list-input mt-2 mb-4"
          />

          <label
            htmlFor="email"
            className="red-asterisk font-medium text-sm lg:text-base"
          >
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
            className="waiting-list-input mt-2 mb-4"
          />

          <label
            htmlFor="profesi"
            className="red-asterisk font-medium text-sm lg:text-base"
          >
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
            className="waiting-list-input mt-2 mb-4"
          />

          <label
            htmlFor="institusi"
            className="red-asterisk font-medium text-sm lg:text-base"
          >
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
            className="waiting-list-input mt-2 mb-6"
          />

          <button type="submit" className="btn-primary mx-auto px-8 lg:w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
