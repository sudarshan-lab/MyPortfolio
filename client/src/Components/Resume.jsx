import React from 'react';
import cv from '../Assets/SKAMMU Resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="section">
      <h1 className="tex">Resume</h1>
      <div className="resume-preview">
        <iframe
          src={`${cv}#toolbar=0`} // Path to your resume PDF file
          title="Resume"
          style={{ width: '100%', height: '800px', border: '1px solid #ddd', borderRadius: '5px' }}
        />
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href={cv} download style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
            Download CV
          </a>
        </div>
      </div>
      <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>
    </section>
  );
};

export default Resume;
