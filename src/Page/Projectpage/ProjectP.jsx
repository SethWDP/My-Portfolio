import React from "react";

const ProjectP = ({
  image,
  title,
  description,
  technologies,
  demoLink,
  codeLink,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-technologies">{technologies}</p>
        <div className="card-buttons">
          <a href={demoLink} className="btn1">
            View Demo
          </a>
          <a href={codeLink} className="btn1 outline">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectP;
