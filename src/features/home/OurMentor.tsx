import Image from "next/image";

import { TitleOurMentorText } from "@components/TitleText/TitleOurMentorText";

import AbdulImage from "@images/home/mentor/abdul.png";
import DaffaImage from "@images/home/mentor/daffa.png";
import IrfanImage from "@images/home/mentor/irfan.png";
import KathrinImage from "@images/home/mentor/kathrin.png";
import SaptoImage from "@images/home/mentor/sapto.png";

export function OurMentor() {
  return (
    <section className="mx-4 old-lg:mx-20 mb-16">
      <div className="w-full flex flex-col items-center gap-y-4">
        <TitleOurMentorText className="max-w-max w-[500px]" />

        <p className="text-[#656876]  w-[577px] max-w-fit text-center">
          Tim kami terdiri dari para profesional berpengalaman dengan latar
          belakang yang kuat dan mendalam di bidang Matematika.
        </p>
      </div>

      <div className="flex justify-center mt-6 gap-x-5 gap-y-4 flex-wrap">
        {/* Sapto Bukti */}
        <div className="bg-neutral-0 rounded-2xl shadow-md w-full lg:max-w-[422px]">
          <div className="h-[234px] bg-gradient-to-r from-[#E7F2FF] to-[#94C7F6] rounded-t-2xl flex items-end justify-center">
            <Image src={SaptoImage} alt="Sapto Mukti" />
          </div>
          <div className="px-4 py-5">
            <h4 className="text-xl font-extrabold text-[#081459]">
              Sapto Mukti Handoyo
            </h4>
            <ul className="text-sm flex flex-col gap-y-6 mt-4 h-[312px] lg:max-h-fit">
              <li>
                <p>
                  Assistant Lecturer @Department of Mathematics IPB University
                </p>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>Master of Mathematics @IPB University</p>
                  <span className="text-[#805300] p-1 bg-gradient-to-r from-[#FCFFB4] to-[#F1C068] rounded-md font-bold min-w-fit">
                    IPK 3.92/4.00
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p>Bachelor of Mathematics @IPB University</p>
                  <span className="text-[#805300] p-1 bg-gradient-to-r from-[#FCFFB4] to-[#F1C068] rounded-md font-bold min-w-fit">
                    IPK 3.94/4.00
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Abdul Baist */}
        <div className="bg-neutral-0 rounded-2xl shadow-md w-full lg:max-w-[422px]">
          <div className="h-[234px] bg-gradient-to-r from-[#E7F2FF] to-[#94C7F6] rounded-t-2xl flex items-end justify-center">
            <Image src={AbdulImage} alt="Abdul Baist" />
          </div>
          <div className="px-4 py-5">
            <h4 className="text-xl font-extrabold text-[#081459]">
              Abdul Baist
            </h4>
            <ul className="text-sm flex flex-col gap-y-6 mt-4 h-[312px] lg:max-h-fit">
              <li>
                <p>
                  Lecturer Universitas Muhammadiyah Tangerang, Department of
                  Mathematics
                </p>
              </li>
              <li>
                <p>
                  PHD in Mathematics Education @Universitas Pendidikan Indonesia
                </p>
              </li>
              <li>
                <p>Master of Applied Mathematics @IPB University</p>
              </li>
              <li>
                <p>
                  Bachelor of Mathematics Education @Universitas Pendidikan
                  Indonesia
                </p>
              </li>
              <li>
                <p>Master of Mathematics @IPB University</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Muh Irfan */}
        <div className="bg-neutral-0 rounded-2xl shadow-md w-full lg:max-w-[422px]">
          <div className="h-[234px] bg-gradient-to-r from-[#E7F2FF] to-[#94C7F6] rounded-t-2xl flex items-end justify-center">
            <Image src={IrfanImage} alt="Irfan Arsyad" />
          </div>
          <div className="px-4 py-5">
            <h4 className="text-xl font-extrabold text-[#081459]">
              Muhammad Irfan Arsyad Prayitno
            </h4>
            <ul className="text-sm flex flex-col gap-y-6 mt-4 h-[312px] lg:max-h-fit">
              <li>
                <p>Master of Mathematics @Universitas Indonesia</p>
              </li>
              <li>
                <p>Bachelor of Mathematics @Universitas Indonesia </p>
              </li>
              <li>
                <p>
                  The 3rd International Conference on Operations Research 2018
                  Universitas Sam Ratulangi Manado
                </p>
              </li>
              <li>
                <p>The 8th SEAMS-UGM Conference 2019, Universitas Gajah Mada</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Abyan Daffa */}
        <div className="bg-neutral-0 rounded-2xl shadow-md w-full lg:max-w-[422px]">
          <div className="h-[234px] bg-gradient-to-r from-[#E7F2FF] to-[#94C7F6] rounded-t-2xl flex items-end justify-center">
            <Image src={DaffaImage} alt="Abyan Daffa" />
          </div>
          <div className="px-4 py-5">
            <h4 className="text-xl font-extrabold text-[#081459]">
              Abyan Daffa Akbar
            </h4>
            <ul className="text-sm flex flex-col gap-y-6 mt-4 h-[312px] lg:max-h-fit">
              <li>
                <div className="flex justify-between items-center">
                  <p>Master of Mathematics @Universitas Airlangga</p>
                  <span className="text-[#805300] p-1 bg-gradient-to-r from-[#FCFFB4] to-[#F1C068] rounded-md font-bold min-w-fit">
                    IPK 3.86/4.00
                  </span>
                </div>
              </li>
              <li>
                <p>Bachelor of Mathematics @Universitas Brawijaya</p>
              </li>
              <li>
                <p>Semifinalis Fun Mathematics Competition (FMC) 2018</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Kathrin Nur */}
        <div className="bg-neutral-0 rounded-2xl shadow-md w-full lg:max-w-[422px]">
          <div className="h-[234px] bg-gradient-to-r from-[#E7F2FF] to-[#94C7F6] rounded-t-2xl flex items-end justify-center">
            <Image src={KathrinImage} alt="Kathrin Nur Wulandari" />
          </div>
          <div className="px-4 py-5">
            <h4 className="text-xl font-extrabold text-[#081459]">
              Kathrin Nur Wulandari
            </h4>
            <ul className="text-sm flex flex-col gap-y-6 mt-4 h-[312px] lg:max-h-fit">
              <li>
                <p>
                  Master of Mathematics Education @Universitas Sultan Ageng
                  Tirtayasa
                </p>
              </li>
              <li>
                <p>
                  Bachelor of Mathematics Education @Universitas Muhammadiyah
                  Tangerang
                </p>
              </li>
              <li>
                <p>
                  Calistung Competition Coordinator at the District Level (2023)
                </p>
              </li>
              <li>
                <p>Mathematics OSN Trainer (2023)</p>
              </li>
              <li>
                <p>
                  Participant in International Conference on Mathematics:
                  Education, Theory & Application (2016)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
