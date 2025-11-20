import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../App.css";

const ContactPage2 = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'mehakghalle5@gmail.com',     // ✏️ Replace with your actual service ID
      'template_dg2ahhp',    // ✏️ Replace with your actual template ID
      formRef.current,
      'H-4Pat13lgiZQIrDm'      // ✏️ Replace with your public key
    )
    .then((result) => {
      alert("Message sent successfully!");
      formRef.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message. Try again later.");
      console.error(error);
    });
  };

  return (
    <section className="contact2-container">
      <div className="contact2-overlay">
        <div className="contact2-content">
          <h1 className="contact2-title">Contact Us</h1>
          <p className="contact2-subtitle">
            We're here to help! Send us a message and we'll get back to you soon.
          </p>

          <form className="contact2-form" ref={formRef} onSubmit={sendEmail}>
            <div className="contact2-form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="contact2-form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="contact2-form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="contact2-submit">
              Send Message
            </button>
          </form>

          <div className="contact2-info">
            <p><i className="fas fa-map-marker-alt"></i> 123 Grocery Street, Ludhiana</p>
            <p><i className="fas fa-envelope"></i> groshop@gmail.com</p>
            <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage2;
