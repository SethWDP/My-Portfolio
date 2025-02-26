import React from "react";
import { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (formData.name.length < 2)
      newErrors.name = "Please enter your name (at least 2 characters)";
    if (!formData.email.includes("@"))
      newErrors.email = "Please enter a valid email address";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (formData.message.length < 10)
      newErrors.message = "Please enter your message (at least 10 characters)";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // Handle form submission (e.g., API request)
    }
  };

  return (
    <section className="form-content">
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && (
            <div className="error-message">{errors.message}</div>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Form;
