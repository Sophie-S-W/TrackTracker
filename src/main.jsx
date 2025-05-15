import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AddSchoolPage from './pages/AddSchoolPage'
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('app'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/add-school" element={<AddSchoolPage />} />
    </Routes>
  </BrowserRouter>
)