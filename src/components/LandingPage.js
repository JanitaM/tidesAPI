import React, { useState } from 'react';
import { not } from 'ramda';
import './LandingPage.css';
import HomePage from './HomePage';

const LandingPage = () => {
  const [isLandingPage, setIsLandingPage] = useState(true);

  if (not(isLandingPage)) {
    return (
      <main>
        <HomePage
          setIsLandingPage={setIsLandingPage}
        />
      </main>
    );
  }

  return (
    <div className="LandingPage">
      <div className="LandingPage-showcase">
        <h2>Tides API</h2>
        <p>Know when the flood is coming...</p>
        <button onClick={() => setIsLandingPage(false)}>Read More</button>
      </div>
    </div >
  );
}

export default LandingPage;