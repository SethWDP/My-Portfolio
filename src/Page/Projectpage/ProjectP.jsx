import React from "react";
import { motion } from "framer-motion";

const ProjectP = ({ image, title, technologies, demoLink }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="technologies">
          <p className="card-technologies">{technologies}</p>
        </div>
        <div className="card-buttons">
          <motion.a
            href={demoLink}
            className="btn1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
          >
            View Project
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectP;
