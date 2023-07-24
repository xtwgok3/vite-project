import './App.css';
import Card from './components/Card.jsx';
import vehicles from './data/vehicles.js';

function App() {
  const vehicleList = vehicles.map((v) => {
    return <Card title={v.name} description={v.description} />;
  });

  return (
    <div className="App">
      <h1>Hola REACT</h1>
      <div className="container">{vehicleList}</div>
    </div>
  );
}

export default App;
