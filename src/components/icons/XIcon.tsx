import type { ComponentPropsWithRef } from "react";

export function XIcon({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12.5337 0.927246H14.8883L9.74474 6.821L15.7964 14.8424H11.0586L7.34512 9.97845L3.10082 14.8424H0.74398L6.24511 8.53627L0.442383 0.928343H5.30084L8.65241 5.37334L12.5337 0.927246ZM11.7057 13.4298H13.0108L4.58797 2.26634H3.18856L11.7057 13.4298Z" />
    </svg>
  );
}
