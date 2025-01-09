export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1830_54)">
        <path
          d="M10.8267 19.6134L16 14.44L21.1733 19.6134C21.6933 20.1334 22.5333 20.1334 23.0533 19.6134C23.5733 19.0934 23.5733 18.2534 23.0533 17.7334L16.9333 11.6134C16.4133 11.0934 15.5733 11.0934 15.0533 11.6134L8.93333 17.7334C8.41333 18.2534 8.41333 19.0934 8.93333 19.6134C9.45333 20.12 10.3067 20.1334 10.8267 19.6134Z"
          fill="#3D6FF2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1830_54">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="matrix(-1 0 0 -1 32 32)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
