export function Bubble({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 32.9949V0H32.9949C51.2085 0 66 14.7915 66 32.9949C66 51.2084 51.2085 66 32.9949 66C14.7814 66 0 51.2084 0 32.9949Z" />
    </svg>
  );
}
