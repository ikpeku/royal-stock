import React from 'react';
import "./Card.scss";

const Card = ({ logo, text, className }) => {
  return (
    <div id='card-holder' className={className}>

      <em>{logo}</em>
      <p>{text}</p>

    </div>
  )
}

export default Card;