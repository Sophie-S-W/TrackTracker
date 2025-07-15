import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import LandingPage from './pages/Landing'
import PreAddSchoolPage from './pages/PreAddSchool.jsx'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'
import SchoolListPage from './pages/SchoolList.jsx'
import TimelinePage from './pages/Timeline.jsx'
import AddSchoolPage from './pages/AddSchool.jsx' 
import EditSchoolPage from './pages/EditSchool.jsx';
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('app'))
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pre-add-school" element={<PreAddSchoolPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/school-list" element={<SchoolListPage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/add-school" element={<AddSchoolPage />} />
      <Route path="/edit-school/:id" element={<EditSchoolPage />} />
    </Routes>
  </HashRouter>
)