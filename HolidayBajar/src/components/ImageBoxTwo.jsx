import React from "react";
import "../style/imageBoxTwo.css";

const ImageBoxTwo = () => {
  return (
    <div className="imagebox-two-container">
      <div className="left-box2-container">
        <div className="upper-img">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://jingleholidaybazar.com/images/Leh03.jpg"
                  alt="Front"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="https://media.istockphoto.com/id/518497872/photo/thikse-monastery-near-leh-ladakh-india.jpg?s=2048x2048&w=is&k=20&c=QVWAcRVDnI3tVDQDgtt5cw32bIpB9mmJQr_nXt-HxdU="
                  alt="Back"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lower-content">
          <h2>Week At Thiksey Monastery</h2>
          <p>
            This 12-storey complex hosts over 500 monks and is considered to be
            one of the most beautiful Buddhist monasteries in all of Ladakh. For
            Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge
            about some of the Buddhist culture, lifestyle, scriptures, statues
            and even paintings.
          </p>
          <button className="blue-animated-btn">WhatsApp Now More Details</button>
        </div>
      </div>

      <div className="right-box2-container">
        <div className="above-box">
          <div className="above-boximg">
            <img src="https://jingleholidaybazar.com/images/Solang-Valley.jpg" alt="" />
          </div>
          <div className="above-box-content">
            <h2>Week At Solang Valley, Manali</h2>
            <p>
              A mini valley located at about 8400 feet above sea level, Solang
              Nala is a short drive away from Manali. If you are looking for
              snow-based activities and sports, winters are the best time to
              visit
            </p>
            <button className="blue-animated-btn">Contact</button>
          </div>
        </div>

        <div className="below-box">
          <div className="above-box-content">
            <h2>Week At Solang Valley, Manali</h2>
            <p>
              A mini valley located at about 8400 feet above sea level, Solang
              Nala is a short drive away from Manali. If you are looking for
              snow-based activities and sports, winters are the best time to
              visit
            </p>
            <button className="blue-animated-btn">Contact</button>
          </div>
          <div className="above-boximg">
            <img
              src="https://jingleholidaybazar.com/images/india-goa-best-beaches-vagator-beach.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBoxTwo;
