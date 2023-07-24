import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import vehicles from './data/vehicles.js';

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
