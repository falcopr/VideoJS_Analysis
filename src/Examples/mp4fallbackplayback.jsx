import videojs from './../../node_modules/video.js/dist/video.cjs.js';
import React from 'react';

export class Mp4FallbackVideoPlayBack extends React.Component {
  render() {
    return <div>
      <h2>.mp4 Fallback Video Playback</h2>
      <video
        id="mp4fallbackVideoPlayBack"
        className="video-js vjs-default-skin"
        controls
        width="640"
        height="264"
        preload="auto">
      </video>
    </div>;
  }

  componentDidMount() {
    let that = this;
    (async() => {
      this.player = videojs('mp4fallbackVideoPlayBack', {
        'techOrder': ['html5']
      });

      this.player.src([{
        type: 'video/mp4',
        src: 'https://ideastv.s3.amazonaws.com/IDTV533_181017_IDTV_PB_9000 Mbit_720p.mp4'
      }, {
        type: 'video/mp4',
        src: 'https://ideastv.s3.amazonaws.com/IDTV533_181017_IDTV_PB_1Mbit_720p.mp4'
      }]);

      this.player.on('error', err => {
        console.log(err);
        console.log('An error has occured for the fallback video player.');
      })

      this.player.on('ready', () => {
        videojs.log('Your player is ready!');
        that.player.play();
      });

      this.player.on('ended', () => {
        videojs.log('Awww...over so soon?!');
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
