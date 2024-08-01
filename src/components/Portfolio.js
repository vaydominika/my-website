import React from "react";
import "../css/Portfolio.css";
import image1 from "../img/EvoCampusLoginPage.png";
import image2 from "../img/EvoCampusRegisterPage.png";
import image3 from "../img/EvoCampusFeedPage.png";
import image4 from "../img/EvoCampusProfilePage.png";

const Portfolio = () => {
  const images = [
    {
      src: image1,
      alt: "EvoCampus Login Page",
    },
    {
      src: image2,
      alt: "EvoCampus Register Page",
    },
    {
      src: image3,
      alt: "EvoCampus Feed Page",
    },
    {
      src: image4,
      alt: "EvoCampus Profile Page",
    },
  ];

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="divider">
        <div className="thicker-divider"></div>{" "}
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
