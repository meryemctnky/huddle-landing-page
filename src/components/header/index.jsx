import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css';

const Header = () => {
  return (
    <header data-testid='header' className='header'>
      <img data-testid='logo' className='logo' src={logo} alt='logo' />
    </header>
  );
};

export default Header;
