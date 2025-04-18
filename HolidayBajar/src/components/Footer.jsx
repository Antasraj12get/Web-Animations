// import React from 'react'
// import "../style/footer.css"


// const Footer = () => {
//   return (
//     <div className="footer-container">
//         <div className="waves">
//             <div className="wave" id='wave1' ></div>
//             <div className="wave" id='wave2' ></div>
//             <div className="wave" id='wave3' ></div>
//             <div className="wave" id='wave4' ></div>
//         </div>
//         <div className="social-icons"></div>

//     </div>
//   )
// }

// export default Footer;

import React from 'react';
import "../style/footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="waves">
        <div className="wave" id='wave1'></div>
        <div className="wave" id='wave2'></div>
        <div className="wave" id='wave3'></div>
        <div className="wave" id='wave4'></div>
      </div>
      <div className="social-icons">
        <div className="footer-content">
          <div className="footer-column">
            <h3><i className="fas fa-plane-departure"></i> Jingle Holiday Bazar</h3>
            <p>Travel with us from here to anywhere…</p>
            <p><i className="fas fa-phone-alt"></i> +91 8506922777 / +91 8506944777</p>
            <p><i className="fas fa-envelope"></i> jingleholidaybazar@gmail.com</p>
            <p><i className="fas fa-envelope-open"></i> thejingleholidaybazar@gmail.com</p>
            <p><i className="fas fa-headset"></i> 24/7 Dedicated Customer Support</p>
          </div>

          <div className="footer-column">
            <h3><i className="fas fa-link"></i> Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Blog list</li>
              <li>Destinations</li>
              <li>Hotels</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3><i className="fas fa-map-marked-alt"></i> Domestic Packages</h3>
            <ul>
              <li>Uttarakhand</li>
              <li>Mumbai</li>
              <li>Ladakh</li>
              <li>Meghalaya</li>
              <li>North East India</li>
              <li>Rajasthan</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3><i className="fas fa-globe"></i> International Packages</h3>
            <ul>
              <li>Maldives</li>
              <li>Singapore</li>
              <li>Switzerland</li>
              <li>Saudi Arabia</li>
              <li>Thailand</li>
              <li>Dubai</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3><i className="fas fa-praying-hands"></i> Yatra</h3>
            <ul>
              <li>Mata Vaishno</li>
              <li>Kedarnath</li>
              <li>Badrinath</li>
              <li>Char Dham Yatra</li>
              <li>Ramayana Yatra</li>
              <li>9 Devi Yatra</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Powered By | <a href="#">Namrata Universal</a> | All Rights are Reserved by Jingleholidaybazar</p>
          <div className="footer-social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
