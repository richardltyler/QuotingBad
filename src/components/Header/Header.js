import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ endGame, toggleHome }) => {

  return (
    <header className="header">
        <h1 className="logo">
          <span className='logo-block'>Qu</span>oting<br></br>
          <span className='logo-block'>Ba</span>d
        </h1>
        <Link 
          className='home-link'
          onClick={() => {
            endGame();
            toggleHome();
          }}
          to='/'
        >Home</ Link>
    </header>
  )
}

export default Header;