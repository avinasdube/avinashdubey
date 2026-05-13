import { useEffect } from "react";

const useScrollReveal = (selector = ".projectCard", threshold = 0.4) => {
  useEffect(() => {
    const cards = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            return;
          }

          entry.target.classList.remove("visible");
        });
      },
      { threshold },
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, [selector, threshold]);
};

export default useScrollReveal;
