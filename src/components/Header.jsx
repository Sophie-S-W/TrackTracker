import React, { useState } from 'react';
import './Header.css';

import Logo2 from '../assets/Logo-2.svg';
import MenuIcon from '../assets/Menu.svg';
import PreLoginMenu from './PreLoginMenu';

export default function Header({ title, onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (onMenuClick) {
      onMenuClick();
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <header className="app-header">
        <div className="header-left">
          <img src={Logo2} alt="Logo" className="header-logo" />
          {title && <span className="header-title">{title}</span>}
        </div>
        <button className="header-menu-btn" onClick={handleMenuClick}>
          <img src={MenuIcon} alt="Menu" />
        </button>
      </header>

      {menuOpen && (
          <PreLoginMenu onClose={() => setMenuOpen(false)} />
      )}
    </>
  );
}