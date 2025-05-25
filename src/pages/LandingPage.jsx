import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './LandingPage.css';
import Header from '../HeaderParts/Header';
import SearchBar from '../HeaderParts/SearchBar';

import FireworkGroup from '../assets/LandingPage/FireworkGroup.svg';
import Envelop from '../assets/LandingPage/Envelop.svg';
import TrackTrackerBrand from '../assets/LandingPage/TrackTracker.svg';
import Slogan from '../assets/LandingPage/slogan.svg';
import AddSchoolButton from '../assets/LandingPage/AddSchoolButton.svg';
import SearchIcon from '../assets/LandingPage/Search.svg';

import topRight from '../assets/LandingPage/Columbia.svg';
import topLeft from '../assets/LandingPage/Stanford.svg';
import bottomRight from '../assets/LandingPage/UMich.svg';
import bottomLeft from '../assets/LandingPage/UCLA.svg';

export default function LandingPage() {
  const [search, setSearch] = useState('');
  const nav = useNavigate()

  return (
    <div className="landing-page">
      <Header />

      {/* 第一层：Firework  */}
      <div 
        className="bg-firework" 
        style={{ backgroundImage: `url(${FireworkGroup})` }}
      ></div>

      {/* 第二层：Envelop  */}
      <img
        className="bg-envelope"
        src={Envelop}
        alt="Envelope"
      />


      {/* Top Bar 
      <header className="top-bar">
        <div className="logo-group">
          <img src={Logo2} alt="Logo" className="logo-2" />
          <img src={TrackTrackerBrand} alt="TrackTracker" className="brand" />
        </div>
        <button className="menu-btn">
          <img src={MenuIcon} alt="Menu" />
        </button>
      </header>*/}

      <div className="landing-topbar">
        <img src={TrackTrackerBrand} alt="TrackTracker" className="brand" />
      </div>

      {/* Slogan */}
      <div className="headline">
        <img src={Slogan} alt="Make your applications easy!" />
      </div>

      {/* Add School */}
      <div className="add-school-wrapper">
        <img
          src={AddSchoolButton}
          alt="Add a school"
          className="add-school-btn"
          onClick={() => nav('/add-school')}
        />
        <img
          src={SearchIcon}
          alt="Search"
          className="search-icon"
        />
      </div>

      {/* School logos */}
      <div className = "add-logo-wrapper">
        <img
          src={topRight}
          alt = "Add school"
          className = "top-right"
          //TODO onClick {}
        />

        <img
          src={topLeft}
          alt = "Add school"
          className = "top-left"
          //TODO onClick {}
        />

        <img
          src={bottomRight}
          alt = "Add school"
          className = "bottom-right"
          //TODO onClick {}
        />

        <img
          src={bottomLeft}
          alt = "Add school"
          className = "bottom-left"
          //TODO onClick {}
        />
      </div>
      
    </div>
  );
}
