import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useHoverTranslate from "../../hooks/useHoverTranslate";
import "./NavigationSection.scss";

const NavigationSection = () => {
  const { transform, handleMouseMove, handleMouseLeave } = useHoverTranslate(3);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // initialize dark-mode setting (respect prefers-color-scheme)
  useEffect(() => {
    try {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const stored = localStorage.getItem("dark-mode-enabled");
      if (stored !== null) {
        setDarkMode(stored === "true");
        document.body.classList.toggle("dark", stored === "true");
      } else {
        setDarkMode(prefersDark);
        document.body.classList.toggle("dark", prefersDark);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleDecor = () => {
    const next = !darkMode;
    setDarkMode(next);
    try {
      localStorage.setItem("dark-mode-enabled", next ? "true" : "false");
    } catch (e) {}
    document.body.classList.toggle("dark", next);
  };

  return (
    <nav
      className={`navigation ${isScrolled ? "scrolled" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="primary navigation"
    >
      <div className="navbarContainer">
        <div className="navMid" style={{ transform }}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `option ${isActive ? "active" : ""}`}
            aria-label="go to work section"
          >
            <span className="link">work</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `option ${isActive ? "active" : ""}`}
            aria-label="go to about me section"
          >
            <span className="link">about me</span>
          </NavLink>
          {/* Dark mode toggle */}
          <button
            className={`decorToggle ${darkMode ? "on" : "off"}`}
            onClick={toggleDecor}
            aria-pressed={darkMode ? "true" : "false"}
            aria-label={darkMode ? "Disable dark mode" : "Enable dark mode"}
            title={darkMode ? "Disable dark mode" : "Enable dark mode"}
          >
            <span className="dot" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationSection;
