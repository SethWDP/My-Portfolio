import React from "react";

const ProjectP = ({ image, title, description, technologies, demoLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-technologies">{technologies}</p>
        <div className="card-buttons">
          <a href={demoLink} className="btn1">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectP;
