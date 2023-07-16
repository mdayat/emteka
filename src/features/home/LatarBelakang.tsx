export function LatarBelakang() {
  return (
    <article className="bg-secondary-50 mt-14 py-6 old-lg:py-8 xl:py-10">
      <div className="mx-8 old-lg:w-[868px] old-lg:mx-auto">
        <h2 className="text-neutral-900 font-semibold text-center text-2xl mb-4 old-lg:text-[32px] old-lg:mb-6">
          Latar Belakang
        </h2>

        <p className="text-neutral-800 text-center text-sm mb-6 old-lg:text-base old-lg:mb-8">
          Matematika adalah fondasi utama bagi perkembangan teknologi dan kunci
          dalam memecahkan permasalahan sehari-hari. Namun, mengapa begitu
          banyak dari siswa merasa dipersulit?
        </p>
      </div>

      <div className="mx-8 old-lg:w-[868px] old-lg:mx-auto">
        <ul className="grid gap-y-6 old-lg:grid-cols-3 old-lg:gap-y-0 old-lg:gap-x-6">
          <li className="bg-neutral-0 card-transition shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg py-3 px-4">
            <div className="text-neutral-0 blue-ball flex-shrink-0 font-semibold grid place-items-center mx-auto mb-2 old-lg:text-lg old-lg:mb-3">
              1
            </div>

            <p className="text-neutral-800 text-center text-sm old-lg:text-base">
              Metode pembelajaran yang tidak efektif akibat inkompetensi
              pengajar dalam membangun dasar pemahaman Matematika yang kuat pada
              siswa
            </p>
          </li>

          <li className="bg-neutral-0 card-transition shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg py-3 px-4">
            <div className="text-neutral-0 blue-ball flex-shrink-0 font-semibold grid place-items-center mx-auto mb-2 old-lg:text-lg old-lg:mb-3">
              2
            </div>

            <p className="text-neutral-800 text-center text-sm old-lg:text-base">
              Kurangnya pemahaman Matematika secara terstruktur berakibat pada
              kemampuan berpikir yang lemah
            </p>
          </li>

          <li className="bg-neutral-0 card-transition shadow-[0_0_8px_rgba(0,0,0,0.25)] rounded-lg py-3 px-4">
            <div className="text-neutral-0 blue-ball flex-shrink-0 font-semibold grid place-items-center mx-auto mb-2 old-lg:text-lg old-lg:mb-3">
              3
            </div>

            <p className="text-neutral-800 text-center text-sm old-lg:text-base">
              Instrumen penilaian yang tidak akurat dalam mengukur dan memetakan
              kemampuan Matematika siswa secara komprehensif
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}
