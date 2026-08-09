import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ title = "titulo por defecto", image, video, external = false }) {
  const content = <img src={image} alt={title} />;

  return (
    <div className="Card">
      {external ? (
        <a href={video} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link to={title}>{content}</Link>
      )}
    </div>
  );
}

export default Card;
