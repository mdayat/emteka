import { ComponentPropsWithRef } from "react";

export function LocaleFixedIcon({
  className = "",
}: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="Vector"
        d="M1.42773 11.5H4.42773M4.42773 11.5C4.42773 15.366 7.56174 18.5 11.4277 18.5M4.42773 11.5C4.42773 7.63401 7.56174 4.5 11.4277 4.5M18.4277 11.5H21.4277M18.4277 11.5C18.4277 15.366 15.2937 18.5 11.4277 18.5M18.4277 11.5C18.4277 7.63401 15.2937 4.5 11.4277 4.5M11.4277 1.5V4.5M11.4277 18.5V21.5M14.4277 11.5C14.4277 13.1569 13.0846 14.5 11.4277 14.5C9.77088 14.5 8.42773 13.1569 8.42773 11.5C8.42773 9.84315 9.77088 8.5 11.4277 8.5C13.0846 8.5 14.4277 9.84315 14.4277 11.5Z"
        stroke="#D47D04"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
