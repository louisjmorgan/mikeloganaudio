import styled from 'styled-components';
import Synth from '../assets/synth.webp';

const StyledHomeContainer = styled.div``;

const StyledSplashReel = styled.section`
  grid-area: splash-reel;
  width: 100%;
  height: 100%;
  position: relative;

  .embed-container {
    position: relative;
    padding-bottom: 85vw;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 95%;
    height: 0;
    z-index: 1;

      @media only screen and (min-width: 1200px) {
        padding-bottom: 85vh;
      }
        @media only screen and (max-height: 900px) {
          padding-bottom: 50rem;
        }
      } 
    }

    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      width: 100%;
      height: 75%;
      @media only screen and (min-width: 1200px) {
        padding-top: 0;
        top: 3%;
        left: 2%;
        width: 90%;
        height: 80%;
      }
    }
  }
`;

const StyledSplashArrow = styled.button`
  position: absolute;
  display: none;
  background: transparent;
  right: 3%;
  top: 30%;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  z-index: 9999;

  @media only screen and (min-width: 1200px) {
    display: block;
  }
  @media only screen and (min-width: 1850px) {
    right: 10%;
  }
  img {
    z-index: 9998;
    width: 12rem;
  }
`;

const StyledHero = styled.section`
  display: block;
  background: rgb(0, 0, 0);
  width: 100%;

  @media only screen and (min-width: 1200px) {
    margin-top: 0;
  }

  .hero-text-container {
    margin: 0 auto;
    width: 100%;
    padding: 8rem 0;
    background-image: url(${Synth});
    background-size: cover;
    height: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  .introduction-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledTextBox = styled.span`
  text-align: center;
  font-size: 2rem;
  line-height: 1.5;
  display: block;
  font-weight: 400;
  font-family: var(--font-primary);
  margin: 1rem 0;
  color: var(--color-text);
  width: 75ch;
  max-width: 75%;
  background-color: #001;
  padding: 2.5rem;
  border-radius: 0.6rem;

  &.headline {
    background-color: var(--color-text);
    color: #000;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.25;
    width: 65ch;

  }

  a {
    display: inline-block;
    transition: 0.2s;
    color: var(--color-text);
    :hover {
      color: var(--color-link-hover);
    }
  }
  }
`;

const StyledHeroArrow = styled.button`
  display: block;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 0 auto;
  z-index: 9999;
  height: 7rem;
  border: 5px solid var(--color-text);
  border-radius: 100%;
  background-color: var(--color-text);
  @media only screen and (min-width: 1200px) {
    display: none;
  }

  img {
    height: 100%;
  }
`;

const StyledRecommendation = styled.section`
  grid-area: recommendation;
  color: var(--color-text);
  font-size: 1.625rem;
  font-style: italic;
  font-family: var(--font-accent);
  font-weight: thin;
  max-width: 60%;
  margin: 0 auto;
  padding: 10rem 0;

  line-height: 3;
  text-align: center;

  p.recommendation-text {
    padding: 2rem;
    :before,
    :after {
      content: '“';
      display: inline-block;
      transform: scale(3.5) translateY(0.2rem);
      margin-right: 3rem;
    }

    :after {
      content: '”';
      margin-right: 0;
      margin-left: 2rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 10rem 0;
  }

  .company-card {
    text-align: center;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    color: var(--color-text);
    font-size: 2rem;
    margin-right: 6rem;

    p {
      font-family: var(--font-primary);
      font-weight: 700;
    }
    img {
      margin-right: 1rem;
      border-radius: 50%;
      width: 6rem;
    }
  }
`;

export const StyledVideoGrid = styled.section`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 8rem;
  .video-grid-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, min-content);
    justify-content: center;
    @media only screen and (min-width: 800px) {
      grid-template-columns: repeat(2, min-content);
    }
  }
  .video-item {
    position: relative;
    width: 70vw;
    height: 40vw;
    @media only screen and (min-width: 600px) {
      height: 30vw;
      width: 50vw;
    }
    @media only screen and (min-width: 800px) {
      height: 25vw;
      width: 40vw;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

export {
  StyledHomeContainer,
  StyledSplashReel,
  StyledSplashArrow,
  StyledHero,
  StyledTextBox,
  StyledHeroArrow,
  StyledRecommendation,
};
