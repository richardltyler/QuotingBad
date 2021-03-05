import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = ({ showQuote }) => {
  return (
    <footer className='footer'>
      <NavLink 
        to='/about'
        onClick={() => showQuote()}
        >About</NavLink>
    </footer>
  )
}

export default Footer;