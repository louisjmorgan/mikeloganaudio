/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const StyledReelsContainer = styled.div`
  margin: 15rem auto;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  grid-gap: 12rem;

  @media only screen and (min-width: 1200px) {
    margin: 3rem auto;
    grid-gap: 2rem;
  }

  .reel:nth-of-type(even) {
    @media only screen and (min-width: 1200px) {
      flex-direction: row-reverse;
    }
  }

  .reel:nth-of-type(even) span {
    @media only screen and (min-width: 1200px) {
      text-align: left;
    }
  }
`;

const StyledReel = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 10rem;
    width: 80vw;
    height: 40vw;
    justify-self: center;
    margin-bottom: 2rem;
  }

  span {
    margin: 0 auto 2rem;
    font-family: var(--font-secondary);
    color: var(--color-text);
    justify-self: center;
    align-self: center;
    font-size: 2.5rem;
    text-align: center;
    width: 100%;
    font-weight: 600;
    @media only screen and (min-width: 1800px) {
      font-size: 3rem;
    }

    @media only screen and (min-width: 1200px) {
      text-align: right;
      width: 30%;
      max-width: 20ch;
      margin-bottom: 0;
    }
  }

  iframe {
    width: 80vw;
    height: 40vw;
    align-self: center;

    @media only screen and (min-width: 1200px) {
      margin: 0;
    }
  }
`;
export { StyledReelsContainer, StyledReel };
