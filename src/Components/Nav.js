/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MikeLoganAudio from '../assets/mikeloganaudio.jpg';
import MikeLoganAudio2 from '../assets/mikeloganaudio2.jpg';
import Soundcloud from '../assets/soundcloud.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';

import {
  StyledNavContainer,
  StyledNavBar,
  StyledSocialButtons,
  StyledNavLinks,
  StyledMobileNav,
  StyledHamburger,
} from './Nav.styled';

const SocialButton = ({ sitename, url, img }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt={sitename} />
      </a>
    </li>
  );
};

const NavSocialButtons = () => {
  return (
    <StyledSocialButtons>
      <SocialButton
        sitename="soundcloud"
        url="https://soundcloud.com/mikeloganaudio"
        img={Soundcloud}
      />
      <SocialButton
        sitename="instagram"
        url="https://www.instagram.com/mikeloganaudio/"
        img={Instagram}
      />
      <SocialButton
        sitename="twitter"
        url="https://www.twitter.com/mikeloganaudio"
        img={Twitter}
      />
    </StyledSocialButtons>
  );
};

const NavLinksContainer = ({ closeMenu }) => {
  return (
    <StyledNavLinks>
      <li>
        <NavLink
          exact
          to="/"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/film-audio"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Film & TV
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/game-audio"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Game Audio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/more-content"
          activeClassName="selected"
          onClick={closeMenu}
        >
          More Content
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/free-sfx"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Free SFX
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          activeClassName="selected"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </li>
    </StyledNavLinks>
  );
};

const NavBar = ({ isMenuOpen, closeMenu }) => {
  return (
    <StyledNavBar className={`${isMenuOpen ? 'active' : ''}`}>
      <div className="navbar">
        <NavLink exact to="/" className="logo">
          <img src={MikeLoganAudio} alt="Mike Logan Audio Logo" />
        </NavLink>
        <NavLinksContainer closeMenu={closeMenu} />

        {/* <NavSocialButtons /> */}
      </div>
    </StyledNavBar>
  );
};

const MobileNav = ({ isMenuOpen, toggleMenu }) => {
  return (
    <StyledMobileNav>
      <StyledHamburger
        type="button"
        onClick={toggleMenu}
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </StyledHamburger>
      <NavLink exact to="/">
        <div className="mobile-logo">
          <img src={MikeLoganAudio2} alt="Mike Logan Audio Logo" />
        </div>
      </NavLink>
    </StyledMobileNav>
  );
};

const Nav = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <StyledNavContainer>
      <NavBar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </StyledNavContainer>
  );
};

export default Nav;
