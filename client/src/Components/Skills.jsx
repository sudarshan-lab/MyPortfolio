import React from 'react';
import '../CSS/Skills.css'; // Ensure you have this CSS file for styling

// Import images
import JavaScriptLogo from '../Assets/JavaScript.png';
import AngularJSLogo from '../Assets/AngularJS.png';
import HTMLLogo from '../Assets/HTML.jpg';
import ReactJSLogo from '../Assets/ReactJS.png';
import CSharpLogo from '../Assets/CSharp.png';
import NETLogo from '../Assets/NET.jpeg';
import JavaLogo from '../Assets/Java.png';
import NodeJSLogo from '../Assets/NodeJS.svg';
import MongoDBLogo from '../Assets/MongoDB.png';
import PythonLogo from '../Assets/Python.webp';
import MySQLLogo from '../Assets/MySQL.jpg';

// Import your profile picture
import ProfilePicture from '../Assets/target.png';

const Skills = () => {
  // Define front end and back end skills with logos
  const frontendSkills = [
    { name: 'JavaScript', logo: JavaScriptLogo },
    { name: 'AngularJS', logo: AngularJSLogo },
    { name: 'HTML', logo: HTMLLogo },
    { name: 'ReactJS', logo: ReactJSLogo }
  ];

  const backendSkills = [
    { name: 'C#', logo: CSharpLogo },
    { name: '.NET MVC', logo: NETLogo },
    { name: 'Java', logo: JavaLogo },
    { name: 'NodeJS', logo: NodeJSLogo },
    { name: 'MongoDB', logo: MongoDBLogo },
    { name: 'Python', logo: PythonLogo },
    { name: 'MySQL', logo: MySQLLogo }
  ];

  // Combine all skills for display
  const allSkills = [...frontendSkills, ...backendSkills];

  // Function to render logos for each skill
  const renderSkillLogos = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="skill-card">
        <img src={skill.logo} alt={skill.name} className="skill-logo" />
        <div className="skill-name">{skill.name}</div>
      </div>
    ));
  };

  return (
    <section id="skills" className='skills'>
      <h1 className='tex'>Skills</h1>
      <div className="skills-layout">
        <div className="profile-picture">
          <img src={ProfilePicture} alt="Profile" />
        </div>
        <div className="skills-container">
          <div className="skill-grid">
            {renderSkillLogos(allSkills)}
          </div>
        </div>
      </div>
      <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>
    </section>
  );
};

export default Skills;
