/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyledReelsContainer, StyledReel } from './Reels.styled';

const Reel = ({ title, url }) => {
  return (
    <StyledReel className="reel">
      <span>{title}</span>
      <iframe
        title="vimeo-player"
        src={url}
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
      />
    </StyledReel>
  );
};

const Reels = ({ data }) => {
  const reelsContent = Object.entries(data).map((reel) => (
    <Reel title={reel[1].title} url={reel[1].url} key={reel[1].id} />
  ));
  return (
    <main>
      <StyledReelsContainer>{reelsContent}</StyledReelsContainer>
    </main>
  );
};

export default Reels;
