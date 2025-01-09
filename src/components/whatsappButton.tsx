import React from "react";
import { WhatsAppColored } from "@icons/WhatsAppColored";
import Link from "next/link";

export function WhatsappButton() {
  return (
    <div className="invisible xl:visible xl:mx-auto xl:w-full fixed xl:relative right-20 xl:right-20 z-20 flex flex-col justify-between items-end bg-error-400">
      <Link href="https://wa.me/6282211000129" rel="noopener" target="_blank">
        <div className="fixed bottom-12 w-[52px] p-[6px] bg-[#3f75ff]/50 border-4 border-neutral-0/50 rounded-xl z-20">
          <WhatsAppColored />
        </div>
      </Link>
    </div>
  );
}
