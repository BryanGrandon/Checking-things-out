import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFile, faImage } from "@fortawesome/free-solid-svg-icons";
// import "./navbar-styles.css";

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">
          JSON Placeholder
        </a>
        <ul className="navbar__list">
          <li>
            <a href="#users" className="navbar__element">
              Users
            </a>
          </li>
          <li>
            <a href="#posts" className="navbar__element">
              Posts
            </a>
          </li>
          <li>
            <a href="#photos" className="navbar__element">
              Photos
            </a>
          </li>
        </ul>
      </nav>

      <nav className="lower-navigation">
        <a href="#users" className="lower-navigation__element">
          <FontAwesomeIcon icon={faUser} className="lower-navigation__icon" />
          <p className="lower-navigation__text">Users</p>
        </a>

        <a href="#posts" className="lower-navigation__element">
          <FontAwesomeIcon icon={faFile} className="lower-navigation__icon" />
          <p className="lower-navigation__text">Posts</p>
        </a>

        <a href="#photos" className="lower-navigation__element">
          <FontAwesomeIcon icon={faImage} className="lower-navigation__icon" />
          <p className="lower-navigation__text">Photos</p>
        </a>
      </nav>
    </>
  );
}
