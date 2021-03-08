import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/about' >About</Link>  
    </footer>
  );
}

export default Footer;
