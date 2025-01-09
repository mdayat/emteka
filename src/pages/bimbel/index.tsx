import { WhatsappButton } from "@components/whatsappButton";
import { CaraBelajar } from "src/features/bimbel/CaraBelajar";
import { FAQ } from "src/features/bimbel/FAQ";
import { Feature } from "src/features/bimbel/Feature";
import { Hero } from "src/features/bimbel/Hero";
import { MailingList } from "src/features/bimbel/MailingList";

export default function Bimbel() {
  return (
    <>
      <WhatsappButton />
      <div className="relative overflow-clip bg-secondary-50 text-neutral-900 font-nunito">
        {/* <div className="mt-[58px] old-lg:mt-[76px] mx-20"> */}
        <div className="w-[477px] h-[477px] -right-60 -top-60 absolute opacity-50 bg-[#3d70f3] rounded-full blur-[200px] invisible old-lg:visible" />
        <div className="w-[477px] h-[477px] -left-[356px] top-[304px] absolute opacity-50 bg-[#3d70f3] rounded-full blur-[200px] invisible old-lg:visible" />
        <div className="w-[477px] h-[477px] -right-[307px] top-[1711px] absolute opacity-50 bg-[#3d70f3] rounded-full blur-[200px] invisible old-lg:visible" />

        <div className="flex flex-col mt-16 max-w-prose mx-auto old-lg:flex-none old-lg:max-w-none">
          <Hero />
          <Feature />
          <hr className="w-[332px] old-lg:w-[914px] h-0.5 bg-neutral-300/25 mx-auto" />
          <CaraBelajar />
          <hr className="w-[332px] old-lg:w-[914px] h-0.5 bg-neutral-300/25 mx-auto" />
          <FAQ />
          <hr className="w-[332px] old-lg:w-[914px] h-0.5 bg-neutral-300/25 mx-auto" />
          <MailingList />
        </div>
      </div>
    </>
  );
}
