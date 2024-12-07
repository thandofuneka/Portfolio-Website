import PropTypes from "prop-types";


function ProjectDetails({ project, onClose }) {
    return (
      <div className="modal-overlay">
         <div className="modal-content">
           <button onClick={onClose} className="close-button">X</button>
           <h2>{project.title}</h2>
           <img src={project.image} alt={project.title} className="detail-image" />
           <p>{project.description}</p>
   
           <h3>Technologies Used</h3>
           <ul className="tech-list">
             {project.technologies.map((tech, index) => (
               <li key={index}>{tech}</li>
             ))}
           </ul>
   
           <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
             View Repository
           </a>
         </div>
      </div>   
    );
  }

  ProjectDetails.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        repoLink: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
      onClose: PropTypes.func.isRequired, 
  }
  
  export default ProjectDetails;