// Navbar.js
import React, { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("About me");

  const navItems = [
    { name: "About me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Work Together", href: "#work-together" },
  ];

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition =
        elementPosition - window.innerHeight / 2 + element.clientHeight / 2;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <ul className="nav nav-underline">
        {navItems.map((item) => (
          <li className="nav-item" key={item.name}>
            <a
              className={`nav-link scroll-link ${
                activeLink === item.name ? "active" : ""
              }`}
              aria-current={activeLink === item.name ? "page" : undefined}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item.name);
                handleScroll(item.href);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
