export function HubungiKami() {
  return (
    <form action="">
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
  );
}
