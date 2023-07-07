import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Authentication/firebase'; 
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleButton = () => {
    const user = auth.currentUser;
    if (user) {
      navigate('/PublishPage');
    } else {
      navigate('/DiaglogBox');

    }
  };

  return (
    <div className="container">
      <div className="right-card">
        <img src="logo3.png" alt="Blog Image" className="logo" />
      </div>
      <div className="left-card">
        <div className="description">
          <p>Welcome to BlogVerse, where you can share your thoughts and ideas with the world. Join our community of writers today!</p>
        </div>
        <div className="cta">
          <button onClick={handleButton} className="publish-btn">Publish Article</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
