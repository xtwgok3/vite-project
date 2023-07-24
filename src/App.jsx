import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import vehicles from "./data/vehicles";
import { Helmet } from "react-helmet";

function App() {
  const [searchText, setSearchText] = useState("");
  
  // Filtrar la lista de vehículos en función del nombre de búsqueda
  const filteredVehicles = vehicles.filter((v) => v.name.toLowerCase().includes(searchText.toLowerCase()));
  
  const vehicleList = filteredVehicles.map((v) => {
    return <Card key={v.name} title={v.name} description={v.description} image={v.image} video={v.VideoFrame} />;
  });

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <Helmet>
        <title>Vite + React</title>
        <link rel="icon" type="image/svg" href="https://xtwgok3.github.io/vite-project/vite.svg" />
      </Helmet>

      <h1>Hola REACT</h1>
      
      <form>
        <label htmlFor="busqueda">Buscar:</label>
        <input
          type="text"
          id="busqueda"
          name="busqueda"
          placeholder="Buscar un canal"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>

      <div className="container">{vehicleList}</div>
    </div>
  );
}

export default App;
