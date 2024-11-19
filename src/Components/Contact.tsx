"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, FormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formError, FormError] = useState<string | null>(null);
  const [successMessage, SuccessMessage] = useState<string | null>(null);

  const InputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    FormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    SuccessMessage(null); 

    if (!formData.name || !formData.email || !formData.message) {
      FormError("All fields are required. Please fill them out.");
      return;
    }
    FormError(null);
    SuccessMessage("Your message has been sent successfully!");
    FormData({ name: "", email: "", message: "", subject: "" }); 
  };

  return (
    <div id="contact" className="contact-section">
      <h1 className="contact-heading">Contact Us For Any Query</h1>
      <div className="contact-form">
        {formError && <div className="form-error">{formError}</div>}
        {successMessage && <div className="form-success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={InputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={InputChange}
            />
          </div>
          <div className="form-row">
            <input
              type= "subject"
              name="subject"
              className="form-control"
              placeholder="Your subject"
              value={formData.message}
              onChange={InputChange}
            />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              value={formData.message}
              onChange={InputChange}
            />
          </div>
          <div className="form-row">
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
