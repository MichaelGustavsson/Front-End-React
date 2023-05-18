import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VehicleList from './components/vehicles/VehicleList';
import VehicleDetails from './components/vehicles/VehicleDetails';
import vehicles from './data/vehicles.json';

// Importera css...
import './assets/css/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <article className='page'>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/vehicles'
              element={<VehicleList vehicles={vehicles} />}
            />
            <Route path='/vehicle-details' element={<VehicleDetails />} />
          </Routes>
        </section>
      </article>
    </BrowserRouter>
  );
};

export default App;
