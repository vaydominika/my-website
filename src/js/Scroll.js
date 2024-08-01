import { useEffect } from "react";

export const useScrollWithOffset = (activeLink, offset) => {
  useEffect(() => {
    const handleScroll = (event) => {
      const element = document.querySelector(activeLink);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    handleScroll();

    return () => {};
  }, [activeLink, offset]);
};
