import videojs from './../../node_modules/video.js/dist/video.cjs.js';
import React from 'react';
import $ from 'jquery';

export class FallbackWithPreCheckVideoPlayBack extends React.Component {
  render() {
    return <div>
      <h2>Fallback With Pre Check Video Playback</h2>
      <video
        id="fallbackWithPreCheckVideoPlayBack"
        className="video-js vjs-default-skin"
        controls
        width="640"
        height="264"
        autoPlay
        preload="auto">
      </video>
    </div>;
  }

  checkIfYouTubeVideoExists(videoID) {
    return new Promise((resolve, reject) => {
      $.getJSON(`http://gdata.youtube.com/feeds/api/videos/${videoID}?v=2&alt=jsonc`, resolve).error(reject)
    });
  }

  componentDidMount() {
    let that = this;
    (async() => {
      this.player = videojs('fallbackWithPreCheckVideoPlayBack', {
        'techOrder': ['youtube', 'html5']
      });

      try {
        await this.checkIfYouTubeVideoExists('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
      } catch (err) {
        this.player.src([{
          // src: 'https://www.youtube.com/watch?v=wbFk-YrZECc',
          // https://github.com/videojs/video.js/issues/1316
          // Fallback does not work. How to detect if an video can be played?
          src: 'https://www.youtube.com/watch?v=wbFk-YrZECc',
          type: 'video/youtube'
        }, {
          type: 'video/mp4',
          src: 'https://ideastv.s3.amazonaws.com/IDTV533_181017_IDTV_PB_1Mbit_720p.mp4'
        }]);
      }

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
