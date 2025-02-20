import React from "react";
import { Link, Element } from "react-scroll";
import Home from "../Page/Homepage/Home";

const Singlepage = () => {
  return (
    <div>
      {/* Navbar with smooth scrolling links */}
      <nav style={styles.navbar}>
        <Link to="home" smooth={true} duration={800} style={styles.link}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={800} style={styles.link}>
          About
        </Link>
        <Link to="services" smooth={true} duration={800} style={styles.link}>
          Services
        </Link>
        <Link to="contact" smooth={true} duration={800} style={styles.link}>
          Contact
        </Link>
      </nav>

      {/* Sections */}
      <Element name="home" style={styles.section}>
        <Home />
      </Element>

      <Element name="about" style={styles.section}>
        <h1>About Us</h1>
        <p>We are a web development company...</p>
      </Element>

      <Element name="services" style={styles.section}>
        <h1>Our Services</h1>
        <p>We offer React development...</p>
      </Element>

      <Element name="contact" style={styles.section}>
        <h1>Contact</h1>
        <p>Get in touch with us...</p>
      </Element>
    </div>
  );
};

// CSS styles for smooth scrolling
const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#333",
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    zIndex: 1000,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "18px",
  },
  section: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
    fontSize: "24px",
  },
};

export default Singlepage;
