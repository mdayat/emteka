import { useState, type FormEvent, type ChangeEvent } from "react";

import MailingListSuccess from "@images/bimbel/mailinglist-success.png";
import MailingListConnectionLost from "@images/bimbel/mailinglist-connectionlost.png";
import MailingListServerError from "@images/bimbel/mailinglist-server.png";

import type { MailingListData } from "@customTypes/mailingList";
import Image from "next/image";
import { Close } from "@components/icons/Close";

export function MailingList() {
  const [mailingList, setMailingList] = useState<MailingListData>({
    nama: "",
    email: "", // whatsapp
    institusi: "", // kelas
    profesi: "", // Preferensi
  });
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorType, setErrorType] = useState<
    "connection" | "validation" | "server" | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function mutateInput(event: ChangeEvent<HTMLInputElement>) {
    setMailingList({
      ...mailingList,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formattedData = {
      ...mailingList,
      nama: `Bimbel-${mailingList.nama}`,
    };

    try {
      const response = await fetch("/api/mailing-list", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        if (response.status === 503) {
          setErrorType("connection");
        } else {
          setErrorType("server");
        }
        setOpenErrorModal(true);
        return;
      }

      setOpenSuccessModal(true);
      setMailingList({
        nama: "",
        email: "",
        institusi: "",
        profesi: "",
      });
    } catch (error) {
      setErrorType("server");
      setOpenErrorModal(true);
      setMailingList({
        nama: "",
        email: "",
        institusi: "",
        profesi: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="mailing-list" className="pt-[69px] pb-24">
      {/* Success Modal */}
      <div
        className={
          openSuccessModal
            ? "w-screen h-screen bg-neutral-900 bg-opacity-30 fixed top-0 right-0 flex justify-center items-center transition-transform"
            : "hidden"
        }
      >
        <div className="relative flex flex-col bg-neutral-0 rounded-3xl shadow-xl gap-4 px-10 py-8 w-[528px]">
          <button
            onClick={() => setOpenSuccessModal(!openSuccessModal)}
            className="p-2 absolute top-4 right-4"
          >
            <Close className="w-6 h-6 fill-[#12192C]" />
          </button>
          <div className="mx-auto w-fit">
            <Image
              src={MailingListSuccess}
              alt={""}
              width={0}
              height={0}
              className="w-[296px] h-40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-center text-2xl leading-loose text-[#1d222f]">
              Terima kasih telah mengisi formulir.
            </h1>
            <p className="text-center text-xl leading-7 text-[#4d5465]">
              Tim Emteka akan segera menghubungi Kamu. <br /> Tetap pantau
              WhatsApp Kamu!.
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setOpenSuccessModal(!openSuccessModal)}
              className="px-8 py-2.5 bg-primary-400 rounded-full text-sm font-bold block mx-auto"
            >
              Kembali lihat lihat bimbel
            </button>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      <div
        className={
          openErrorModal
            ? "w-screen h-screen bg-neutral-900 bg-opacity-30 fixed top-0 right-0 flex justify-center items-center transition-transform"
            : "hidden"
        }
      >
        <div className="relative flex flex-col bg-neutral-0 rounded-3xl shadow-xl gap-4 px-10 py-8 w-[528px]">
          <button
            onClick={() => setOpenErrorModal(!openErrorModal)}
            className="p-2 absolute top-4 right-4"
          >
            <Close className="w-6 h-6 fill-[#12192C]" />
          </button>
          <div className="mx-auto w-fit">
            {errorType === "connection" && (
              <Image
                src={MailingListConnectionLost}
                alt={""}
                width={0}
                height={0}
                className="w-[296px] h-40"
              />
            )}
            {errorType === "server" && (
              <Image
                src={MailingListServerError}
                alt={""}
                width={0}
                height={0}
                className="w-[296px] h-40"
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-center text-2xl text-[#1d222f]">
              {errorType === "connection" && (
                <>
                  Koneksi terputus.
                  <br />
                  Periksa jaringan Anda dan coba lagi.
                </>
              )}
              {errorType === "server" && (
                <>
                  Ada masalah teknis. <br /> Coba lagi beberapa saat lagi.
                </>
              )}
            </h1>
            <p className="text-center text-xl leading-7 text-[#4d5465]">
              {errorType === "connection" && (
                <>
                  Formulir tidak terkirim. <br /> Pastikan Kamu terhubung ke
                  internet.
                </>
              )}
              {errorType === "server" && (
                <>
                  Sistem sedang mengalami gangguan. <br /> Kami mohon maaf
                  atasketidaknyamanannya.
                </>
              )}
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setOpenErrorModal(!openErrorModal)}
              className="px-8 py-2.5 bg-primary-400 rounded-full text-sm font-bold block mx-auto"
            >
              Kembali lihat lihat bimbel
            </button>
          </div>
        </div>
      </div>

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
            disabled={isSubmitting}
            className={`btn-yellow mx-auto px-8 w-fit font-bold ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Mengirim..." : "Hubungi Saya Sekarang"}
          </button>
        </form>
      </div>
    </div>
  );
}
