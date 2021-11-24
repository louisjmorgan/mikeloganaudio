import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <main>
      <div className="contact-page">
        <h2>Contact Me</h2>
        <span className="direct-contact">
          Feel free to get in touch with any enquiries, either by
          emailing me or using the form below. I look forward to
          hearing from you!&nbsp;
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
            <label htmlFor="name">
              Name:
              <input type="text" name="name" id="full-name" />
            </label>
            <label htmlFor="_replyto">
              Email:
              <input
                type="email"
                name="_replyto"
                id="email-address"
                required
              />
            </label>
            <label htmlFor="message">
              Message:
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
