//Card.jsx

import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title = "titulo por defecto", description = "descripcion por defecto", image, VideoFrame }) {
  return (
    <div className="Card">

        <Link to={title}>
          <img src={image} />
        </Link>

    </div>
  );
}

export default Card;