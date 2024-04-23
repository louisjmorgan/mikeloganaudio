/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowDown from '../assets/arrowdown.png';
import ArrowDown2 from '../assets/arrowdown2.png';
import Wwyd from '../assets/wwyd.png';
import picdj from '../assets/picdj.jpg';
import picsetup from '../assets/picsetup.jpg';
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
          My name’s Mike, a graduate sound designer from Bournemouth.
          <br></br>
          I'm a shameless audio geek who loves to craft weird and
          <br></br>wonderful sounds, bring new universes to life and
          tell great stories...
        </StyledTextBox>
        <div className="introduction-info">
          <StyledTextBox>
            As with many sound designers I started off producing music
            from a young age. <br></br>My curiosity about how
            soundtracks are made for some of my favourite games turned
            into a love for interactive sound design.
            <br></br>
            <br></br>
            <img src={picsetup} alt="setup pic" />
            <br></br>
            <br></br>I primarily work in Reaper but also use Ableton
            Live for music and doodles, and have done postproduction
            work on various short films in Pro Tools. I’ve got a solid
            grounding in audio implementation using Wwise for smaller
            indie games in Unity and Unreal, but I’m keen to start
            contributing to exciting larger projects in the AAA
            sphere.
            <br></br>
          </StyledTextBox>

          <StyledTextBox>
            I'm a recent graduate of Bournemouth University, where I
            obtained an MA in Sound Design for Screen with
            distinction, developing my skills in crafting immersive
            and engaging soundtracks for various media formats. I
            gained a particular love for the creative ways to tell
            stories through sound, and wrote my thesis on diegesis
            theory in games, and the new possibilities in audiovisual
            storytelling in interactive, immersive, and linear
            formats.
            <br></br>
            <br></br>
            I've also started to make free&nbsp;
            <Link to="/Free-SFX">SFX libraries</Link>
            &nbsp;, which I'd encourage any audio professionals to
            grab! I'm eager to learn from and collaborate with other
            talented and passionate individuals in the industry, and
            contribute to the creation of memorable and meaningful
            audio experiences.
          </StyledTextBox>
          <StyledTextBox>
            <br></br>
            <img src={picdj} alt="dj image" />
            <br></br>
            <br></br>
            When I’m not designing sounds, you might find me out
            running, watching films, producing music, playing the
            saxophone or lighting up festival/club dancefloors at DJ
            gigs! <br></br>I also play video games from time to time…
            <br></br>
            <br></br>
            <b>A few games I always find myself coming back to:</b>
            <br></br> <i>The Witcher 3</i>
            <br></br>
            <i>Old School Runescape</i>
            <br></br>
            <i>Fallout New Vegas</i>
            <br></br>
            <i>Kingdom Come: Deliverance</i> <br></br>
            <i>The Outer Wilds</i> <br></br>
            <i>Destiny 2</i>{' '}
            <i>
              {' '}
              <br></br>Need for Speed™ Heat <br></br>Dragon Age™
              Inquisition
            </i>
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
