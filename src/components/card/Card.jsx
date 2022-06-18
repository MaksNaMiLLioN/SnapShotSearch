import React from "react";
import "./card.css";

const Card = ({ url, alt }) => {
  return (
    <li>
      <img src={url} alt={alt} />
    </li>
  );
};

export default Card;
