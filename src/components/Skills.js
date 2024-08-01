import React, { useEffect, useState } from "react";
import "../css/Skills.css";

const Skills = ({ skill, percent }) => {
  const [width, setWidth] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    setWidth(percent);

    let currentPercent = 0;
    const interval = setInterval(() => {
      currentPercent += 1;
      if (currentPercent <= percent) {
        setDisplayPercent(currentPercent);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [percent]);

  return (
    <>
      <div className="skill-item">
        <p>{skill}</p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example 20px high"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: `${width}%` }}>
            {displayPercent}%
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
