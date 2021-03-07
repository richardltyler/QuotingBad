import React from 'react';
import { Link } from 'react-router-dom';
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