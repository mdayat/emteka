import { useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    function clickOutside(event: Event) {
      const isClickOutside =
        elementRef.current?.contains(event.target as HTMLElement) === false;

      if (isClickOutside) {
        callback();
      }
    }

    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return elementRef;
}
