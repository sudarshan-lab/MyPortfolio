// src/Components/Navbar.js

import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ks from "../Assets/kslogo.jpg";
import "../CSS/Navbar.css";
import { Link as ScrollLink, scroller } from 'react-scroll';

const CNavbar = () => {
  const [navBackground, setNavBackground] = useState('#e8ecef');
  const [activeLink, setActiveLink] = useState('home');

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > window.innerHeight - 100) {
      setNavBackground('white');
    } else {
      setNavBackground('#e8ecef');
    }

    const sections = document.querySelectorAll("section");
    let currentSectionId = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY + 100; // Adjust for navbar height
        console.log("TOP: "+sectionTop+" Bottom: "+sectionBottom);
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSectionId = section.id;
      }
    });

    setActiveLink(currentSectionId);
  };


  const handleSetActive = (event) => {
    setActiveLink(event);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar fixed="top" style={{ backgroundColor: navBackground }} expand="lg">
      <Navbar.Brand href="#">
        <img src={ks} alt="KS Logo" className="ks-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ScrollLink 
            to="home" 
            smooth={true} 
            duration={250} 
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} 
            onClick={() => handleSetActive("home")}
          >Home</ScrollLink>
          <ScrollLink 
            to="experience" 
            smooth={true} 
            duration={250} 
            className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`} 
            onClick={() => handleSetActive("experience")}
          >Experience</ScrollLink>
         <ScrollLink 
            to="projects" 
            smooth={true} 
            duration={250} 
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} 
            onClick={() => handleSetActive("projects")}
          >Projects</ScrollLink>
          <ScrollLink 
            to="skills" 
            smooth={true} 
            duration={250} 
            className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} 
            onClick={() => handleSetActive('skills')}
          >Skills</ScrollLink>
          <ScrollLink 
            to="education" 
            smooth={true} 
            duration={250} 
            className={`nav-link ${activeLink === 'education' ? 'active' : ''}`} 
            onClick={() => handleSetActive("education")}
          >Education</ScrollLink>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={250} 
            className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} 
            onClick={() => handleSetActive("contact")}
          >Contact</ScrollLink>
          <ScrollLink 
            to="resume" 
            smooth={true} 
            duration={250} 
            className={`nav-link ${activeLink === 'resume' ? 'active' : ''}`} 
            onClick={() => handleSetActive("resume")}
          >Resume</ScrollLink>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link>
            <FontAwesomeIcon icon={faInstagram} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faLinkedin} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CNavbar;


