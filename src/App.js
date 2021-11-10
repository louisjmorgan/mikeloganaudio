/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './Home';
import Reels from './Reels';
import MoreContent from './MoreContent';
import Contact from './Contact';
import MikeLoganAudio from './assets/mikeloganaudio.jpg';
import MikeLoganAudio2 from './assets/mikeloganaudio2.jpg';
import Soundcloud from './assets/soundcloud.png';
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';

import './styles.css';
import ScrollToTop from './ScrollToTop';

const App = ({ title }) => {
  const heroRef = useRef();
  const [isMobile, setMobile] = useState(false);

  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  function mobileMenu() {
    setMobile((prevState) => !prevState);
    console.log('toggled active');
  }

  const navLink = document.querySelectorAll('.navlinks li');

  function closeMenu() {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    setMobile(false);
  }

  navLink.forEach((n) => n.addEventListener('click', closeMenu));

  function handleDownBtn() {
    heroRef.current.scrollIntoView({ behavior: 'smooth' });
    console.log('shag birds');
  }

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div>
        <nav name="nav">
          <div className={`navbar ${isMobile ? 'active' : ''}`}>
            <ul className="navlinks">
              <li className="navlink">
                <NavLink exact to="/" activeClassName="selected">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/reels" activeClassName="selected">
                  Reels
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/more-content"
                  activeClassName="selected"
                >
                  More Content
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="selected">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="logo">
              <img src={MikeLoganAudio} alt="Mike Logan Audio Logo" />
            </div>
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
          <div className="mobile-nav">
            <button
              type="button"
              className={`hamburger ${isMobile ? 'active' : ''}`}
              onClick={mobileMenu}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
            <div className="mobile-logo">
              <img
                src={MikeLoganAudio2}
                alt="Mike Logan Audio Logo"
              />
            </div>
          </div>
        </nav>
        <ScrollToTop />
        <Switch>
          <Route path="/reels">
            <Reels />
          </Route>
          <Route path="/more-content">
            <MoreContent />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home handleDownBtn={handleDownBtn} ref={heroRef} />
          </Route>
        </Switch>
      </div>

      <footer className="footer">
        <ul className="social-footer">
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
      </footer>
      <NavLink
        to="/contact#nav"
        className="footer-cta"
        activeClassName="selected"
      >
        Get in touch!
      </NavLink>
    </Router>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
