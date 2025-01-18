import React, { useState, useEffect } from 'react';
import './styles/app.css';
import './styles/projects.css';
import './styles/about.css';
import './styles/resume.css';
import Projects from './components/Projects';
import Resume from './components/Resume';
import WavesEffect from './components/WavesEffect';
import profileImage from './images/profile.png';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('welcome');

  useEffect(() => {
    if (currentSection === 'welcome') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentSection === 'projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentSection === 'resume') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSection]);

  const renderSection = () => {
    if (currentSection === 'resume') {
      return <Resume onBack={() => setCurrentSection('welcome')} />;
    }
    return (
      <>
        <section id="about" className="about-section">
          <div className="about-container">
            <img src={profileImage} alt="My Portrait" className="about-image" />
            <div className="about-text">
              <p>Hi! I'm Mark LaRose, An aspiring Developer with a passion for creating web applications and software. I have experience in JavaScript, React, TypeScript, HTML, CSS, Express.js, Node.js, APIs, and databases such as SQL, PostgreSQL, and MongoDB. My main focus is the MERN stack, but I am also continuously learning and eager to dive into new technologies. Explore my portfolio, and check out my projects below to see what I've been working on!</p>
            </div>
          </div>
        </section>
        <section id="welcome-section" className="welcome-section flex justify-center items-center text-center">
          <div>
            <h1 className="text-4xl">Welcome to My Portfolio</h1>
            <p>Here you'll find my latest projects and more.</p>
          </div>
        </section>
        <section id="projects" className="py-20 text-center">
          <Projects />
        </section>
      </>
    );
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><button className="nav-link" onClick={() => setCurrentSection('welcome')}>Welcome</button></li>
            <li><button className="nav-link" onClick={() => setCurrentSection('projects')}>Projects</button></li>
            <li><button className="nav-link" onClick={() => setCurrentSection('resume')}>Resume</button></li>
            <li><a className="nav-link pt-8" href="https://www.linkedin.com/in/mark-larose-460818159/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="nav-link pt-8" href="https://www.freecodecamp.org/fcc35aed0cf-62ef-41b5-8768-74cf1be087c2" target="_blank" rel="noopener noreferrer">My CodeCamp</a></li>
            <li><a className="nav-link pt-8" href="https://github.com/Mark-LaRose" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
          </ul>
        </nav>
      </header>
      <main id="main" className="pt-16">
        <WavesEffect />
        {renderSection()}
      </main>
      <footer className="py-4 text-white text-center">
        <p>&copy; 2024 Mark LaRose</p>
      </footer>
    </div>
  );
}

export default App;