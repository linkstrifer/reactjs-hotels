import React from 'react';
import './Header.css';
import logo from './../../assets/images/logo.svg';

const HeaderComponent = () => (
  <header className="header">
    <img
      src={logo}
      className="header-logo"
      alt="almundo.com"
    />
  </header>
);

export default HeaderComponent;
