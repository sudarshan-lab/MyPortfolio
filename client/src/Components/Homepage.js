// src/Components/Homepage.js

import React from 'react';
import '../CSS/Homepage.css';
import photo from '../Assets/me1.png';

const Homepage = () => {
  return (
    <section id="home" className="home-page">
      <div className="hero">
        <div className="image-container">
          <img src={photo} alt="Your Photo" className="hero-img" />
        </div>
        <div className="hero-content">
          <h1>
            <span className="my-name">Hi there! I'm Sudarshan</span>
            <br />
            <div className="typing-container">Full Stack Developer</div>
          </h1>
          <div className="about-me">
            <h2>About Me</h2>
            <p>
              I'm a tech enthusiast actively seeking internship opportunities. I love listening to songs, reading books, and playing billiards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
