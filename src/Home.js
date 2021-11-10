/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import HeroImage from './assets/synth.gif';
import ArrowDown from './assets/arrowdown.png';
import Wwyd from './assets/wwyd.png';
import './styles.css';

const Home = forwardRef(({ handleDownBtn }, ref) => {
  return (
    <main>
      <section className="splash-reel">
        <button
          onClick={handleDownBtn}
          type="button"
          className="arrow-down"
        >
          <img src={ArrowDown} alt="navigate to introduction" />
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
      <section className="hero" ref={ref}>
        <img src={HeroImage} alt="background synthesizer" />
        <div className="hero-text">
          <span className="introduction introduction-headline">
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
        </div>
      </section>

      <section className="recommendation">
        <p>
          “It&apos;s been an absolute dream working with Mike. His
          ability to grasp projects quickly coupled with his
          flexibility and creative vision make him an invaluable asset
          to the team. Mike has a rare, genuine passion for his craft,
          with a tenacious and can-do approach that he brings to the
          team. I would not hesitate to work with Mike and can&apos;t
          recommend him enough for anyone looking for professional and
          inspiring output.”
        </p>
        <div className="company-card">
          <img src={Wwyd} alt="wwyd films" />
          <p> - WWYD Films</p>
        </div>
      </section>
    </main>
  );
});

export default Home;
