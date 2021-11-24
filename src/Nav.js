/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MikeLoganAudio from './assets/mikeloganaudio.jpg';
import MikeLoganAudio2 from './assets/mikeloganaudio2.jpg';
import Soundcloud from './assets/soundcloud.png';
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';
import './styles.css';
import {
  StyledNavContainer,
  StyledNavBar,
  StyledMobileNav,
  StyledHamburger,
} from './Nav.styled';

const NavBar = ({ isMenuOpen, closeMenu }) => {
  return (
    <StyledNavBar className={`${isMenuOpen ? 'active' : ''}`}>
      <div className="navbar">
        <ul className="navlinks">
          <li className="navlink">
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
              to="/reels"
              activeClassName="selected"
              onClick={closeMenu}
            >
              Reels
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
              to="/contact"
              activeClassName="selected"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <NavLink exact to="/">
          <div className="logo">
            <img src={MikeLoganAudio} alt="Mike Logan Audio Logo" />
          </div>
        </NavLink>
        <ul className="social-buttons">
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
        </ul>
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

  function toggleMenu() {
    setMenu((prevState) => !prevState);
  }

  function closeMenu() {
    setMenu(false);
  }

  // const navLink = document.querySelectorAll('.navlinks li');
  // navLink.forEach((n) => n.addEventListener('click', closeMenu));

  return (
    <StyledNavContainer>
      <NavBar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </StyledNavContainer>
  );
};

export default Nav;
