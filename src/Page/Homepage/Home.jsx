import React from "react";
import "./home.css";
import { Link } from "react-scroll";
import profile from "../../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
  visible: { transition: { staggerChildren: 0.3 } },
};

const Home = () => {
  return (
    <section className="home">
      <motion.div
        className="home-content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content Animation */}
        <motion.div className="home-txt" variants={fadeInLeft}>
          <h1>
            Hi, I'm <span>Panha Seth</span>
          </h1>
          <p>
            A passionate Frontend Developer crafting beautiful, functional, and
            user-friendly web experiences that drive business growth.
          </p>

          {/* Buttons Animation */}
          <motion.div className="home-btns" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="projects" className="btn btn-project">
                View My Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="contact" className="btn btn-contact">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Icons Animation */}
          <motion.div className="icon" variants={staggerContainer}>
            {[
              { icon: faFacebook, link: "#" },
              { icon: faGithub, link: "#" },
              { icon: faLinkedin, link: "#" },
              { icon: faTelegram, link: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className="social-icon"
                variants={fadeInUp}
                whileHover={{ scale: 1.5 }}
              >
                <FontAwesomeIcon icon={social.icon} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image Animation */}
        <motion.div
          className="home-image"
          variants={fadeInRight}
          whileHover={{ scale: 1.05 }}
        >
          <img src={profile} alt="profile" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
