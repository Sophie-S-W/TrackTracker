import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AddSchoolPage from './pages/AddSchoolPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import SchoolListPage from './pages/SchoolListPage.jsx'
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('app'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/add-school" element={<AddSchoolPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/school-list" element={<SchoolListPage />} />
    </Routes>
  </BrowserRouter>
)