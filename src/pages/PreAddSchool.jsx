import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './PreAddSchool.css'
import Header from '../components/Header'      
import SearchBar from '../components/SearchBar' 
import Illustration from '../assets/AddSchoolPage/illustration.svg'

import YellowBackground from '../assets/AddSchoolPage/Background.svg'
import HeaderQuote from '../assets/AddSchoolPage/AddSchoolHeader.svg'
import Login from '../assets/AddSchoolPage/Login.svg'
import CreateAccount from '../assets/AddSchoolPage/Create account.svg'
import SaveProgress from '../assets/AddSchoolPage/or to save your progress.svg'

// API key
const apiKey = '2Bsb40fhvOmx8Epam3lXOeTrwSZlw09vlxV2o2ZZ';

export default function PreAddSchool() {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [program, setProgram] = useState('')
  const [deadline, setDeadline] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (search === '') return;
    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}&school.name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.results || []);
      })
      .catch((err) => console.error('Error fetching colleges:', err));
  }, [search]);

  const handleSubmit = () => {
    if (!selectedCollege || !program || !deadline) return;
    // 读取已有学校
    const schools = JSON.parse(localStorage.getItem('schools') || '[]');
    schools.push({ college: selectedCollege, program, deadline });
    // 存回 localStorage
    localStorage.setItem('schools', JSON.stringify(schools));
    // 跳转回 SchoolListPage
    navigate('/school-list');
  };
    /* if (!college || !program || !deadline) return;
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
    } */

  // 输入框的 value 优先显示 selectedCollege，否则显示 search
  const inputValue = selectedCollege || search;

  return (
    <div className="add-school-page">
      <Header/>

      {/* Yellow Background*/}
        <div 
          className="background" 
          style={{ backgroundImage: `url(${YellowBackground})` }}
        ></div>

      {/* Add a School Header */}
        <div className="page-title">
          <img src={HeaderQuote} alt="Add School" />
        </div>

      <div className="add-school-form">
        <div className="form-group">
          <label htmlFor="school">School</label>
          <div className="description">Search or enter your own</div>
          <div className="search-bar" style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search colleges"
              value={inputValue}
              onChange={e => {
                setSearch(e.target.value);
                setSelectedCollege(''); // 清空已选，重新搜索
              }}
            />
            {searchResult.length > 0 && !selectedCollege && (
              <div className="search-results">
                <ul>
                  {searchResult
                    .filter(college =>
                      college.school.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((college, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setSelectedCollege(college.school.name);
                          setSearch(college.school.name); // 让输入框显示选中的学校
                          setSearchResult([]); // 选中后可清空下拉列表
                        }}
                      >
                        {college.school.name}
                      </li>
                    ))}
                </ul>
              </div>
            )}
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


        {/* botton */}
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

      {/* illustration & instructions */}
      <img
        src={Illustration}
        alt="illustration"
        className="hero-illustration"
      />

      <div className="instructions">
        <img
          src={Login}
          alt="Login"
          className="login"
          onClick={() => navigate('/login')}
        />
        <img
          src={CreateAccount}
          alt="Create account"
          className="create-account"
          onClick={() => navigate('/signup')}
        />
        <img
          src={SaveProgress}
          alt="or to save your progress"
          className="save-progress"
        />
      </div>
    </div>
    )
}