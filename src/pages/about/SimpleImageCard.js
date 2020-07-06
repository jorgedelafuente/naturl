import React from 'react';
import './style.scss';
const SimpleImageCard = ({ image, heading, text1, text2 }) => {
  return (
    <div className="Simple-image-Card inline-photo">
      <img src={image} alt={image} className="wow zoomIn"/>
      <div className="about-heading simpleImage-heading wow zoomIn">{heading}</div>
      <p   className="wow zoomIn">{text1}</p>
      <p style={{ paddingTop: '2px' }}  className="wow zoomIn">{text2}</p>
    </div>
  );
};

export default SimpleImageCard;
