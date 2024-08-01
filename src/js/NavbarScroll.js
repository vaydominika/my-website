import { useCallback } from "react";

export const useScrollWithOffset = () => {
  return useCallback((href, offset) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop + offset,
        behavior: "smooth",
      });
    }
  }, []);
};
