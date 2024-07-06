import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import MovieRecommendationPage from './components/MovieRecommendationPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/recommendations" element={<MovieRecommendationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
