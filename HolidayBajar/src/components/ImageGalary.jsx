import React from 'react';
import "../style/imageBox.css";


const ImageBoxFirst = () => {
  return (
    <div className="imageBox-container">
        <div className="left-img-box">
            <img src="https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg" alt="" />
        </div>
        <div className="right-img-box">
            <img src="https://jingleholidaybazar.com/images/Gangtok.jpg" alt="" />
            <img src="https://jingleholidaybazar.com/images/Taj-mahal.jpg" alt="" />
        </div>
    </div>
  )
}

export default ImageBoxFirst;