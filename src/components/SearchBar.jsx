import React from 'react';
import './SearchBar.css';
import SearchIcon from '../assets/LandingPage/Search.svg';

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-bar__input"
      />
      <img src={SearchIcon} alt="搜索" className="search-bar__icon" />
    </div>
  )
}