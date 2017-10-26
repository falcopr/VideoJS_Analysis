import videojs from './../../node_modules/video.js/dist/video.cjs.js';
import React from 'react';

export class Mp4PlayBackImperative extends React.Component {
  render() {
    return <div>
      <h2>.mp4 Playback through AWS Imperatively</h2>
      <video
        id="mp4PlayBackImperative"
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
      this.player = videojs('mp4PlayBackImperative', {
        // 'techOrder': ['youtube']
      });

      this.player.src([{
        type: 'video/mp4',
        src: 'https://ideastv.s3.amazonaws.com/IDTV533_181017_IDTV_PB_1Mbit_720p.mp4'
      }]);

      this.player.on('ready', async () => {
        videojs.log('Your player is ready!');
        // that.player.play();
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
