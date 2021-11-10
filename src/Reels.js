import React from 'react';
import './styles.css';

const Reels = () => {
  return (
    <main>
      <div>
        <section className="videos" id="reels">
          <span>Game Audio Sound Design Reel</span>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/563007174?h=5ac6615590"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
          <span>Game Audio Composition Reel 2021</span>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/564597865?h=a24f152033"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          />
        </section>
      </div>
    </main>
  );
};

export default Reels;
