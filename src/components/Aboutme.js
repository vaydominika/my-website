import React from "react";
import "../css/Aboutme.css";

const Aboutme = () => {
  return (
    <>
      <div className="card aboutme">
        <h5 className="card-title">🌟 Hi there! I’m Dominika 🌟</h5>
        <div className="card-body">
          <p>
            Welcome to my little corner of the digital world! I’m a web design
            enthusiast with a heart that beats for all things tech. When I’m not
            lost in lines of code or crafting stunning websites, you’ll find me
            doodling away or dreaming up the next big idea. My life’s mission?
            To make the internet a more beautiful and functional place, one
            pixel at a time! ✨💻🎨{" "}
          </p>
          <p>
            If you’re as excited about tech and creativity as I am, let’s
            connect and create something amazing together!
          </p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">
            Instagram
          </a>
          <a href="#" className="card-link">
            GitHub
          </a>
          <a href="#" className="card-link">
            Discord
          </a>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
