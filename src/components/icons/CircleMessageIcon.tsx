import type { ComponentPropsWithRef } from "react";

export function CircleMessageIcon({
  className = "",
}: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.6709 12.8213H8.6809M12.6709 12.8213H12.6809M16.6709 12.8213H16.6809M8.5709 20.8213C10.4795 21.8004 12.675 22.0656 14.7618 21.5691C16.8486 21.0726 18.6895 19.8472 19.9527 18.1135C21.2159 16.3799 21.8183 14.252 21.6515 12.1135C21.4846 9.97495 20.5595 7.96631 19.0427 6.44953C17.5259 4.93275 15.5173 4.00759 13.3787 3.84075C11.2402 3.67392 9.11237 4.27638 7.37872 5.53958C5.64507 6.80278 4.41959 8.64365 3.92312 10.7304C3.42665 12.8173 3.69184 15.0128 4.6709 16.9213L2.6709 22.8213L8.5709 20.8213Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
