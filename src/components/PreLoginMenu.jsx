import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo2 from '../assets/Logo-2.svg';
import CloseIcon from '../assets/Menu/close.svg';
import Background from '../assets/Menu/Background.svg';
import './PreLoginMenu.css';

export default function PreLoginMenu({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="prelogin-menu-container">
      {/* 背景 */}
      <img 
        src={Background}
        alt="Menu Background"
        className="menu-background"
      />

      {/* 内容区域 */}
      <div className="prelogin-menu-content">
        {/* header */}
        <div className="app-header">
          <div className="header-left">
            <img src={Logo2} alt="Logo" className="header-logo" />
          </div>
          <button className="header-menu-btn" onClick={onClose}>
            <img src={CloseIcon} alt="Close" />
        </button>
      </div>

        {/* 菜单列表 */}
        <nav className="menu-nav">
        <ul className="menu-list">
          <li>
            <Link to="/" onClick={onClose}>Home</Link>
          </li>
          <li>
            <Link to="/add-school" onClick={onClose}>Add School</Link>
          </li>
          <li className="divider" />
          <li>
            <Link to="/login" onClick={onClose}>Log In</Link>
          </li>
          <li>
            <Link to="/signup" onClick={onClose}>Sign Up</Link>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}