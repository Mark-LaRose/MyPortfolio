// src/components/Projects.tsx
import React from 'react';
import projectImage1 from '../images/Project01.png';
import projectImage2 from '../images/Project02.png';
import projectImage3 from '../images/Project03.png';
import projectImage4 from '../images/Project04.png';

const Projects: React.FC = () => {
  const projectData = [
    { id: 1, title: '', image: projectImage1, codeLink: 'https://github.com/Mark-LaRose/King-s-Chess', projectLink: 'https://mark-larose.github.io/King-s-Chess/' },
    { id: 2, title: '', image: projectImage2, codeLink: 'https://github.com/Mark-LaRose/Select-Your-Color', projectLink: 'https://mark-larose.github.io/Select-Your-Color/' },
    { id: 3, title: '', image: projectImage3, codeLink: 'https://github.com/Mark-LaRose/Select-Your-Font', projectLink: 'https://mark-larose.github.io/Select-Your-Font/' },
    { id: 4, title: '', image: projectImage4, codeLink: 'https://github.com/Mark-LaRose/Math', projectLink: 'https://mark-larose.github.io/Math/' },
  ];

  return (
    <div className="projects-container">
      {projectData.map(project => (
        <div className="project-tile" key={project.id}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="overlay">
            <a href={project.codeLink} className="code-link" target="_blank" rel="noopener noreferrer">View Code</a>
            <a href={project.projectLink} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;