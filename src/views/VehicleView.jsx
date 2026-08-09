import React from "react";
import "./VehicleView.css";
import { Helmet } from "react-helmet";

function VehicleView({ vehicle }) {
  if (vehicle.external) {
    return (
      <div className="VehicleView external-content">
        <Helmet>
          <title>{vehicle.description}</title>
        </Helmet>
        <h1>{vehicle.name}</h1>
        <p>Este sitio no permite mostrarse dentro de otro sitio.</p>
        <a href={vehicle.VideoFrame} target="_blank" rel="noopener noreferrer">
          Abrir contenido
        </a>
      </div>
    );
  }

  return (
    <div className="VehicleView">
      {/*<h1>{vehicle.name}</h1>
      <h2>{vehicle.description}</h2>

      <img src={vehicle.image} alt={vehicle.name + " image"} />*/}

      <Helmet>
        <title>{vehicle.description}</title>
        <link rel="icon" type="image/png" href={vehicle.image} />
      </Helmet>

      <iframe
        allow="encrypted-media; fullscreen; picture-in-picture"
        sandbox="allow-scripts allow-same-origin allow-forms allow-presentation allow-downloads"
        referrerPolicy="no-referrer"
        src={vehicle.VideoFrame}
        title={vehicle.name}
        name="iframe"
            allowFullScreen
      ></iframe>

    </div>
  );
}

export default VehicleView;
