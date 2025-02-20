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
const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-txt">
          <h1>
            Hi, I'm <span>Panha Seth</span>
          </h1>
          <p>
            A passionate Frontend Developer crafting beautiful, functional, and
            user-friendly web experiences that drive business growth.
          </p>
          <div class="home-btns">
            <Link to="/projects" class="btn btn-project">
              View My Work
            </Link>
            <Link to="/contact" class="btn btn-contact">
              Contact Me
            </Link>
          </div>
          <div className="icon">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-icon">
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
