import React from 'react';
import { NavLink } from 'react-router-dom';
import Soundcloud from '../assets/soundcloud.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import {
  StyledFooterContainer,
  StyledFooterSocials,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterSocials>
        <a
          href="https://soundcloud.com/mikeloganaudio"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Soundcloud} alt="soundcloud" />
        </a>
        <a
          href="https://www.instagram.com/mikeloganaudio/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="instagram" />
        </a>
        <a
          href="https://www.twitter.com/mikeloganaudio"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Twitter} alt="twitter" />
        </a>
      </StyledFooterSocials>
      <NavLink to="/contact" className="footer-cta">
        Get in touch!
      </NavLink>
    </StyledFooterContainer>
  );
};

export default Footer;
