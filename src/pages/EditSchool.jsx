import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Blob from '../assets/Blob.svg';
import Illustration from '../assets/EditIllustration.svg';
import Headerquote from '../assets/EditSchool.svg';
import './EditSchool.css';

export default function EditSchool() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [school, setSchool] = useState({ college: '', program: '', deadline: '' });

  // 读取当前学校信息
  useEffect(() => {
    const schools = JSON.parse(localStorage.getItem('schools') || '[]');
    const current = schools[Number(id)];
    console.log('edit id:', id, 'current:', current);
    if (current) setSchool(current);
  }, [id]);

  // 表单输入处理
  const handleChange = (e) => {
    setSchool({ ...school, [e.target.name]: e.target.value });
  };

  // 保存修改
  const handleSave = () => {
    const schools = JSON.parse(localStorage.getItem('schools') || '[]');
    schools[id] = school;
    localStorage.setItem('schools', JSON.stringify(schools));
    navigate('/school-list');
  };

  // 删除
  const handleDelete = () => {
    const schools = JSON.parse(localStorage.getItem('schools') || '[]');
    schools.splice(id, 1);
    localStorage.setItem('schools', JSON.stringify(schools));
    navigate('/school-list');
  };

  return (
    <div className="edit-school-page">
      <Header />
      <div className="background" style={{ background: '#fadb67' }}></div>
      <div className="page-title">
        <img src={Headerquote} alt="Edit School" />
      </div>
      <form className="edit-school-form">
        <div className="form-group">
          <label>School</label>
          <div className="description">Search or enter your own</div>
          <input
            name="college"
            type="text"
            value={school.college}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Program</label>
          <input
            name="program"
            type="text"
            value={school.program}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input
            name="deadline"
            type="date"
            value={school.deadline}
            onChange={handleChange}
          />
        </div>
        <div className="button-group">
          <button className="btn-save" onClick={handleSave}>Save</button>
          <div className="button-row">
            <button className="btn-cancel" onClick={() => navigate('/school-list')}>Cancel</button>
            <button className="btn-cancel" style={{ background: '#e29000' }} onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </form>
      <img src={Blob} alt="illustration" className="Blob" />
      <img src={Illustration} alt="illustration" className="hero-illustration" />
    </div>
  );
}
