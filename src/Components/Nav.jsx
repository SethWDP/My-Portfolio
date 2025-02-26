import React, { useState } from "react";
import "./nav.css";
import { Link, Element } from "react-scroll";
import Home from "../Page/Homepage/Home";
import About from "../Page/Aboutpage/Aboutpage";
import Project from "../Page/Projectpage/Projectpage";
import Contact from "../Page/Contactpage/Contactpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  function DownCV() {
    // window.location.href = "/downloads/PanhaSethCV.pdf";
    alert("download my cv");
  }
  return (
    <section>
      <header className="header">
        <section className="flex">
          <a href="home" className="logo">
            Panha <span>Seth</span>
          </a>
          <nav className={`navbar ${menuOpen ? "active" : ""}`}>
            <Link className="navlink" to="/home" smooth={true} duration={100}>
              Home
            </Link>
            <Link className="navlink" to="/about" smooth={true} duration={100}>
              About
            </Link>
            <Link
              className="navlink"
              to="/projects"
              smooth={true}
              duration={100}
            >
              Project
            </Link>
            <Link
              className="navlink"
              to="/contact"
              smooth={true}
              duration={100}
            >
              Contact
            </Link>
            <button onClick={DownCV} className="navlink btnd">
              Download my Cv
            </button>
          </nav>
          <div
            id="menu-bar"
            onClick={toggleMenu}
            className={menuOpen ? "rotate" : "180"}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </div>
        </section>
      </header>

      <Element name="/home">
        <Home />
      </Element>

      <Element name="/about">
        <About />
      </Element>

      <Element name="/projects">
        <Project />
      </Element>

      <Element name="/contact">
        <Contact />
      </Element>
    </section>
  );
};

export default Nav;
