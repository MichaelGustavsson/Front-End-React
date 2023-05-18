import { Link, NavLink } from 'react-router-dom';

import './navbar.css';
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='container'>
          <ul className='menu'>
            <li className='logo'>
              <Link to='/'>
                <span className='fa-solid fa-cars'></span> Westcoast Cars
              </Link>
            </li>
            <li className='toggle'>
              <input className='menu-btn' type='checkbox' id='menu-btn' />
              <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
              </label>
            </li>
            <li className='menu-item'>
              <NavLink to='/'>Start</NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to='/vehicles'>Våra bilar</NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to='/about'>Om Oss</NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to='/contact'>Kontakta Oss</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
