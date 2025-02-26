import React from "react";
import "./contactpage.css";
import Form from "./Form";
import contact from "../../assets/Typing-rafiki.svg";
const Contactpage = () => {
  return (
    <section className="contact">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Have a question or want to work together? Drop me a message!</p>
      </div>
      <div className="contact-content">
        <img src={contact} alt="" />
        <div className="contact-form">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
