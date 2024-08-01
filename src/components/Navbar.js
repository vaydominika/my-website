import React, { useState } from "react";
import "../css/Navbar.css";
import { useScrollWithOffset } from "../js/Scroll";

function Navbar() {
  const [activeLink, setActiveLink] = useState("About me");

  const navItems = [
    { name: "About me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Work Together", href: "#work-together" },
  ];

  useScrollWithOffset(`#${activeLink.toLowerCase().replace(" ", "-")}`, -400);

  return (
    <>
      <ul className="nav nav-underline">
        {navItems.map((item) => (
          <li className="nav-item" key={item.name}>
            <a
              className={`nav-link scroll-link ${
                activeLink === item.name && "active"
              }`}
              aria-current={activeLink === item.name && "page"}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item.name);
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
