import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ toggleHome, isHome }) => {

  return (
    <header className="header">
        <h1 className="logo">
          <span className='logo-block'>Qu</span>oting<br></br>
          <span className='logo-block'>Ba</span>d
        </h1>
        {!isHome &&
          <Link 
            className='home-link'
            onClick={() => {
              toggleHome();
            }}
            to='/'
          >Home</ Link>
        }
    </header>
  )
}

export default Header;

Header.propTypes = {
  toggleHome: PropTypes.func.isRequired,
  isHome: PropTypes.func.isRequired,
}