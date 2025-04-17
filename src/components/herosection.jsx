// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import image from '../assets/Plant.jpeg'
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Be Safe Controls Environment</h1>
        <p>
          Professionally optimize interdependent intellectual interoperable correct best practices.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Let’s Talk 🌱</button>
          <button className="btn-secondary">Read More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={image} alt="Plant growing from soil" />
      </div>
    </section>
  );
};

export default HeroSection;
