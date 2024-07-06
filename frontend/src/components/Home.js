import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-bg">
      <div className="home-content">
        <h1>Welcome to the Movie Recommendation System</h1>
        <div className="home-buttons">
          <Link to="/login" className="home-button">Login</Link>
          <Link to="/signup" className="home-button">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
