import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import EditIcon from '../assets/edit.svg';
import CheckIcon from '../assets/check.svg';
import AddButton from '../assets/Addbutton.svg';
import SchoolListHeader from '../assets/SchoollistHeader.svg';
import './TimelinePage.css';
import { useNavigate } from 'react-router-dom';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

export default function TimelinePage() {
  const [username, setUsername] = useState('');
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(localStorage.getItem('username') || 'User');
    setSchools(JSON.parse(localStorage.getItem('schools') || '[]'));
  }, []);

  // 按DDL排序
  const sortedSchools = [...schools].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <div className="timeline-page">
      <Header />
        <div className="page-title">
          <img src={SchoolListHeader} alt="My School" />
        </div>
      <div className="greeting">
        {getGreeting()},<br />
        {username}
      </div>
      <button className="list-btn" onClick={() => navigate('/school-list')}>List</button>
      {/* 时间线竖线 */}
      <div className="timeline-vertical"></div>
      {/* 时间线条目 */}
      <div className="timeline-list">
        {sortedSchools.map((school, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-date">{formatDate(school.deadline)}</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-school">{school.college}</div>
              <div className="timeline-program">{school.program}</div>
            </div>
            <img
              src={EditIcon}
              alt="Edit"
              className="timeline-edit"
              onClick={() => navigate(`/edit-school/${school.id || idx}`)}
            />
            <img
              src={CheckIcon}
              alt="Check"
              className="timeline-check"
              // onClick={...}
            />
          </div>
        ))}
      </div>
      <button className="add-btn" onClick={() => navigate('/add-school')}>
        <img src={AddButton} alt="Add" className="add-btn-icon" />
      </button>
    </div>
  );
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const yy = String(d.getFullYear()).slice(-2);
  return `${mm}/${dd}/${yy}`;
}