import React from 'react';
import './Header.css';

const HeaderComponent = () => (
  <header className="header">
    <img
      src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
      className="header-logo"
      alt="almundo.com"
    />
  </header>
);

export default HeaderComponent;
