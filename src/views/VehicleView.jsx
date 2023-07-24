import React from "react";
import "./VehicleView.css";
import { Helmet } from "react-helmet";

function base64Decode(encodedString) {
  return atob(encodedString);
}

function createBlobURL(decodedVideoFrame) {
  const blob = new Blob([decodedVideoFrame], { type: "text/html" });
  return URL.createObjectURL(blob);
}

function VehicleView({ vehicle }) {
  // Decodificar la cadena Base64 contenida en vehicle.VideoFrame
  const decodedVideoFrame = base64Decode(vehicle.VideoFrame);

  // Crear URL Blob a partir del contenido decodificado
  const blobURL = createBlobURL(decodedVideoFrame);

  return (
    <div className="VehicleView">
      {/* Resto del contenido omitido */}

      <Helmet>
        <title>{vehicle.name}</title>
        <link rel="icon" type="image/png" href={vehicle.image} />
      </Helmet>

      <iframe
        allow="encrypted-media"
        src={blobURL} // Utiliza la URL Blob como src
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
