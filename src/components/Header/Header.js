import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

const Header = ({ location }) => {

  return (
    <header className='header'>
      <h1 className='logo'>
        <span className='logo-block'>Qu</span>oting<br></br>
        <span className='logo-block'>Ba</span>d
      </h1>
      {location.pathname !== '/' 
        && <Link className='home-link' to='/'>Home</ Link>}
    </header>
  );
}

export default withRouter(Header);

