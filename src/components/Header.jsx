import React from 'react';
import './Header.css';

import Logo2 from '../assets/Logo-2.svg';
import MenuIcon from '../assets/Menu.svg';

export default function Header({ title }) {
  return (
    <header className="app-header">
      <div className="header-left">
        <img src={Logo2} alt="Logo" className="header-logo" />
        {title && <span className="header-title">{title}</span>}
      </div>
      <button className="header-menu-btn">
        <img src={MenuIcon} alt="Menu" />
      </button>
    </header>
  );
}