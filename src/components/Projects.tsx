import React from 'react';
import projectImage1 from '../images/Project01.png';
import projectImage2 from '../images/Project02.png';
import projectImage3 from '../images/Project03.png';
import projectImage4 from '../images/Project04.png';
import projectImage5 from '../images/Project05.png';
import projectImage6 from '../images/Project06.png';
import projectImage7 from '../images/Project07.png';

const Projects: React.FC = () => {
  // First row (3 projects)
  const firstRow = [
    { id: 1, title: 'Project 1', image: projectImage1, codeLink: 'https://github.com/Mark-LaRose/Take5-Movies', projectLink: 'https://take5-movies.onrender.com/' },
    { id: 2, title: 'Project 2', image: projectImage2, codeLink: 'https://github.com/Mark-LaRose/Zero-Amp-Music' },
    { id: 3, title: 'Project 3', image: projectImage3, codeLink: 'https://github.com/Mark-LaRose/Math', projectLink: 'https://mark-larose.github.io/Math/' },
  ];

  // Second row (4 projects)
  const secondRow = [
    { id: 4, title: 'Project 4', image: projectImage4, codeLink: 'https://github.com/Mark-LaRose/King-s-Chess', projectLink: 'https://mark-larose.github.io/King-s-Chess/' },
    { id: 5, title: 'Project 5', image: projectImage5, codeLink: 'https://github.com/Mark-LaRose/Select-Your-Color', projectLink: 'https://mark-larose.github.io/Select-Your-Color/' },
    { id: 6, title: 'Project 6', image: projectImage6, codeLink: 'https://github.com/Mark-LaRose/Select-Your-Font', projectLink: 'https://mark-larose.github.io/Select-Your-Font/' },
    { id: 7, title: 'Project 7', image: projectImage7, codeLink: 'https://github.com/Mark-LaRose/MyBattlefield', projectLink: 'https://mybattlefield.onrender.com/' },
  ];

  return (
    <div className="projects-wrapper">
      {/* First row with 3 projects */}
      <div className="projects-container first-row">
        {firstRow.map((project) => (
          <div className="project-tile" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <a href={project.codeLink} className="code-link" target="_blank" rel="noopener noreferrer">View Code</a>
              <a href={project.projectLink} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>

      {/* Second row with 4 projects */}
      <div className="projects-container second-row">
        {secondRow.map((project) => (
          <div className="project-tile" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <a href={project.codeLink} className="code-link" target="_blank" rel="noopener noreferrer">View Code</a>
              <a href={project.projectLink} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;