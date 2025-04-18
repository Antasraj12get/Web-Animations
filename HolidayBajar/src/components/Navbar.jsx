import React from "react";
import "../style/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faInfoCircle,
  faPlaneDeparture,
  faGlobe,
  faMapMarkedAlt,
  faSuitcaseRolling,
  faEnvelope,
  faPhone,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
            <img src="https://jingleholidaybazar.com/images/mainlogo.gif" width={140} alt="" />
        </div>
      <ul className="item-container">
          <a href="/">
            {/* <span className="icons">
              <FontAwesomeIcon icon={faHouse} style={{ color: "#74C0FC" }} />
            </span>
            <span className="text">Home</span> */}
            Home
          </a>
          <a href="/">
            {/* <span className="icons">
              <FontAwesomeIcon
                icon={faInfoCircle}
                style={{ color: "#74C0FC" }}
              />
            </span>
            <span className="text">About us</span> */}
            About us
          </a>
          <a href="/">
            {/* <span className="icons">
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                style={{ color: "#74C0FC" }}
              />
            </span>
            <span className="text">Domestic</span> */}
            Domestic
          </a>
          <a href="/">
            {/* <span className="icons">
              <FontAwesomeIcon icon={faGlobe} style={{ color: "#74C0FC" }} />
            </span>
            <span className="text">International</span> */}
            International
          </a>
          <a href="/">
            {/* <span className="icons">
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                style={{ color: "#74C0FC" }}
              />
            </span>
            <span className="text">Place</span> */}
            Place
          </a>
          <a href="/">
            {/* <span className="icons">
              <FontAwesomeIcon
                icon={faSuitcaseRolling}
                style={{ color: "#74C0FC" }}
              />
            </span>
            <span className="text">Pakages</span> */}
            Pakages
          </a>
          <a href="/">
            {/* <span className="icons">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#74C0FC" }} />
            </span>
            <span className="text">Contact us</span> */}
            Contact us
          </a>
          <a href="/">
            {/* <span className="icons">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#74C0FC" }} />
            </span>
            <span className="text">00000000</span> */}
            00000000
          </a>
          <a href="/">
            {/* <span className="icons">
              <FontAwesomeIcon
                icon={faCreditCard}
                style={{ color: "#74C0FC" }}
              />
            </span>
            <span className="text">Pay now</span> */}
            Pay now
          </a>
      </ul>
    </div>
  );
};

export default Navbar;




// https://uiverse.io/Praashoo7/quick-fish-43