import { useState } from "react";
import { NavLink as NavLinkRR } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import "./navbar-styles.css";

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkRR
      {...props}
      to={to}
      className={({ isActive }) => {
        return isActive ? "is-active" : "navbar__link";
      }}
    >
      {children}
    </NavLinkRR>
  );
};

export default function Navbar() {
  const [icon, setIcon] = useState(false);

  const handlerClick = () => {
    const navDropdown = document.querySelector(".navbar__dropdown");
    navDropdown.classList.toggle("navbar-active");
    setIcon(navDropdown.classList.contains("navbar-active"));
  };

  return (
    <>
      <header className="navbar">
        <section className="navbar__color">
          <section className="navbar__main">
            <h3 className="logo">JSON Placeholder</h3>
            <nav className="navbar__links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <button className="button-menu" onClick={handlerClick}>
              {icon ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </section>
        </section>
        <nav className="navbar__dropdown">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <section className="space-for-navbar"></section>
    </>
  );
}
