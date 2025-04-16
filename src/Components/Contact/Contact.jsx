import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <main> 
    <div className="contact-page">
      <section className="contact-section">
        <div className="contact-box">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Send us a message using the form below.</p>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message here..." />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

    </div>
    </main>
  );
}

export default Contact;
