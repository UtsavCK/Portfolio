import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      {props.projectDetails.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} loading="lazy" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-link ${project.link ? "" : "disabled"}`}
          >
            View Project
          </a>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
