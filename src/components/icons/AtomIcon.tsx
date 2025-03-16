import { ComponentPropsWithRef } from "react";

export function AtomIcon({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Vector">
        <path
          d="M12.4271 13.0004C12.9794 13.0004 13.4271 12.5527 13.4271 12.0004C13.4271 11.4481 12.9794 11.0004 12.4271 11.0004C11.8748 11.0004 11.4271 11.4481 11.4271 12.0004C11.4271 12.5527 11.8748 13.0004 12.4271 13.0004Z"
          stroke="#1937A6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.6271 20.2004C22.6671 18.1704 20.6471 12.8404 16.1271 8.30037C11.5871 3.78037 6.25713 1.76037 4.22713 3.80037C2.18713 5.83037 4.20713 11.1604 8.72713 15.7004C13.2671 20.2204 18.5971 22.2404 20.6271 20.2004Z"
          stroke="#1937A6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.1271 15.7004C20.6471 11.1604 22.6671 5.83037 20.6271 3.80037C18.5971 1.76037 13.2671 3.78037 8.72713 8.30037C4.20713 12.8404 2.18713 18.1704 4.22713 20.2004C6.25713 22.2404 11.5871 20.2204 16.1271 15.7004Z"
          stroke="#1937A6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
