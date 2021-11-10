import React from 'react';
import './styles.css';

const MoreContent = () => {
  return (
    <main>
      <div className="more-content">
        <div className="content-item">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/640508599?h=364346f483"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
          <div className="video-description">
            <h2>
              30 Second Sound Design:
              <i> Warframe Excalibur Sword</i>
            </h2>
            <p>
              The second installment in my quickfire sound design
              tutorial series focuses on using spectral morphing to
              texture Foley recordings and create something more
              mystical. Comment on my Instagram with any requests for
              future videos!
            </p>
          </div>
        </div>
        <div className="content-item">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/610762009?h=fdc9708708"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
          <div className="video-description">
            <h2>
              30 second sound design:
              <i> RDR2 Springfield Rifle</i>
            </h2>
            <p>
              I’ve started a short series of rapid-fire 30 second
              sound design tutorials. Comment on my Instagram if you
              have any requests!
            </p>
          </div>
        </div>
        <div className="content-item">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/566611864?h=ce866e9b0d"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
          <div className="video-description">
            <h2>
              Zurlough:
              <i> A Demo Game Scene with Interactive Audio</i>
            </h2>
            <p>
              This was part of a university collaboration project with
              RonaaFunkyGames, game design student at Bournemouth
              University. The level was created using Unity engine and
              the audio implemented using Audiokinetic Wwise. The
              soundtrack and SFX were created with Ableton Live.
            </p>
          </div>
        </div>
        <div className="content-item">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/565002690?h=3b4ffe747c"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
          <div className="video-description">
            <h2>
              Using Morph VST and Device Randomizer to diversify SFX
            </h2>
            <p>
              A really cool technique; combining a squishy gore sound
              and a more transient impact in various unique ways using
              Zynaptiq&apos;s Morph plugin and Ableton&apos;s Device
              Randomizer.
            </p>
          </div>
        </div>
        <div className="content-item">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/iRIeV4wClZg"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
          <div className="video-description">
            <h2>
              WWYD Films:
              <br />
              <i>Possession</i>
            </h2>
            <p>
              This was another collaboration with indie filmmakers
              WWYD Films, and an entry for the Raindance Film Festival
              “Sixty Spooky Seconds” contest. With no location audio I
              provided all sound effects and Foley to bring the images
              to life, along with being responsible for the overall
              audio mix.
            </p>
          </div>
        </div>
        <div className="content-item">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/1VAGr_iFGMY"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
          <div className="video-description">
            <h2>
              WWYD Films:
              <br />
              <i>The Stalker</i>
            </h2>
            <p>
              I collaborated on this short film with indie film
              production group WWYD Films, to create a horror short in
              which I was responsible for audio post-production, sound
              design, and the overall audio mix. The Stalker released
              on 15th August 2021.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoreContent;
