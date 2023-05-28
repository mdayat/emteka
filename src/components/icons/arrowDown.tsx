import type { InlineSVGProps } from "@interfaces/inlineSvg";

export function ArrowDown({
  width = 24,
  height = 24,
  fill = "#090C18",
}: InlineSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z" />
    </svg>
  );
}
