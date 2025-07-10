import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './PreAddSchool.css'
import Header from '../components/Header'      
import SearchBar from '../components/SearchBar' 
import Illustration from '../assets/AddSchoolPage/illustration.svg'

import YellowBackground from '../assets/AddSchoolPage/Background.svg'
import HeaderQuote from '../assets/AddSchoolPage/AddSchoolHeader.svg'

const apiKey = '2Bsb40fhvOmx8Epam3lXOeTrwSZlw09vlxV2o2ZZ';

export default function AddSchool() {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [program, setProgram] = useState('');
  const [deadline, setDeadline] = useState('');
  const navigate = useNavigate()

  // 搜索学校
  useEffect(() => {
    if (search === '') {
      setSearchResult([]);
      return;
    }
    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}&school.name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.results || []);
      })
      .catch((err) => console.error('Error fetching colleges:', err));
  }, [search]);

  // 保存学校
  const handleSave = () => {
    if (!selectedCollege || !program || !deadline) return;
    const schools = JSON.parse(localStorage.getItem('schools') || '[]');
    schools.push({ college: selectedCollege, program, deadline });
    localStorage.setItem('schools', JSON.stringify(schools));
    // 跳转或清空表单等
    setSelectedCollege('');
    setProgram('');
    setDeadline('');
    setSearch('');
    setSearchResult([]);
    alert('School added!');
    navigate('/school-list');
  };

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
                setSelectedCollege('');
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
                          setSearch(college.school.name);
                          setSearchResult([]);
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
            onClick={handleSave}
            disabled={!selectedCollege || !program || !deadline}
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

      {/* illustration */}
      <img
        src={Illustration}
        alt="illustration"
        className="hero-illustration"
      />
    </div>
  );
}