import React from "react";
import "./VehicleView.css";
import { Helmet } from "react-helmet";

function base64Decode(encodedString) {
  return atob(encodedString);
}

function createDataURL(decodedVideoFrame) {
  const encodedHTML = encodeURIComponent(decodedVideoFrame);
  return `data:text/html;charset=utf-8,${encodedHTML}`;
}

function VehicleView({ vehicle }) {
  // Decodificar la cadena Base64 contenida en vehicle.VideoFrame
  const decodedVideoFrame = base64Decode(vehicle.VideoFrame);

  // Crear URL de Datos (Data URL) a partir del contenido decodificado
  const dataURL = createDataURL(decodedVideoFrame);

  return (
    <div className="VehicleView">
      {/* Resto del contenido omitido */}

      <Helmet>
        <title>{vehicle.name}</title>
        <link rel="icon" type="image/png" href={vehicle.image} />
      </Helmet>

      <iframe
        allow="encrypted-media"
        src={dataURL} // Utiliza la Data URL como src
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
