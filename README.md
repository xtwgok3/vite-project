## Instrucciones para ejecutar el proyecto

1. Abrir la terminal
2. Correr los siguientes comandos
   ```
   npm install
   npm run dev
   ```
3. Abrir el link que aparece en la consola


4. edicion para que funcione en una pagina dinamica por nombre elemento
 ```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import vehicles from './data/vehicles.js';
import VehicleView from './views/VehicleView.jsx';

const routes = [
  {
    path: "/vite-project/", // Ruta para la página de inicio, agrega el basename aquí
    element: <App />,
  },
];

vehicles.forEach((vehicle) => {
  routes.push({
    path: `/vite-project/${vehicle.name}`, // Agrega el basename antes del nombre del vehículo
    element: <VehicleView vehicle={vehicle} />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

   ```
