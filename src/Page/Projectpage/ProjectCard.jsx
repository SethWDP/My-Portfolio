import React from "react";
import ProjectP from "./ProjectP";
import "./ProjectCard.css";
import pro1 from "../../assets/pro1.jpg";
import pro2 from "../../assets/pro2.jpg";
import pro3 from "../../assets/pro3.jpg";
import pro4 from "../../assets/pro4.jpg";
import pro5 from "../../assets/pro5.jpg";
import pro6 from "../../assets/pro6.jpg";
const ProjectCard = () => {
  const projects = [
    {
      image: pro1,
      title: "Restuarant Website",
      technologies: "HTML, CSS, JavaScript",
      demoLink: "#",
    },
    {
      image: pro2,
      title: "Online Education",
      technologies: "HTML, CSS, JavaScript",
      demoLink: "https://sethwdp.github.io/Online-Education/",
    },
    {
      image: pro3,
      title: "E-Books Sellings",
      technologies: "React js, CSS, Bootstrap ",
      demoLink: "https://ebooksonlineselling.vercel.app/",
    },
    {
      image: pro4,
      title: "Restaurant E-Commerce",
      technologies: "HTML, CSS, Bootstrap,JavaScript",
      demoLink: "#",
    },
    {
      image: pro5,
      title: "Food Panda Clone",
      technologies: "React Native Firebase Redux",
      demoLink: "#",
    },
    {
      image: pro6,
      title: "My Photographer Portfolio",
      technologies: "HTLM, CSS, Bootstrap,JavaScript",
      demoLink: "https://my-photograph-web.vercel.app/",
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
