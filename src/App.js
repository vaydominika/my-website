import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import ResumeComponents from "./components/ResumeComponents";
import SkillsComponents from "./components/SkillsComponents";
import Portfolio from "./components/Portfolio";
import { useScrollEffects } from "./js/Scroll";
import ScrollToTopButton from "./js/ScrollToTopButton";
import "./css/App.css";

function App() {
  useScrollEffects();

  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="about-me" className="page-section-static">
        <Aboutme />
      </section>
      <section id="skills" className="page-section">
        <SkillsComponents />
      </section>
      <section id="resume" className="page-section">
        <ResumeComponents />
      </section>
      <section id="portfolio" className="page-section">
        <Portfolio />
      </section>
      <section id="work-together" className="page-section"></section>

      <ScrollToTopButton />
    </>
  );
}

export default App;
