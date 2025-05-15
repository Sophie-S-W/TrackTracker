import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddSchoolPage.css'
import Header from '../components/Header'      
import SearchBar from '../components/SearchBar' 
import Illustration from '../assets/illustration.svg'

export default function AddSchoolPage() {
  const [college, setCollege] = useState('')
  const [program, setProgram] = useState('')
  const [deadline, setDeadline] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!college || !program || !deadline) return;
    try {
      const res = await fetch('/api/colleges', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: college, program, deadline })
      });
      if (!res.ok) throw new Error('保存失败');
      navigate('/') // 用 navigate 跳回首页
    } catch (err) {
      console.error(err);
      alert('添加学校失败：' + err.message);
    }
  };

  return (
    <div className="add-school-page">
      <Header title="Add School" />

      <div className="add-school-form">
        <div className="form-group">
          <label htmlFor="school">School</label>
          <div className="search-input-wrapper">
            <SearchBar
              id="school"
              value={college}
              onChange={e => setCollege(e.target.value)}
              placeholder="Search or enter your own"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="program">Program</label>
          <input
            id="program"
            type="text"
            value={program}
            onChange={e => setProgram(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="deadline">Deadline</label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
          />
        </div>

        {/* 按钮组 */}
        <div className="button-group">
          <button
            type="button"
            className="btn-save"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            type="button"
            className="btn-cancel"
            onClick={() => navigate(-1)}  // 直接返回上一个页面
          >
            Cancel
          </button>
        </div>
      </div>

      {/* 底部插画 */}
      <img
        src={Illustration}
        alt="illustration"
        className="hero-illustration"
      />
    </div>
  )
}