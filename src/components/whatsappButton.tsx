import React from "react";
import { WhatsAppColored } from "@icons/WhatsAppColored";
import Link from "next/link";

export function WhatsappButton() {
  return (
    <Link href="https://wa.me/6282211000129" target="_blank">
      <div className="fixed bottom-12 right-12 w-[52px] p-[6px] bg-[#4075FF80] border-4 border-[#FFFFFF80] rounded-xl z-10">
        <WhatsAppColored />
      </div>
    </Link>
  );
}
