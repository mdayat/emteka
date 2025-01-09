import { useState, type FormEvent, type ChangeEvent } from "react";

import type { MailingListData } from "@customTypes/mailingList";

export function MailingList() {
  const [mailingList, setMailingList] = useState<MailingListData>({
    nama: "",
    email: "", // whatsapp
    institusi: "", // kelas
    profesi: "", // Preferensi
  });

  function mutateInput(event: ChangeEvent<HTMLInputElement>) {
    setMailingList({
      ...mailingList,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formattedData = {
      ...mailingList,
      nama: `Bimbel-${mailingList.nama}`,
    };

    await fetch("/api/mailing-list", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });
    setMailingList({
      nama: "",
      email: "",
      institusi: "",
      profesi: "",
    });
  };

  return (
    <div id="mailing-list" className="pt-[69px] pb-24">
      <div className="px-[14px] old-lg:mx-8 old-lg:py-6 old-lg:px-4 justify-center">
        <article className="mb-6 gap-4">
          <h2 className="text-neutral-900 font-bold text-center text-4xl mb-4">
            Tertarik Belajar di Bimbel Emteka?
          </h2>

          <p className="text-neutral-800 text-center text-lg old-lg:text-sm">
            Isi formulir berikut, dan kami akan segera menghubungi Anda.
          </p>
        </article>

        <form
          onSubmit={handleSubmit}
          className="w-full old-lg:w-[548px] mx-auto"
        >
          <input
            required
            value={mailingList.nama}
            onChange={mutateInput}
            type="text"
            id="nama"
            name="nama"
            placeholder="Nama Lengkap"
            className="mailing-list-bimbel mt-2 mb-4"
          />

          <input
            required
            value={mailingList.email}
            onChange={mutateInput}
            type="text"
            id="email"
            name="email"
            placeholder="Nomor WhatsApp"
            className="mailing-list-bimbel mt-2 mb-4"
          />

          <input
            required
            value={mailingList.institusi}
            onChange={mutateInput}
            type="text"
            id="institusi"
            name="institusi"
            placeholder="Kelas/Tingkat Pendidikan"
            className="mailing-list-bimbel mt-2 mb-4"
          />

          <input
            required
            value={mailingList.profesi}
            onChange={mutateInput}
            type="preferensi"
            id="profesi"
            name="profesi"
            placeholder="Tujuan/Preferensi Belajar"
            className="mailing-list-bimbel mt-2 mb-6"
          />

          <button
            type="submit"
            className="btn-yellow mx-auto px-8 w-fit font-bold"
          >
            Hubungi Saya Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}
