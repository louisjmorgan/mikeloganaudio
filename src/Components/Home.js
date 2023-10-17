/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowDown from '../assets/arrowdown.png';
import ArrowDown2 from '../assets/arrowdown2.png';
import Wwyd from '../assets/wwyd.png';
import {
  StyledHomeContainer,
  StyledSplashReel,
  StyledHero,
  StyledTextBox,
  StyledHeroArrow,
  StyledSplashArrow,
  StyledRecommendation,
} from './Home.styled';

const SplashReel = ({ reelRef, handleDownBtn }) => {
  return (
    <StyledSplashReel ref={reelRef}>
      <StyledSplashArrow onClick={handleDownBtn} type="button">
        <img
          src={ArrowDown}
          alt="navigate to introduction"
          id="to-hero"
        />
      </StyledSplashArrow>
      <div className="embed-container">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/563007174?h=5ac6615590"
          width="640"
          height="360"
          allowFullScreen
        />
      </div>
    </StyledSplashReel>
  );
};

const Hero = ({ heroRef, handleDownBtn }) => {
  return (
    <StyledHero ref={heroRef}>
      <div className="hero-text-container">
        <StyledTextBox className="headline">
          My name’s Mike, I’m a sound designer from Bournemouth, UK. I
          am passionate about all things audio, be it live-action,
          radio & podcasts, or games!
        </StyledTextBox>
        <div className="introduction-info">
          <StyledTextBox>
            I recently finished studying my MA in Sound Design For
            Screen at Bournemouth University, attaining a pass with
            distinction. I'm now looking for entry-level positions as
            a sound designer.
          </StyledTextBox>
          <StyledTextBox>
            Feel free to check out my&nbsp;
            <Link to="/reels">reels</Link>
            &nbsp;and&nbsp;
            <Link to="/more-content">other content</Link>
            ,&nbsp;and don’t hesitate to&nbsp;
            <Link to="/contact">get in touch!</Link>
          </StyledTextBox>
        </div>
        <StyledHeroArrow onClick={handleDownBtn} type="button">
          <img
            src={ArrowDown2}
            alt="navigate down page"
            id="to-reel"
          />
        </StyledHeroArrow>
      </div>
    </StyledHero>
  );
};

const Recommendation = () => {
  return (
    <StyledRecommendation>
      <p className="recommendation-text">
        It&apos;s been an absolute dream working with Mike. His
        ability to grasp projects quickly coupled with his flexibility
        and creative vision make him an invaluable asset to the team.
        Mike has a rare, genuine passion for his craft, with a
        tenacious and can-do approach that he brings to every project.
        I would not hesitate to work with Mike and can&apos;t
        recommend him enough for anyone looking for professional and
        inspiring output.
      </p>
      <div className="company-card">
        <img src={Wwyd} alt="wwyd films" />
        <p> — WWYD Films</p>
      </div>
    </StyledRecommendation>
  );
};

const Home = () => {
  const refs = {
    heroRef: useRef(null),
    reelRef: useRef(null),
  };

  const handleDownBtn = (e) => {
    if (e.target.id === 'to-hero')
      refs.heroRef.current.scrollIntoView({ behavior: 'smooth' });
    if (e.target.id === 'to-reel') {
      refs.reelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main>
      <StyledHomeContainer>
        <SplashReel
          reelRef={refs.reelRef}
          handleDownBtn={handleDownBtn}
        />
        <Hero heroRef={refs.heroRef} handleDownBtn={handleDownBtn} />
        <Recommendation />
      </StyledHomeContainer>
    </main>
  );
};

export default Home;
