import { ComponentPropsWithRef } from "react";

export function BlobWavesImage({
  className = "",
}: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 383 464"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M149.375 1.55792C65.8098 11.7527 73.0945 126.006 48.5081 206.521C26.2742 279.332 -31.6842 359.901 24.1443 411.66C94.6217 476.999 205.983 480.695 284.569 425.373C366.687 367.564 402.046 262.788 371.526 167.113C340.497 69.8407 250.725 -10.8066 149.375 1.55792Z"
      />
    </svg>
  );
}
