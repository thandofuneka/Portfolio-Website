import projectData from '../data/projects';
import ProjectCard from '../Components/ProjectCards';
import ProjectDetails from '../Components/ProjectDetails';
import { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
    
  );
}

export default Projects;
