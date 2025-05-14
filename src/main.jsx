import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // React 18 API
import './index.css';  // CSS
import App from './App';  // App组件

// 获取并渲染 React 应用
const root = createRoot(document.getElementById('app')); 
root.render(
  <StrictMode>
    <App />  {/* 渲染 App 组件 */}
  </StrictMode>
);
// src/App.jsx
import React from 'react';
import './App.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="bg-firework" />
      <div className="bg-envelope" />

      <header className="top-bar">
        <img src="/src/assets/Logo.svg" alt="Logo" className="logo" />
        <button className="menu-btn" />
      </header>

      <h1 className="headline">Make your applications easy!</h1>

      <button className="search-button">
        Add a school
        <span className="icon" />
      </button>

      {/* 各校标和加号 */}
      <div className="college-ucla" />
      <div className="plus-icon plus-ucla" />

      <div className="college-stanford" />
      <div className="plus-icon plus-stanford" />

      <div className="college-columbia" />
      <div className="plus-icon plus-columbia" />

      <div className="college-umich" />
      <div className="plus-icon plus-umich" />
    </div>
  );
}