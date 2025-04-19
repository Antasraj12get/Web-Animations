
import React, { useState } from "react";
import "../style/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="nav-main">
        <div className="nav-left">
          <img
            src="https://jingleholidaybazar.com/images/mainlogo.gif"
            alt="logo"
          />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`item-container ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/">About us</a>
          <a href="/">Domestic</a>
          <a href="/">International</a>
          <a href="/">Place</a>
          <a href="/">Pakages</a>
          <a href="/">Contact us</a>
          <a href="/">+91 8506922777</a>
          <a href="/">Pay now</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

