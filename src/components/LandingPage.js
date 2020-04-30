import React, { useState } from 'react';
import { not } from 'ramda';
import HomePage from './HomePage';
import Background from '../images/housesFlooding.gif';

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
    <div style={LandingPageStyles.mainContainer}>
      <div style={LandingPageStyles.showcase}>
        <h2 style={LandingPageStyles.h2}>Tides API</h2>
        <p style={LandingPageStyles.p}>Know when the flood is coming...</p>
        <button style={LandingPageStyles.button} onClick={() => setIsLandingPage(false)}>Read More</button>
      </div>
    </div >
  );
}

const LandingPageStyles = {
  mainContainer: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPostionX: "center",
    backgroundPostionY: "center",
    height: "100vh",
    color: "#fff"
  },
  showcase: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: "0 2rem",
    /* Overlay */
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  h2: {
    fontSize: "4rem",
    marginBottom: "0.75rem",
    lineHeight: "1.1"
  },
  p: {
    fontSize: "1.3rem",
    marginBottom: "2rem"
  },
  button: {
    display: "inline-block",
    color: "#fff",
    background: "#0424D9",
    padding: "0.5rem 2rem",
    border: "none",
    borderRadius: 5,
    textTransform: "uppercase",
  }
}

export default LandingPage;