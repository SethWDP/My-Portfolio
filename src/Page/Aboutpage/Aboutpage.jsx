import React from "react";
import "./aboutpage.css";
import pf from "../../assets/pf-tele.jpg";
import MyMarquee from "../../Components/MyMarquee";
const Aboutpage = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About ME</h2>
          <p>
            Get to know more about me, my experience, and what drives me to
            create beautiful web experiences.
          </p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={pf} alt="profile" />
          </div>
          <div class="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a Frontend Developer with 1+ years of experience building
              website for client. I specialize in creating responsive,
              accessible, and performant websites and applications with
              delightful user experiences.
            </p>
            <p>
              I am currently a third-year student at the Royal University of
              Phnom Penh (RUPP), majoring in Computer Science. , I worked in IT
              support for 1 year in a company before focusing on Wev
              Development. I'm passionate about clean code, design systems, and
              the latest frontend technologies.
            </p>
            <p>
              When I'm not coding, you'll find me practicing photography, or
              exploring new palce around the city.
            </p>
            <div class="skills">
              <h4>Technical Skills</h4>
              <div class="skill-tags">
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS</span>
                <span class="skill-tag">JavaScript (ES6+)</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Tailwind CSS</span>
                <span class="skill-tag">Responsive Design</span>
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Performance Optimization</span>
                <span class="skill-tag">Accessibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee">
        <MyMarquee />
      </div>
    </section>
  );
};

export default Aboutpage;
