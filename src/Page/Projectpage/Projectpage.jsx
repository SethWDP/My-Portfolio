import React from "react";
import "./projectpage.css";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Projectpage = () => {
  return (
    <section className="project">
      <motion.div
        className="pro-content"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="title">
          <h2>Featured Projects</h2>
          <p>
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>
      </motion.div>

      {/* Project Grid Animation */}
      <motion.div
        className="pro-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <ProjectCard />
        </div>
      </motion.div>
    </section>
  );
};

export default Projectpage;
