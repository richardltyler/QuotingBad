import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ endGame, goHome }) => {
  return (
    <footer className='footer'>
      <Link 
        to='/about'
        onClick={() => {
          endGame();
          goHome();
        }}
        >About</Link>
    </footer>
  )
}

export default Footer;