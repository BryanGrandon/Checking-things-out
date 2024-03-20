import React from "react";
import "./navbar-styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
  return (
    <>
      <header className="navbar">
        <h3 className="logo">JSON Placeholder</h3>
        <nav className="navbar__list">
          <a href="#home" className="navbar__element">
            Home
          </a>
          <a href="#project" className="navbar__element">
            Projects
          </a>
          <a href="#contact" className="navbar__element">
            Contact
          </a>
        </nav>

        <nav className="lower-navigation">
          <a href="#home" className="lower-navigation__element">
            <p className="lower-navigation__text">home</p>
          </a>

          <a href="#project" className="lower-navigation__element">
            <p className="lower-navigation__text">Project</p>
          </a>

          <a href="#contact" className="lower-navigation__element">
            <p className="lower-navigation__text">contact</p>
          </a>
        </nav>
      </header>
    </>
  );
}
