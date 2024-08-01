import React from "react";
import Skills from "./Skills";
import "../css/SkillsComponents.css";

const SkillsComponents = () => {
  return (
    <>
      <div className="horizontal-divider">
        <div className="thicker-divider"></div>
      </div>

      <p className="skill-description">
        I take joy in making code come alive with creativity!
      </p>

      <div className="horizontal-divider">
        <div className="thicker-divider"></div>
      </div>
      <Skills skill="HTML" percent="90" />
      <Skills skill="CSS" percent="85" />
      <Skills skill="JS" percent="78" />
      <Skills skill="C#" percent="60" />
      <Skills skill="React" percent="60" />
    </>
  );
};

export default SkillsComponents;
