/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyledMoreContentContainer,
  StyledContentItem,
} from './MoreContent.styled';

const content = [
  {
    description:
      'This was an entry for the SCREAM JAM game jam on itch.io. In the game, players must navigate a very dark house and avoid being hunted by an evil Corgi, using audio cues to lure away and escape from the creature. This project allowed me to get a handle on the basics of the Unity Wwise implementation, using reverb zones, occlusion, and RTPCs (such as an ominous rumble that fades in and out dependent on the distance away from the monster). ',
    id: 1,
    subtitle: ' Escape The Dark',
    title: 'Wwise Unity Audio Implementation:',
    url: 'https://player.vimeo.com/video/875316733',
  },

  {
    description:
      'A redesign of a short gameplay clip from one of my favourite games; the idea here was to capture the oppressive atmoshpere, and sense of existential dread, of this masterclass in psychological horror from Frictional Games.',
    id: 1,
    subtitle: 'SOMA',
    title: 'Sound Redesign:',
    url: 'https://player.vimeo.com/video/623593114',
  },

  {
    description:
      'The second installment in my quickfire sound design tutorial series focuses on using spectral morphing to texture Foley recordings and create something more mystical. Comment on my Instagram with any requests for future videos!',
    id: 2,
    subtitle: 'Warframe Excalibur Sword',
    title: '30 Second Sound Design:',
    url: 'https://player.vimeo.com/video/640508599?h=364346f483',
  },
  {
    description:
      'I’ve started a short series of rapid-fire 30 second sound design tutorials. Comment on my Instagram if you have any requests!',
    id: 3,
    subtitle: 'RDR2 Springfield Rifle',
    title: '30 Second Sound Design:',
    url: 'https://player.vimeo.com/video/610762009?h=fdc9708708',
  },
  {
    description:
      'This was part of a university collaboration project with RonaaFunkyGames, game design student at Bournemouth University. The level was created using Unity engine and the audio implemented using Audiokinetic Wwise. The soundtrack and SFX were created with Ableton Live.',
    id: 4,
    subtitle: 'A Demo Game Scene with Interactive Audio',
    title: 'Zurlough:',
    url: 'https://player.vimeo.com/video/566611864?h=ce866e9b0d',
  },
  {
    description:
      "A really cool technique; combining a squishy gore sound and a more transient impact in various unique ways using Zynaptiq's Morph plugin and Ableton's Device Randomizer.",
    id: 5,
    subtitle: '',
    title: 'Using Morph VST and Device Randomizer to diversify SFX',
    url: 'https://player.vimeo.com/video/565002690?h=3b4ffe747c',
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
