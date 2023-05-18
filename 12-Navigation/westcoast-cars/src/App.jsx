import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VehicleList from './components/vehicles/VehicleList';
import VehicleDetails from './components/vehicles/VehicleDetails';
import Navbar from './components/shared/Navbar';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

import vehicles from './data/vehicles.json';

// Importera css...
import './assets/css/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <article className='page'>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/vehicles'
              element={<VehicleList vehicles={vehicles} />}
            />
            <Route path='/vehicle-details' element={<VehicleDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </section>
      </article>
    </BrowserRouter>
  );
};

export default App;
