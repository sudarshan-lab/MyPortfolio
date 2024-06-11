// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Homepage from './Components/Homepage';
import Experience from './Components/Experience';
import './App.css';
import CNavbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <CNavbar />
        <div className="main-content">
          <Homepage />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Resume />
          {/* Add other sections if needed */}
        </div>
      </div>
    </Router>
  );
};

export default App;
