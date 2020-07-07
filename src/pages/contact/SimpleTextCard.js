import React from 'react';
import './style.scss';
const SimpleTextCard = ({ heading, text }) => {
  return (
    <div className="Simple-text-Card wow zoomIn">
      <div className="about-heading simpleCard-heading">{heading}</div>
      <p>{text}</p>
    </div>
  );
};

export default SimpleTextCard;
