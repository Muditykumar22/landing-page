// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student" element={<RedirectToStudent />} />
        <Route path="/teacher" element={<RedirectToTeacher />} />
      </Routes>
    </Router>
  );
};

const RedirectToStudent = () => {
  window.location.href = 'STUDENT_PAGE_URL';
  return null;
};

const RedirectToTeacher = () => {
  window.location.href = 'TEACHER_PAGE_URL';
  return null;
};

export default App;
