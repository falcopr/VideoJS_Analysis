import videojs from './../../node_modules/video.js/dist/video.cjs.js';
import React from 'react';

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

  isFavIconAvailable(favIconURL) {
    return new Promise((resolve, reject) => {
      let image = new window.Image();
      image.onload = () => {
        resolve('Fav icon can be loaded successfully!');
      }

      image.onerror = () => {
        reject(new Error('Fav icon can not be loaded successfully! Either it is because the site does not exist or you are behind a proxy.'));
      }

      image.src = favIconURL
    });
  }

  isYouTubeAvailable() {
    return this.isFavIconAvailable('https://youtube.com/favicon.ico');
  }

  isAWSAvailable() {
    return this.isFavIconAvailable('https://ideasdailytv.s3.amazonaws.com/test/s3_source.ico');
  }

  componentDidMount() {
    let that = this;
    (async() => {
      this.player = videojs('fallbackWithPreCheckVideoPlayBack', {
        'techOrder': ['youtube', 'html5']
      });

      let videoSrc = [];
      try {
        await this.isYouTubeAvailable();
        videoSrc.push({
          src: 'https://www.youtube.com/watch?v=wbFk-YrZECc',
          type: 'video/youtube'
        });
      } catch (err) {
      }

      try {
        await this.isAWSAvailable();
        videoSrc.push({
          type: 'video/mp4',
          src: 'https://ideastv.s3.amazonaws.com/IDTV533_181017_IDTV_PB_1Mbit_720p.mp4'
        });
      } catch (err) {
      }

      this.player.src(videoSrc);

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
