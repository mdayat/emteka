export function EffectCard({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 337 337"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_f_3264_2714)">
        <circle cx="168.5" cy="168.5" r="68.5" fill="#FFE600" />
      </g>
      <defs>
        <filter
          id="filter0_f_3264_2714"
          x="0"
          y="0"
          width="337"
          height="337"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_3264_2714"
          />
        </filter>
      </defs>
    </svg>
  );
}
