/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyledMoreContentContainer,
  StyledContentItem,
} from './MoreContent.styled';

const content = [
  {
    description:
      'The second installment in my quickfire sound design tutorial series focuses on using spectral morphing to texture Foley recordings and create something more mystical. Comment on my Instagram with any requests for future videos!',
    id: 0,
    subtitle: 'Warframe Excalibur Sword',
    title: '30 Second Sound Design:',
    url: 'https://player.vimeo.com/video/640508599?h=364346f483',
  },
  {
    description:
      'I’ve started a short series of rapid-fire 30 second sound design tutorials. Comment on my Instagram if you have any requests!',
    id: 1,
    subtitle: 'RDR2 Springfield Rifle',
    title: '30 Second Sound Design:',
    url: 'https://player.vimeo.com/video/610762009?h=fdc9708708',
  },
  {
    description:
      'This was part of a university collaboration project with RonaaFunkyGames, game design student at Bournemouth University. The level was created using Unity engine and the audio implemented using Audiokinetic Wwise. The soundtrack and SFX were created with Ableton Live.',
    id: 2,
    subtitle: 'A Demo Game Scene with Interactive Audio',
    title: 'Zurlough:',
    url: 'https://player.vimeo.com/video/566611864?h=ce866e9b0d',
  },
  {
    description:
      "A really cool technique; combining a squishy gore sound and a more transient impact in various unique ways using Zynaptiq's Morph plugin and Ableton's Device Randomizer.",
    id: 3,
    subtitle: '',
    title: 'Using Morph VST and Device Randomizer to diversify SFX',
    url: 'https://player.vimeo.com/video/565002690?h=3b4ffe747c',
  },
  {
    description:
      'This was another collaboration with indie filmmakers WWYD Films, and an entry for the Raindance Film Festival “Sixty Spooky Seconds” contest. With no location audio I provided all sound effects and Foley to bring the images to life, along with being responsible for the overall audio mix.',
    id: 4,
    subtitle: 'Possession',
    title: 'WWYD Films:',
    url: 'https://www.youtube.com/embed/iRIeV4wClZg',
  },
  {
    description:
      'I collaborated on this short film with indie film production group WWYD Films, to create a horror short in which I was responsible for audio post-production, sound design, and the overall audio mix. The Stalker released on 15th August 2021.',
    id: 5,
    subtitle: 'The Stalker',
    title: 'WWYD Films:',
    url: 'https://www.youtube.com/embed/1VAGr_iFGMY',
  },
];

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

const MoreContent = () => {
  const moreContent = content.map((item) => (
    <ContentItem
      title={item.title}
      subtitle={item.subtitle}
      description={item.description}
      url={item.url}
      key={item.id}
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
