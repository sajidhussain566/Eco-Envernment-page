// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🌿Eco Envernment</div>
      <nav className="nav">
        <ul>
          <li><a className='border border-e-red-400' href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button className="quote-btn">Get A Quote</button>
    </header>
  );
};

export default Header;
