import type { ComponentPropsWithRef } from "react";

export function HistoryIcon({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="Vector"
        d="M3.42773 12C3.42773 13.78 3.95558 15.5201 4.94451 17.0001C5.93344 18.4802 7.33905 19.6337 8.98358 20.3149C10.6281 20.9961 12.4377 21.1743 14.1835 20.8271C15.9294 20.4798 17.533 19.6226 18.7917 18.364C20.0504 17.1053 20.9075 15.5016 21.2548 13.7558C21.6021 12.01 21.4238 10.2004 20.7427 8.55585C20.0615 6.91131 18.9079 5.50571 17.4279 4.51677C15.9478 3.52784 14.2078 3 12.4277 3C9.91169 3.00947 7.4967 3.99122 5.68773 5.74L3.42773 8M3.42773 8V3M3.42773 8H8.42773M12.4277 7V12L16.4277 14"
        stroke="#1937A6"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
