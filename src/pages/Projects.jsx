import React, { useEffect } from 'react';
import ProjectsSection from '../components/sections/ProjectsSection';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page">
      <div className="hero-bg text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">My Projects</h1>
          <p className="lead mb-4">
            Explore my portfolio of web applications and development projects
          </p>
          <a href="https://github.com/Deepeshgiri" className="btn btn-light btn-lg" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github me-2"></i>View All on GitHub
          </a>
        </div>
      </div>
      <ProjectsSection />
    </div>
  );
};

export default Projects;