import React from "react";
import "../style/imageBoxTwo.css";

const PopularBox = () => {
  return (
    <div className="imagebox-two-container">
      <div className="left-box2-container">
        <div className="upper-img">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg"
                  alt="Front"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="https://jingleholidaybazar.com/images/Leh03.jpg"
                  alt="Back"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lower-content">
          <h2>
          Hideout Premiere
          </h2>
          <p>

Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our guests the opportunity to enjoy Goa in all her glory. Whether it’s the beaches ₹ 4499+
        
          </p>
          
        </div>
      </div>

      <div className="right-box2-container">
        <div className="above-box">
          <div className="above-boximg">
            <img src="https://jingleholidaybazar.com/images/Taj-Aravali-Resort-Spa.jpg" alt="" />
          </div>
          <div className="above-box-content">
            <h2>Taj Aravali Resort & Spa</h2>
            <p>
            Prices for Taj Aravali Resort and Spa one of the best hotels in India, starts at ₹ 12999+ per night
            </p>
           
          </div>
        </div>

        <div className="below-box">
          <div className="above-box-content">
            <h2>Hotel Mountain face by Snow City Hotels
</h2>
            <p>
             

Set in Manāli Hotel Mountain face by Snow City Hotels offers accommodation with a restaurant, free private parking, a shared lounge and a garden.₹ 1,440+ per night
            </p>
            
          </div>
          <div className="above-boximg">
            <img
              src="https://jingleholidaybazar.com/images/172808300.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBox;
