/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyledMoreContentContainer,
  StyledContentItem,
} from './MoreContent.styled';

const content = [
  {
    description:
      'A quick reel of various projects I have worked on doing post-production sound design and location sound recording, as well as some redesigns for shorter form content.',
    id: 0,
    subtitle: '',
    title: 'Film Sound Design Portfolio',
    url: 'https://player.vimeo.com/video/884381928',
  },
  {
    description:
      'A short sci-fi/western hybrid film I worked on in collaboration with a couple of VFX students at university. The film was shot with no location sound, so I was responsible for crafting the soundscape of the world from scratch. This included mixing howling praerie winds with heightened leather foley to bring out the western feel, as well as synthesizing a robotic language and a screaming spaceship engine.',
    id: 1,
    subtitle: 'Short Space Western Film with VFX',
    title: 'Shadows of the Prairie:',
    url: 'https://player.vimeo.com/video/829845880',
  },
  {
    description:
      'Written and directed by Sam Burnett, A Period Piece is a student-made TV show pilot which follows protagonist Eloise, during the week of her period each month. Eloise has to struggle through the monotony of day-to-day life and its trials and tribulations, all while suffering cramps, tiredness, mood swings, as well as some of the not-so-understanding men in her life! I was responsible for overseeing the audio for this project, from location sound recording to postproduction sound design to the final re-recording mix.',
    id: 2,
    subtitle: 'Student Short Film - Comedy Drama',
    title: 'A Period Piece:',
    url: 'https://player.vimeo.com/video/859043892',
  },
  {
    description:
      'I worked on this short film in my first term of University. The lack of dialogue and fragmented mental state of the main character allowed for a lot of storytelling through sound; using heavy effects to create a surreal and disconserting atmosphere, as well as building tension right up into the climax.',
    id: 3,
    subtitle: 'Student Short Film - Psychological Thriller',
    title: 'Here With You:',
    url: 'https://player.vimeo.com/video/802997585',
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
