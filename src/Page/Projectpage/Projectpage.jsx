import React from "react";
import "./projectpage.css";
import ProjectCard from "./ProjectCard";
const Projectpage = () => {
  return (
    <section className="project">
      <div className="pro-content">
        <div className="title">
          <h2>Featured Projects</h2>
          <p>
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>
      </div>
      <div className="pro-grid">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projectpage;
