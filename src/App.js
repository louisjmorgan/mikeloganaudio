/* eslint-disable no-return-assign */
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
import Nav from './Nav';
import Soundcloud from './assets/soundcloud.png';
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';

import './styles.css';
import ScrollToTop from './ScrollToTop';

const App = () => {
  const refs = {
    heroRef: useRef(null),
    reelRef: useRef(null),
  };

  function handleDownBtn(e) {
    console.log(e);
    if (e.target.id === 'to-hero')
      refs.heroRef.current.scrollIntoView({ behavior: 'smooth' });
    if (e.target.id === 'to-reel') {
      refs.reelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Nav />
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
            <Route exact path="">
              <Home handleDownBtn={handleDownBtn} ref={refs} />
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
          to="/contact"
          className="footer-cta"
          activeClassName="selected"
        >
          Get in touch!
        </NavLink>
      </Router>
    </div>
  );
};

export default App;
