import Home from './components/Home';
import vehicles from './data/vehicles.json';

// Importera css...
import './assets/css/style.css';

const App = () => {
  return (
    <article className='page'>
      <Home vehicles={vehicles} />
    </article>
  );
};

export default App;
