import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import vehicles from './data/vehicles.js';
import VehicleView from './views/VehicleView.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
  },
];

vehicles.forEach((vehicle) => {
  routes.push({
    path: vehicle.name,
    element: <VehicleView vehicle={vehicle} />,
  });
});

// Ajusta el basename para que funcione en GitHub Pages
const router = createBrowserRouter({ basename: '/vite-project', routes });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Agrega un elemento raíz aquí, por ejemplo, un div */}
    <div>
      <RouterProvider router={router}>
        {/* También puedes poner otros componentes o elementos aquí si es necesario */}
      </RouterProvider>
    </div>
  </React.StrictMode>
);
