import React from "react";
import "./VehicleView.css";
import { Helmet } from "react-helmet";

function base64Decode(encodedString) {
  return atob(encodedString);
}

function VehicleView({ vehicle }) {
  const asd = base64Decode(vehicle.VideoFrame);
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
        src={asd}
        name="iframe"
        scrolling="no"
        allowFullScreen
        alt={vehicle.name}
        sandbox="allow-same-origin"
      ></iframe>

    </div>
  );
}

export default VehicleView;