import { useEffect } from "react";

export const useScrollEffects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".page-section");
      const viewportHeight = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        const threshold = sectionTop + sectionHeight * 0.9;

        if (window.scrollY + viewportHeight > threshold) {
          if (!section.classList.contains("visible")) {
            section.classList.add("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
