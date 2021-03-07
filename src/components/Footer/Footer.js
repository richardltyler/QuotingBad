import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/about' >About</Link>  
      <Link className='home-link' to='/' >Home</ Link>
    </footer>
  )
}

export default Footer;
