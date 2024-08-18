import React, { useEffect, useState, useRef } from "react";
import "../css/Skills.css";

const Skills = ({ skill, percent }) => {
  const [width, setWidth] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);
  const skillRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startAnimation = () => {
      let currentPercent = 0;
      intervalRef.current = setInterval(() => {
        currentPercent += 1;
        if (currentPercent <= percent) {
          setDisplayPercent(currentPercent);
          setWidth(currentPercent);
        } else {
          clearInterval(intervalRef.current);
        }
      }, 10);
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          startAnimation();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    if (skillRef.current && isElementInViewport(skillRef.current)) {
      startAnimation();
      skillRef.current.classList.add("visible");
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
      clearInterval(intervalRef.current);
    };
  }, [percent]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div className="skill-item" ref={skillRef}>
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
  );
};

export default Skills;
