import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ goHome, toggleHome, isHome }) => {
  return (
    <footer className='footer'>
      <Link 
        to='/about'
        onClick={() => {
          toggleHome();
        }}
        >About</Link>
        
        {!isHome &&
          <Link 
            className='home-link'
            onClick={() => {
              goHome();
            }}
            to='/'
          >Home</ Link>
          }
    </footer>
  )
}

export default Footer;

Footer.propTypes = {
  toggleHome: PropTypes.func.isRequired,
}