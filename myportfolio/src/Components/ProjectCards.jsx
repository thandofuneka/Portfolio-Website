import PropTypes from "prop-types";

function ProjectCard({ project, onClick }) {
    return (
      <div className="project-card" onClick={onClick}>
        <img src={project.image} alt={project.title} className="project-image" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    );
  }

  ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
      onClick: PropTypes.func.isRequired,
    
  }
  
  export default ProjectCard;