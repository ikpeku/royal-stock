import React from 'react';
import "./Card.scss";

const Card = ({ logo, text , className }) => {
  return (
    <div id='card-holder' className={className}>
      
      <p>{logo} <br />{text}</p>


    </div>
  )
}

export default Card;