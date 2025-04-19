import React from "react";
import "../style/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <img
          src="https://jingleholidaybazar.com/images/mainlogo.gif"
          width={140}
          alt=""
        />
      </div>
      <ul className="item-container">
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
  );
};

export default Navbar;

// https://uiverse.io/Praashoo7/quick-fish-43
