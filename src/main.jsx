import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Utilizando BrowserRouter
import vehicles from './data/vehicles.js';
import VehicleView from './views/VehicleView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/vite-project/"> {/* Ajusta el basename para que funcione en GitHub Pages */}
      <Route exact path="/" component={App} /> {/* Utiliza Route para renderizar el componente App */}
      {vehicles.map((vehicle) => (
        <Route
          key={vehicle.name}
          path={`/${vehicle.name}`}
          render={() => <VehicleView vehicle={vehicle} />}
        />
      ))}
    </Router>
  </React.StrictMode>
);
