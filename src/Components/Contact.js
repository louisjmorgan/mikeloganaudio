import React, { useState } from 'react';
import {
  StyledContactContainer,
  StyledContactForm,
  StyledContactInfo,
} from './Contact.styled';

const ContactForm = () => {
  return (
    <StyledContactForm
      action="https://formspree.io/f/mvodjjev"
      method="POST"
    >
      <label htmlFor="name">
        <span>Name:</span>
        <input type="text" name="name" id="full-name" />
      </label>
      <label htmlFor="_replyto">
        <span>Email:</span>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          required
        />
      </label>
      <label htmlFor="subject">
        <span>Subject:</span>
        <input type="text" name="subject" id="subject" />
      </label>
      <label htmlFor="message">
        <span>Message:</span>
        <textarea name="message" />
      </label>

      <button type="submit" target="_blank" className="form-btn">
        Send
      </button>
    </StyledContactForm>
  );
};

const ContactInfo = () => {
  const [copySuccess, setCopy] = useState(false);
  const copyToClipBoard = () => {
    navigator.clipboard.writeText('mikeloganaudio@gmail.com');
    setCopy(true);
  };
  return (
    <StyledContactInfo>
      Feel free to get in touch with any enquiries, either by emailing
      me or using the form below. I look forward to hearing from
      you!&nbsp;
      <div className="email-link">
        <a href="mailto:mikeloganaudio@gmail.com">
          mikeloganaudio@gmail.com
        </a>
        <button
          type="button"
          alt="copy email address"
          onClick={copyToClipBoard}
        >
          {copySuccess ? 'Copy success!' : 'Copy to clipboard'}
        </button>
      </div>
    </StyledContactInfo>
  );
};

const Contact = () => {
  return (
    <main>
      <StyledContactContainer>
        <h2>Contact Me</h2>
        <ContactInfo />
        <ContactForm />
      </StyledContactContainer>
    </main>
  );
};

export default Contact;
