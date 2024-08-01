import React from "react";
import Resume from "./Resume";
import "../css/ResumeComponents.css";

const ResumeComponents = () => {
  return (
    <>
      <div className="resume-container">
        <div className="resume-column">
          <Resume
            title="Education"
            period="2023-2026"
            location="Miskolci Egyetem"
            task="Computer Science BSc"
          />
        </div>

        <div className="vertical-divider"></div>

        <div className="resume-column">
          <Resume
            title="Experience"
            period="2023-2024"
            location="Telekom"
            task="Call center technician"
          />

          <Resume
            period="2023-Ongoing"
            location="Evosoft - Evocampus"
            task="Frontend web application developer"
          />
        </div>
      </div>
    </>
  );
};

export default ResumeComponents;
