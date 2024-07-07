// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToStudent = () => {
    navigate('/student');
  };

  const navigateToTeacher = () => {
    navigate('/teacher');
  };

  return (
    <div className="landing-container">
      <div className="header">
        <h1>Welcome</h1>
      </div>
      <div className="options-container">
        <div className="option" onClick={navigateToStudent}>
          Are you a Student?
        </div>
        <div className="option" onClick={navigateToTeacher}>
          Are you a Teacher?
        </div>
      </div>
      <div className="enroll-button-container">
        <button className="enroll-button">Enroll now</button>
      </div>
    </div>
  );
};

export default LandingPage;
