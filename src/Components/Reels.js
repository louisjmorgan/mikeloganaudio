/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyledReelsContainer, StyledReel } from './Reels.styled';

const content = [
  {
    id: 0,
    title: 'Game Audio Sound Design Reel',
    url: 'https://player.vimeo.com/video/563007174?h=5ac6615590',
  },
  {
    id: 1,
    title: 'Game Audio Composition Reel',
    url: 'https://player.vimeo.com/video/564597865?h=a24f152033',
  },
];

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

const Reels = () => {
  const reelsContent = content.map((reel) => (
    <Reel title={reel.title} url={reel.url} key={reel.id} />
  ));
  return (
    <main>
      <StyledReelsContainer>{reelsContent}</StyledReelsContainer>
    </main>
  );
};

export default Reels;