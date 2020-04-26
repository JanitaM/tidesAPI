import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="LandingPage-showcase-content">
        <h2 className="LandingPage-heading">Tides API</h2>
        <p className="LandingPage-lead">
          Know when the flood is coming...
        </p>
        <a href="/home" className="LandingPage-btn">Read More</a>
      </div>
    </div>
  );

}

export default LandingPage;