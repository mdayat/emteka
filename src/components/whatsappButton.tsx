import React from "react";
import { WhatsAppColored } from "@icons/WhatsAppColored";
import Link from "next/link";

export function WhatsappButton() {
  return (
    <div className="xl:mx-auto xl:w-[1300px] fixed xl:relative right-20 xl:right-0 z-20 flex flex-col justify-between items-end bg-error-400">
      <Link href="https://wa.me/6282211000129" rel="noopener" target="_blank">
        <div className="fixed bottom-12 w-[52px] p-[6px] bg-[#4075FF80] border-4 border-[#FFFFFF80] rounded-xl z-20">
          <WhatsAppColored />
        </div>
      </Link>
    </div>
  );
}
