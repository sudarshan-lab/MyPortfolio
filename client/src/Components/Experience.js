import React from 'react';
import '../CSS/Experience.css';
import experience from '../Assets/experience.jpg';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h1 className='tex'>My Professional Experience</h1>
      <p>I worked as an Associate Software Engineer in Micron Technologies for 2 years.</p>
      <br />
      <div className="content">
        <div className="left">
          <div className="section">
            <div className="job">
              <h2>Associate Software Engineer</h2>
              <h3>Micron Technologies, Hyderabad, IN | 2022/01 – 2024/01</h3>
              <ul>
                <li>Designed and developed dynamic, responsive websites using AngularJS, .NET and strong knowledge in software Development Life Cycle.</li>
                <li>Conducted technical analysis to optimize code performance and development workflows.</li>
                <li>Implemented REST APIs for efficient data retrieval and enhancing database functionality.</li>
                <li>Orchestrated deployments through Azure pipelines and BuildMaster, ensuring smooth project delivery.</li>
                <li>Developed SharePoint sites and workflows used by global customers, enhancing collaboration and productivity.</li>
                <li>Automated job scheduling using Windows Task Scheduler and ActiveBatch, improving operational efficiency.</li>
                <li>Utilized native SQL queries and stored procedures for efficient data management and migration.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={experience} alt="Experience" className="experience-image" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
