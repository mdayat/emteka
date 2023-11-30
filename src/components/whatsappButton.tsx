import React from "react";
import { WhatsAppColored } from "@icons/WhatsAppColored";
import Link from "next/link";

export function WhatsappButton() {
  return (
    <div className="mx-auto w-[1300px] relative flex flex-col justify-between items-end bg-error-400">
      <Link href="https://wa.me/6282211000129" target="_blank">
        <div className="fixed bottom-12 w-[52px] p-[6px] bg-[#4075FF80] border-4 border-[#FFFFFF80] rounded-xl z-50">
          <WhatsAppColored />
        </div>
      </Link>
    </div>
  );
}
