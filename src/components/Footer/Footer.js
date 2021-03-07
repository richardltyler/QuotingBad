import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ toggleHome }) => {
  return (
    <footer className='footer'>
      <Link 
        to='/about'
        onClick={() => {
          toggleHome();
        }}
        >About</Link>
    </footer>
  )
}

export default Footer;

Footer.propTypes = {
  toggleHome: PropTypes.func.isRequired,
}