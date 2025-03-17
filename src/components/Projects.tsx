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
    { id: 1, title: 'Project 1', image: projectImage1, codeLink: '#', projectLink: '#' },
    { id: 2, title: 'Project 2', image: projectImage2, codeLink: '#', projectLink: '#' },
    { id: 3, title: 'Project 3', image: projectImage3, codeLink: '#', projectLink: '#' },
  ];

  // Second row (4 projects)
  const secondRow = [
    { id: 4, title: 'Project 4', image: projectImage4, codeLink: '#', projectLink: '#' },
    { id: 5, title: 'Project 5', image: projectImage5, codeLink: '#', projectLink: '#' },
    { id: 6, title: 'Project 6', image: projectImage6, codeLink: '#', projectLink: '#' },
    { id: 7, title: 'Project 7', image: projectImage7, codeLink: '#', projectLink: '#' },
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