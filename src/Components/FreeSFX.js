/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyledMoreContentContainer,
  StyledContentItem,
} from './MoreContent.styled';
import { StyledButton, StyledSfxContentItem } from './FreeSFX.styled';
import SloMoImage from '../assets/slo-mo.png';

const content = [
  {
    description:
      "This is a free sfx library that I put together, intended to be used for designing cinematic slow motion action sequences. Inside you'll find folders with Sub drops, whooshes, low frequency elements and more! All sounds are original and ready to use in your projects.                                  ",
    id: 0,
    subtitle: 'Slow‑Mo construction kit',
    title: 'Free Sound Library:',
    url: 'https://mikeloganaudio.s3.eu-west-2.amazonaws.com/mike-logan-slo-mo-construction-kit.zip',
    image: SloMoImage,
  },
];

const ContentItem = ({
  title,
  subtitle,
  description,
  url,
  image,
}) => {
  return (
    <StyledSfxContentItem>
      <img src={image} alt={title} className="sfx-image" />
      <div className="text-container">
        <h2>
          {title}
          &nbsp;
          <i>{subtitle}</i>
        </h2>
        <p>{description}</p>
        <StyledButton href={url}>Download</StyledButton>
      </div>
    </StyledSfxContentItem>
  );
};

const FreeSfx = () => {
  const moreContent = content.map((item) => (
    <ContentItem {...item} key={item.id} />
  ));
  return (
    <main>
      <StyledMoreContentContainer>
        {moreContent}
      </StyledMoreContentContainer>
    </main>
  );
};

export default FreeSfx;
