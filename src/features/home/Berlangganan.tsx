export function Berlangganan() {
  return (
    <article className="font-karla mt-10 xl:w-[1100px] mx-auto pb-[10rem] px-4 xl:px-0">
      <h2 className="text-[30px] xl:text-[40px] font-semibold text-neutral-0 text-center mb-10">
        Jadilah orang pertama yang tahu
      </h2>

      <p className="text-center text-xl w-[80%] mx-auto font-karla">
        Kami akan memberi tahu Anda tentang aplikasi dan penawaran baru. Tidak
        ada spam, kami berjanji.
      </p>

      <div className="flex flex-col gap-y-4">
        <input
          type="text"
          className="border-2 border-neutral-100 outline-0 w-[90%] xl:w-[40%] bg-transparent p-2 rounded-md mx-auto justify-center flex mt-10 outline-none"
          placeholder="Email Anda"
        />
        <input
          type="text"
          className="border-2 border-neutral-100 outline-0 w-[90%] xl:w-[40%] bg-transparent p-2 rounded-md mx-auto justify-center flex mt-30 outline-none"
          placeholder="Nomor Whatsapp"
        />

        <button className="bg-primary-300 text-neutral-900 rounded-lg py-2.5 px-8 font-semibold mt-3 h-fit mx-auto text-center flex justify-center">
          Berlangganan
        </button>
      </div>
    </article>
  );
}
