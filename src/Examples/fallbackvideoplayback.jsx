import videojs from './../../node_modules/video.js/dist/video.cjs.js';
import React from 'react';

export class FallbackVideoPlayBack extends React.Component {
  render() {
    return <div>
      <h2>Fallback Video Playback</h2>
      <video
        id="fallbackVideoPlayBack"
        className="video-js vjs-default-skin"
        controls
        width="640"
        height="264"
        autoPlay
        preload="auto">
      </video>
    </div>;
  }

  componentDidMount() {
    let that = this;
    (async() => {
      this.player = videojs('fallbackVideoPlayBack', {
        'techOrder': ['youtube', 'html5']
      });

      this.player.src([{
        // src: 'https://www.youtube.com/watch?v=wbFk-YrZECc',
        // https://github.com/videojs/video.js/issues/1316
        // Fallback does not work. How to detect if an video can be played?
        src: 'https://www.youtube.com/watch?v=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        type: 'video/youtube'
      }, {
        type: 'video/mp4',
        src: 'https://ideastv.s3.amazonaws.com/IDTV533_181017_IDTV_PB_1Mbit_720p.mp4'
      }]);

      this.player.on('error', err => {
        console.log(err);
        console.log('An error has occured for the fallback video player.');
        console.log('Fallback to working video manually.');
        this.player.src({
          type: 'video/mp4',
          src: 'https://ideastv.s3.amazonaws.com/IDTV533_181017_IDTV_PB_1Mbit_720p.mp4'
        });
      })

      this.player.on('ready', () => {
        videojs.log('Your player is ready!');
        that.player.play();
      });

      this.player.on('ended', () => {
        videojs.log('Awww...over so soon?!');
      });

      this.player.on('canplaythrough', () => {
        console.log('canplaythrough event fired for YouTube to .mp4 fallback.');
      });

      this.player.on('canplay', () => {
        console.log('canplay event fired for YouTube to .mp4 fallback.');
      });
    })();
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
