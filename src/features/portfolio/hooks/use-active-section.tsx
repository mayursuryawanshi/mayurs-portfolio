import { useEffect, useState } from "react";

const sections = [
  { id: "", name: "Home" },
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "";

      // Check sections from bottom to top to get the most relevant one
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        let element: HTMLElement | null = null;

        if (section.id === "") {
          // Home section - first section element
          element = document.querySelector(
            "section:first-of-type"
          ) as HTMLElement;
        } else {
          element = document.getElementById(section.id);
        }

        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Check if scroll position is within this section
          if (scrollPosition >= offsetTop - 100) {
            currentSection = section.id;
            break;
          }
        }
      }

      // If at the very top, always set to Home
      if (window.scrollY < 200) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return activeSection;
};