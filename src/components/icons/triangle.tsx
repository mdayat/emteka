import React from "react";

export function Triangle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 39 39"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1817_4027)">
        <path
          d="M4.98659 24.189L20.1885 8.4419C21.0287 7.5716 21.4488 7.13645 21.8748 7.06094C22.2465 6.99507 22.6286 7.0898 22.9265 7.32162C23.2679 7.58739 23.4361 8.16837 23.7725 9.33033L29.8593 30.3546C30.1969 31.5208 30.3657 32.1038 30.2184 32.5115C30.0898 32.8671 29.8164 33.1514 29.466 33.2936C29.0644 33.4567 28.4752 33.3106 27.2968 33.0185L6.00813 27.7414C4.82976 27.4493 4.24058 27.3032 3.9616 26.9714C3.71828 26.682 3.60926 26.3029 3.66169 25.9285C3.72179 25.4992 4.14339 25.0625 4.98659 24.189Z"
          stroke="#F2B705"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1817_4027">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(7.69934) rotate(13.9222)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
