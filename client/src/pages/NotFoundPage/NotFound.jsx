import React from 'react';
import { useNavigate } from 'react-router-dom';
import './404Page.scss';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <div className="stars">
        {Array.from({ length: 50 }).map((_, index) => (
          <div key={index} className="star" />
        ))}
      </div>
      
      <div className="content">
        <div className="astronaut">
          <div className="helmet">
            <div className="visor"></div>
          </div>
          <div className="body">
            <div className="arm left-arm"></div>
            <div className="arm right-arm"></div>
          </div>
        </div>
        
        <div className="message">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Lost in Space</h2>
          <p className="error-description">
            Oops! The page you're looking for has drifted off into the cosmos. 
            Don't worry, even astronauts get lost sometimes!
          </p>
          
          <button className="home-button" onClick={handleGoHome}>
            <span className="button-text">Return to Earth</span>
            <div className="button-icon">🚀</div>
          </button>
        </div>
        
        <div className="planet"></div>
      </div>
    </div>
  );
};

export default NotFound;