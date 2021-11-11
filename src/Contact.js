import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <main>
      <div className="contact-page">
        <span className="direct-contact">
          Get in touch directly:&nbsp;
          <a href="mailto:mikeloganaudio@gmail.com">
            mikeloganaudio@gmail.com
          </a>
        </span>
        <div className="form-container">
          <form
            action="https://formspree.io/f/mvodjjev"
            method="POST"
            className="contact-form"
          >
            <label htmlFor="_replyto">
              Your email:
              <input type="email" name="_replyto" />
            </label>
            <label htmlFor="message">
              Your message:
              <textarea name="message" />
            </label>

            <button
              type="submit"
              target="_blank"
              className="form-btn"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
