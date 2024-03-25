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
  StyledVideoGrid,
} from './Home.styled';

const videos = [
  {
    description:
      'In-Depth Sound Design Breakdown: Need For Speed Heat (Gameplay Sound Redesign)',
    url: 'https://player.vimeo.com/video/927211582',
  },
  {
    description:
      'A video detailing a demo level I put together in Unreal Engine 5, using Wwise and Unreal blueprints to integrate my sound design into an interactive level. This includes reverb zones, a speed-dependent character movement SFX system, various attenuations and RTPCs, and much more!',
    url: 'https://player.vimeo.com/video/894179947',
  },
  {
    description:
      "Here's a very quick sound design breakdown showing the methods behind a redesign I recently did of a clip from the game Warhaven. It`s very fast paced since I wanted to cover as much as possible in a relatively short video. Hope you enjoy, and find it interesting and/or helpful!",
    url: 'https://player.vimeo.com/video/891570110',
  },
  {
    description:
      'This is a quick "redesign" of the iconic slow motion bullet dodge scene from The Matrix, using only the SFX I created for my Slow-Motion Construction Kit, which can be downloaded from the Free SFX page at the top.',
    url: 'https://player.vimeo.com/video/886549592?h=958d484cd8',
  },
];

const SplashReel = ({ reelRef, handleDownBtn }) => {
  return (
    <StyledSplashReel ref={reelRef}>
      <StyledSplashArrow onClick={handleDownBtn} type="button">
        <img
          src={ArrowDown}
          alt="navigate to introduction"
          id="to-video-grid"
        />
      </StyledSplashArrow>
      <div className="embed-container">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/563007174"
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
          My name’s Mike, I’m a sound designer from Bournemouth, UK.
          I'm a shameless sound design geek, with a perpetual desire
          to capture and create weird and wonderful noises!
        </StyledTextBox>
        <div className="introduction-info">
          <StyledTextBox>
            I'm a recent graduate of Bournemouth University, where I
            obtained an MA in Sound Design for Screen with
            distinction, developing my skills in crafting immersive
            and engaging soundtracks for various media formats. I
            gained a particular love for the creative ways to tell
            stories through sound, and wrote a thesis on the
            differences in audiovisual storytelling, and diegesis, in
            interactive and linear formats. I'm experienced with
            Reaper, Ableton Live, Pro Tools, Wwise, Unreal and Unity.
            I've also started to make free SFX libraries, which I'd
            encourage any audio professionals to grab! I'm eager to
            learn from and collaborate with other talented and
            passionate individuals in the industry, and contribute to
            the creation of memorable and meaningful audio
            experiences.
          </StyledTextBox>
          <StyledTextBox>
            Feel free to check out my&nbsp;
            <Link to="/game-audio">games work,</Link>
            &nbsp;
            <Link to="/film-audio">film & TV work,</Link>
            &nbsp;and don’t hesitate to&nbsp;
            <Link to="/contact">get in touch!</Link>
          </StyledTextBox>
        </div>
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

const VideoGrid = ({ videoGridRef, videos }) => {
  return (
    <StyledVideoGrid ref={videoGridRef}>
      <div className="video-grid-container">
        {videos.map(({ url }) => (
          <div className="video-item">
            <iframe title="" src={url} allowFullScreen />
          </div>
        ))}
      </div>
    </StyledVideoGrid>
  );
};

const Home = () => {
  const refs = {
    heroRef: useRef(null),
    reelRef: useRef(null),
    videoGridRef: useRef(null),
  };

  const handleDownBtn = (e) => {
    if (e.target.id === 'to-hero')
      refs.heroRef.current.scrollIntoView({ behavior: 'smooth' });
    if (e.target.id === 'to-reel') {
      refs.reelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (e.target.id === 'to-video-grid') {
      refs.videoGridRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <main className="bg-red">
      <StyledHomeContainer>
        <SplashReel
          reelRef={refs.reelRef}
          handleDownBtn={handleDownBtn}
        />
        <VideoGrid videos={videos} videoGridRef={refs.videoGridRef} />
        <Hero heroRef={refs.heroRef} handleDownBtn={handleDownBtn} />
        <Recommendation />
      </StyledHomeContainer>
    </main>
  );
};

export default Home;
