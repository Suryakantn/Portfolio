import React from 'react';
import projectsData from '../projects.json';

function Projects() {
  return (
    <div className="project-grid">
      {projectsData.map((project, index) => (
        <article className="project-card reveal" key={project.name}>
          <div className={`project-art project-art-${index + 1}`} aria-hidden="true">
            <span className="project-number">0{index + 1}</span>
            <span className="project-art-mark">{project.name.slice(0, 1)}</span>
            <span className="project-art-caption">PERSONAL PROJECT</span>
          </div>
          <div className="project-content">
            <div className="project-title-row">
              <h3>{project.name}</h3>
              {project.url ? (
                <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}>
                  ↗
                </a>
              ) : (
                <span className="project-status">In progress</span>
              )}
            </div>
            <p>{project.description}</p>
            {project.url && <a className="project-visit" href={project.url} target="_blank" rel="noopener noreferrer">Visit project <span aria-hidden="true">↗</span></a>}
          </div>
        </article>
      ))}
    </div>
  );
}

export default Projects;
