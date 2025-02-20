import React from "react";
import ProjectP from "./ProjectP";
import "./ProjectCard.css";
import sampleImage from "../../assets/node.png";
const ProjectCard = () => {
  const projects = [
    {
      image: sampleImage,
      title: "Restuarant Website",
      description:
        "A Frontend e-commerce solution built with HTML CSS and JavaScript",
      technologies: "HTML CSS JavaScript",
      demoLink: "#",
      codeLink: "#",
    },
    {
      image: sampleImage,
      title: "Analytics Dashboard",
      description:
        "Interactive data visualization dashboard using D3.js and Vue.js.",
      technologies: "Vue.js D3.js Firebase",
      demoLink: "#",
      codeLink: "#",
    },
    {
      image: sampleImage,
      title: "Fitness Tracking App",
      description:
        "Mobile application built with React Native and Firebase for tracking workouts.",
      technologies: "React Native Firebase Redux",
      demoLink: "#",
      codeLink: "#",
    },
    {
      image: sampleImage,
      title: "Fitness Tracking App",
      description:
        "Mobile application built with React Native and Firebase for tracking workouts.",
      technologies: "React Native Firebase Redux",
      demoLink: "#",
      codeLink: "#",
    },
    {
      image: sampleImage,
      title: "Fitness Tracking App",
      description:
        "Mobile application built with React Native and Firebase for tracking workouts.",
      technologies: "React Native Firebase Redux",
      demoLink: "#",
      codeLink: "#",
    },
    {
      image: sampleImage,
      title: "Fitness Tracking App",
      description:
        "Mobile application built with React Native and Firebase for tracking workouts.",
      technologies: "React Native Firebase Redux",
      demoLink: "#",
      codeLink: "#",
    },
  ];
  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <ProjectP key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectCard;
