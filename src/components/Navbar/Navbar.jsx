import { NavLink as NavLinkRR } from "react-router-dom";
import "./navbar-styles.css";

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkRR
      {...props}
      to={to}
      className={({ isActive }) => {
        return isActive ? "is-active" : "";
      }}
    >
      {children}
    </NavLinkRR>
  );
};

export default function Navbar() {
  return (
    <header>
      <h3 className="logo">JSON Placeholder</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
