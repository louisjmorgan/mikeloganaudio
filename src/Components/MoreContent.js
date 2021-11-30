/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyledMoreContentContainer,
  StyledContentItem,
} from './MoreContent.styled';

const ContentItem = ({ title, subtitle, description, url }) => {
  return (
    <StyledContentItem>
      <div className="video-container">
        <iframe title="video-player" src={url} allowFullScreen />
      </div>
      <div className="text-container">
        <h2>
          {title}
          &nbsp;
          <i>{subtitle}</i>
        </h2>
        <p>{description}</p>
      </div>
    </StyledContentItem>
  );
};

const MoreContent = ({ data }) => {
  const moreContent = Object.entries(data).map((item) => (
    <ContentItem
      title={item[1].title}
      subtitle={item[1].subtitle}
      description={item[1].description}
      url={item[1].url}
      key={item[1].id}
    />
  ));
  return (
    <main>
      <StyledMoreContentContainer>
        {moreContent}
      </StyledMoreContentContainer>
    </main>
  );
};

export default MoreContent;
