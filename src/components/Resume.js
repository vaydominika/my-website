import React from "react";
import "../css/Resume.css";

const Resume = ({ title, location, period, task }) => {
  return (
    <div className="container-left">
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="divider">
        <div className="thicker-divider"></div>
      </div>

      <div className="location">
        <p>
          {location} <span className="badge">{period}</span>
        </p>
      </div>

      <div className="task">
        <p>{task}</p>
      </div>
    </div>
  );
};

export default Resume;
