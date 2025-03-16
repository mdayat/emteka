import { ComponentPropsWithRef } from "react";

export function RouteIcon({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="Vector"
        d="M9.42773 19.5C9.42773 21.1569 8.08459 22.5 6.42773 22.5C4.77088 22.5 3.42773 21.1569 3.42773 19.5C3.42773 17.8431 4.77088 16.5 6.42773 16.5C8.08459 16.5 9.42773 17.8431 9.42773 19.5ZM9.42773 19.5H17.9277C18.856 19.5 19.7462 19.1313 20.4026 18.4749C21.059 17.8185 21.4277 16.9283 21.4277 16C21.4277 15.0717 21.059 14.1815 20.4026 13.5251C19.7462 12.8687 18.856 12.5 17.9277 12.5H6.92773C5.99948 12.5 5.10924 12.1313 4.45286 11.4749C3.79648 10.8185 3.42773 9.92826 3.42773 9C3.42773 8.07174 3.79648 7.1815 4.45286 6.52513C5.10924 5.86875 5.99948 5.5 6.92773 5.5H15.4277M15.4277 5.5C15.4277 7.15685 16.7709 8.5 18.4277 8.5C20.0846 8.5 21.4277 7.15685 21.4277 5.5C21.4277 3.84315 20.0846 2.5 18.4277 2.5C16.7709 2.5 15.4277 3.84315 15.4277 5.5Z"
        stroke="#D47D04"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
