import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        <h2>Tides API</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#join">Join</a></li>
          <li><a href="#signin">Sign In</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;