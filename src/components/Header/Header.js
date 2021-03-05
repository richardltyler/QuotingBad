import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ goHome }) => {

  return (
    <header className="header">
        <h1 className="logo">
          <span className='logo-block'>Qu</span>oting<br></br>
          <span className='logo-block'>Ba</span>d
        </h1>
        <NavLink onClick={() => goHome()} to='/'>Home</NavLink>
    </header>
  )
}

export default Header;