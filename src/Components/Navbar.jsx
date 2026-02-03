// Navbar.jsx
import React from "react";
import logo from "../assets/logo.jpg"; // your small logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Company Logo" className="nav-logo" />
        <div className="navbar-brand">
          <span className="brand-main">Next</span>
          <span className="brand-sub">Gen Construction</span>
        </div>
      </div>

      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
