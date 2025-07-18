import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SchoolCard from '../components/SchoolCard';
import AddButton from '../assets/Addbutton.svg';
import SchoolListHeader from '../assets/SchoollistHeader.svg';
import './SchoolList.css';
//import { SwipeableList, SwipeableListItem } from 'react-swipeable-list';
//import 'react-swipeable-list/dist/styles.css';
import CheckIcon from '../assets/Check.svg';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

export default function SchoolListPage() {
  const [username, setUsername] = useState('');
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  // 读取用户名和学校列表
  useEffect(() => {
    setUsername(localStorage.getItem('username') || 'User');
    setSchools(JSON.parse(localStorage.getItem('schools') || '[]'));
  }, []);

    // 监听 localStorage 变化
  useEffect(() => {
    const onStorage = () => {
      setSchools(JSON.parse(localStorage.getItem('schools') || '[]'));
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
  
  // 跳转到添加学校页面
  const handleAddSchool = () => {
    navigate('/add-school');
  };

  // 跳转到时间线页面
  const handleTimeline = () => {
    navigate('/timeline');
  };

  const handleCheck = (school, idx) => {
    // 这里可以做“标记完成”或“删除”或其他操作
    // 例如：将该学校从列表中移除
    const newSchools = [...schools];
    newSchools.splice(idx, 1);
    setSchools(newSchools);
    localStorage.setItem('schools', JSON.stringify(newSchools));
  };

  return (
    <div className="school-list-page">
      {/* topbar */}
      <Header />
        <div className="page-title">
          <img src={SchoolListHeader} alt="My School" />
        </div>

      {/* greetings */}
      <div className="greeting">
        {getGreeting()},<br />
        {username}
      </div>

      {/* Timeline botton */}
      <button className="timeline-btn" onClick={handleTimeline}>
        Timeline
      </button>

      {/* school card list */}
      <div className="school-list">
        {schools.length === 0 ? (
          <div style={{ color: '#aaa', fontSize: 18, textAlign: 'center', marginTop: 40 }}>
            No schools yet. Click the + button to add one!
          </div>
        ) : (
          <SwipeableList>
            {schools.map((school, idx) => (
              <SwipeableListItem
                key={idx}
                swipeRight={{
                  content: (
                    <div
                      style={{
                        background: '#246068',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        width: '70px'
                      }}
                    >
                      <img src={CheckIcon} alt="Check" style={{ width: 32, height: 32 }} />
                    </div>
                  ),
                  action: () => handleCheck(school, idx)
                }}
              >
                <SchoolCard {...school} />
              </SwipeableListItem>
            ))}
          </SwipeableList>
        )}
      </div>

      {/* add botton */}
      <button className="add-btn" onClick={handleAddSchool}>
        <img src={AddButton} alt="Add" className="add-btn-icon" />
      </button>
    </div>
  );
}