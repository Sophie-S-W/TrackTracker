import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo2 from '../assets/Logo-2.svg';
import CloseIcon from '../assets/Menu/close.svg';
import './Menu.css';

export default function Menu({ onClose }) {
  const navigate = useNavigate();

  // 登出逻辑
  const handleLogout = () => {
    // 清除本地登录信息
    localStorage.removeItem('username');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    // 跳转到landing?
    navigate('/');
    if (onClose) onClose();
  };

  return (
    <div className="menu-container">
      {/* 背景 */}
      <div className="menu-background"></div>
      {/* 内容区域 */}
      <div className="menu-content">
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
              <Link to="/school-list" onClick={onClose}>My Schools</Link>
            </li>
            <li className="divider" />
            <li>
              <a href="#" onClick={handleLogout}>Log Out</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}