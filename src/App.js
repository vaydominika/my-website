import React from "react";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import ResumeComponents from "./components/ResumeComponents";
import SkillsComponents from "./components/SkillsComponents";
import Portfolio from "./components/Portfolio";
import "./css/App.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="about-me" className="page-section">
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
    </>
  );
}

export default App;
