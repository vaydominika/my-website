import React from "react";
import "../css/Aboutme.css";
import meImage from "../img/me.jpg";

const Aboutme = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-title">🌟 Hi there! I’m Dominika 🌟</h5>
            <div className="card-body">
              <p>
                Welcome to my little corner of the digital world! I’m a web
                design enthusiast with a heart that beats for all things tech.
                When I’m not lost in lines of code or crafting stunning
                websites, you’ll find me doodling away or dreaming up the next
                big idea. My life’s mission? To make the internet a more
                beautiful and functional place, one pixel at a time! ✨💻🎨
              </p>
              <p>
                If you’re as excited about tech and creativity as I am, let’s
                connect and create something amazing together!
              </p>
            </div>
            <div className="card-body">
              <a
                href="https://www.instagram.com/seprunyel_/"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://github.com/vaydominika"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="image-card">
            <img src={meImage} className="about-me-image" alt="Me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
