import { useState } from "react";

export function useDelayedUnmount() {
  const [isMounted, setIsMounted] = useState(false);

  function animationOnUnmount(callback: () => void, ms: number) {
    setIsMounted(false);
    setTimeout(callback, ms);
  }

  return { isMounted, setIsMounted, animationOnUnmount };
}
