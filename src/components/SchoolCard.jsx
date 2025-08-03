import React from 'react';
import EditIcon from '../assets/edit.svg';
import './SchoolCard.css';
import { useNavigate } from 'react-router-dom';

// date format
function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const yy = String(d.getFullYear()).slice(-2);
  return `${mm}/${dd}/${yy}`;
}

export default function SchoolCard({ college, program, deadline, id }) {
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/edit-school/${id}`); // navigate to edit page, with school id
  };

  return (
    <div className="school-card">
      <div className="school-deadline">{formatDate(deadline)}</div>
      <div className="school-name">{college}</div>
      <div className="school-program">{program}</div>
      <img
        src={EditIcon}
        alt="Edit"
        className="edit-btn-icon"
        onClick={handleEdit}
      />
    </div>
  );
}