import React from "react";
import "./aboutpage.css";
import pf from "../../assets/pf-tele.jpg";
import MyMarquee from "../../Components/MyMarquee";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Aboutpage = () => {
  return (
    <section className="about">
      <div className="container">
        {/* Section Title Animation */}
        <motion.div
          className="section-title"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>About ME</h2>
          <p>
            Get to know more about me, my experience, and what drives me to
            create beautiful web experiences.
          </p>
        </motion.div>

        <div className="about-content">
          {/* Image Animation */}
          <motion.div
            className="about-image"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={pf} alt="profile" />
          </motion.div>

          {/* Text Animation */}
          <motion.div
            className="about-text"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a Frontend Developer with 1+ years of experience building
              websites for clients. I specialize in creating responsive,
              accessible, and performant websites and applications with
              delightful user experiences.
            </p>
            <p>
              I am currently a third-year student at the Royal University of
              Phnom Penh (RUPP), majoring in Computer Science. I worked in IT
              support for 1 year in a company before focusing on Web
              Development. I'm passionate about clean code, design systems, and
              the latest frontend technologies.
            </p>
            <p>
              When I'm not coding, you'll find me practicing photography or
              exploring new places around the city.
            </p>

            {/* Skills Animation */}
            <motion.div
              className="skills"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4>Technical Skills</h4>
              <div className="skill-tags">
                {[
                  "HTML5",
                  "CSS",
                  "JavaScript (ES6+)",
                  "React",
                  "Tailwind CSS",
                  "Responsive Design",
                  "Figma",
                  "Git",
                  "Performance Optimization",
                  "Accessibility",
                ].map((skill, index) => (
                  <motion.span
                    className="skill-tag"
                    key={index}
                    variants={fadeIn}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="marquee">
        <MyMarquee />
      </div>
    </section>
  );
};

export default Aboutpage;
