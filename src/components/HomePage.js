import React from 'react';
import Navbar from './Navbar';
import About from './About';
import TryAPI from './TryAPI';

const HomePage = ({ setIsLandingPage }) => {
  return (
    <main>
      <Navbar />
      <About />
      <TryAPI />
    </main>
  );
}


const HomePageStyles = {

}

export default HomePage;