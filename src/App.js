/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import MikeLoganAudio from './assets/mikeloganaudio.jpg';
import Soundcloud from './assets/soundcloud.png';
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';
import HeroImage from './assets/synth.gif';
import './styles.css';

const App = ({ title }) => {
  const [isActive, setActive] = useState(false);

  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  function mobileMenu() {
    setActive((prevState) => !prevState);
    console.log('toggled active');
  }

  const navLink = document.querySelectorAll('.navlinks li');

  function closeMenu() {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
  }

  navLink.forEach((n) => n.addEventListener('click', closeMenu));

  return (
    <Router>
      <nav>
        <div className={`navbar ${isActive ? 'active' : ''}`}>
          <ul className="navlinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Reels">Reels</Link>
            </li>
            <li>
              <Link to="/More-Content">More Content</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
          <div className="logo">
            <img src={MikeLoganAudio} alt="Mike Logan Audio Logo" />
          </div>
          <ul className="social-buttons">
            <a href="https://soundcloud.com/mikeloganaudio">
              <img src={Soundcloud} alt="soundcloud" />
            </a>
            <a href="https://www.instagram.com/mikeloganaudio/">
              <img src={Instagram} alt="instagram" />
            </a>
            <a href="https://www.twitter.com/mikeloganaudio">
              <img src={Twitter} alt="twitter" />
            </a>
          </ul>
        </div>
        <div className="mobile-nav">
          <button
            type="button"
            className={`hamburger ${isActive ? 'active' : ''}`}
            onClick={mobileMenu}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          <div className="mobile-logo">
            <img src={MikeLoganAudio} alt="Mike Logan Audio Logo" />
          </div>
        </div>
      </nav>
      <main>
        <section className="hero">
          <img src={HeroImage} alt="hero banner" />
          <div className="hero-text">
            <span className="introduction">
              My name’s Mike, I’m a sound designer and composer for
              video games.
            </span>
            <span className="introduction">
              I recently graduated in Electronic Music Production from
              University of West London.
            </span>
            <span className="introduction">
              Feel free to check out my reels and other content, and
              don’t hesitate to get in touch!
            </span>
            <span className="recommendation">
              <p>
                “It&apos;s been an absolute dream working with Mike.
                His ability to grasp projects quickly coupled with his
                flexibility and creative vision make him an invaluable
                asset to the team. Mike has a rare, genuine passion
                for his craft, with a tenacious and can-do approach
                that he brings to the team. I would not hesitate to
                work with Mike and can&apos;t recommend him enough for
                anyone looking for professional and inspiring output.”
              </p>
              <p>- WWYD Films</p>
            </span>
          </div>
        </section>
        <section className="videos">
          <span>Game Audio Sound Design Reel</span>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/563007174?h=5ac6615590"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
          <span>Game Audio Composition Reel 2021</span>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/564597865?h=a24f152033"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
        </section>
      </main>
    </Router>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
