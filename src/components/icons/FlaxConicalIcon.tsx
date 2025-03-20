import type { ComponentPropsWithRef } from "react";

export function FlaxConicalIcon({
  className = "",
}: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="lucide/flask-conical">
        <path
          id="Vector"
          d="M26.3348 4.16699V15.167C26.3345 15.782 26.489 16.3873 26.784 16.927L36.8856 35.407C37.1912 35.9654 37.3461 36.5938 37.3351 37.2303C37.3241 37.8668 37.1476 38.4894 36.8229 39.037C36.4983 39.5846 36.0367 40.0382 35.4835 40.3532C34.9303 40.6682 34.3047 40.8338 33.6681 40.8337H11.6681C11.0316 40.8338 10.4059 40.6682 9.85274 40.3532C9.29958 40.0382 8.83796 39.5846 8.51331 39.037C8.18865 38.4894 8.01215 37.8668 8.00116 37.2303C7.99017 36.5938 8.14507 35.9654 8.45063 35.407L18.5523 16.927C18.8473 16.3873 19.0017 15.782 19.0015 15.167V4.16699M12.4986 28.0003H32.8376M16.2515 4.16699H29.0848"
          stroke-width="3.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
