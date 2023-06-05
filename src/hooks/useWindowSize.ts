import { useEffect, useState } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (width === 0) {
      setWidth(window.innerWidth);
    }

    function onResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return { width };
}
