import Marquee from "react-fast-marquee";
import "./marquee.css";
import html from "../assets/htmllogo.png";
import css from "../assets/csslogo.png";
import react from "../assets/reactlogo.png";
import git from "../assets/gitlogo.png";
import github from "../assets/githublogo.png";
import figmar from "../assets/figmalogo.png";
import node from "../assets/node.png";
import js from "../assets/js.png";
const MyMarquee = () => {
  return (
    <>
      <Marquee speed={50} direction="right" gradient={false}>
        <section className="mq-image">
          <img src={react} alt="react Logo" />
          <img src={node} alt="node Logo" />
          <img src={html} alt="HTML Logo" />
          <img src={css} alt="css Logo" />
          <img src={git} alt="git Logo" />
          <img src={github} alt="github Logo" />
          <img src={figmar} alt="figma Logo" />
          <img src={js} alt="js Logo" />
        </section>
      </Marquee>
      <Marquee speed={50} direction="left" gradient={false}>
        <section className="mq-image">
          <img src={html} alt="HTML Logo" />
          <img src={css} alt="css Logo" />
          <img src={js} alt="js Logo" />
          <img src={git} alt="git Logo" />
          <img src={github} alt="github Logo" />
          <img src={react} alt="react Logo" />
          <img src={node} alt="node Logo" />
          <img src={figmar} alt="figma Logo" />
        </section>
      </Marquee>
    </>
  );
};

export default MyMarquee;
