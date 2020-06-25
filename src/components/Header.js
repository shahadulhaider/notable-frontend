import React from 'react';
import logo from '../img/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt='Notable Logo' height='40' />
      <h1>Notable</h1>
    </header>
  );
}

export default Header;
