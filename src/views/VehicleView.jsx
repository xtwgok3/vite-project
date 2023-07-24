import React from "react";
import "./VehicleView.css";
import { Helmet } from "react-helmet";

function VehicleView({ vehicle }) {
  return (
    <div className="VehicleView">
      {/*<h1>{vehicle.name}</h1>
      <h2>{vehicle.description}</h2>

      <img src={vehicle.image} alt={vehicle.name + " image"} />*/}
      
      <Helmet>
        <title>{vehicle.name}</title>
        <link rel="icon" type="image/png" href={vehicle.image} />
      </Helmet>

      <iframe
        allow="encrypted-media"
        src={vehicle.VideoFrame}
        name="iframe"
        scrolling="no"
        allowFullScreen
        alt={vehicle.name}
      ></iframe>

    </div>
  );
}

export default VehicleView;