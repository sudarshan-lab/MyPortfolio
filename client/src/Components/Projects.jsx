import React from 'react';
import '../CSS/Projects.css';
import docp from '../Assets/docp.png';

const projects = [
  {
    title: 'DOCP',
    image: docp,
    description: 'A document parsing tool that parses text from any document.',
    github: 'https://github.com/sudarshan-lab/DocP-Document-Parsing'
  },
  
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="section-title">My Projects</h1>
      <p>Check out some of the projects I've worked on.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="overlay">
                  <div className="overlay-text">
                    {project.description}
                    <br />
                    <span className="view-code">View Code</span>
                  </div>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
            </a>
          </div>
        ))}
      </div>
      <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>
    </section>
  );
};

export default Projects;
