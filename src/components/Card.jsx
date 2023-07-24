import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ title = "titulo por defecto", description = "descripcion por defecto", image, VideoFrame }) {
  return (
    <div className="Card">
      <Link to={title}>
        <img src={image} alt={title} />
      </Link>
    </div>
  );
}

export default Card;
