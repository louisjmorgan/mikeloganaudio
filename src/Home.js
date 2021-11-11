/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowDown from './assets/arrowdown.png';
import ArrowDown2 from './assets/arrowdown2.png';
import Wwyd from './assets/wwyd.png';
import './styles.css';

const Home = forwardRef(({ handleDownBtn }, ref) => {
  const { heroRef, reelRef } = ref;
  return (
    <main>
      <div className="home-container">
        <section className="splash-reel" ref={reelRef}>
          <button
            onClick={handleDownBtn}
            type="button"
            className="arrow-down"
          >
            <img
              src={ArrowDown}
              alt="navigate to introduction"
              id="to-hero"
            />
          </button>
          <div className="embed-container">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/563007174?h=5ac6615590"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </section>
        <section className="hero" ref={heroRef}>
          <div className="hero-text">
            <span className="introduction introduction-headline">
              My name’s Mike, I’m a sound designer and composer for
              video games.
            </span>
            <div className="introduction-info">
              <span className="introduction">
                I recently graduated in Electronic Music Production
                from University of West London.
              </span>
              <span className="introduction">
                Feel free to check out my&nbsp;
                <div className="hero-link">
                  <Link to="/reels">reels</Link>
                </div>
                &nbsp;and&nbsp;
                <div className="hero-link">
                  <Link to="/more-content">other content</Link>
                </div>
                , and don’t hesitate to&nbsp;
                <div className="hero-link">
                  <Link to="/contact">get in touch!</Link>
                </div>
              </span>
            </div>
            <button
              onClick={handleDownBtn}
              type="button"
              className="arrow-down-hero"
            >
              <img
                src={ArrowDown2}
                alt="navigate down page"
                id="to-reel"
              />
            </button>
          </div>
        </section>

        <section className="recommendation">
          <p>
            “It&apos;s been an absolute dream working with Mike. His
            ability to grasp projects quickly coupled with his
            flexibility and creative vision make him an invaluable
            asset to the team. Mike has a rare, genuine passion for
            his craft, with a tenacious and can-do approach that he
            brings to the team. I would not hesitate to work with Mike
            and can&apos;t recommend him enough for anyone looking for
            professional and inspiring output.”
          </p>
          <div className="company-card">
            <img src={Wwyd} alt="wwyd films" />
            <p> - WWYD Films</p>
          </div>
        </section>
      </div>
    </main>
  );
});

export default Home;
