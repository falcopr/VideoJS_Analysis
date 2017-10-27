import React from 'react';
import videojs from './../node_modules/video.js/dist/video.cjs.js';

export class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.jumpToOneMinute = this.jumpToOneMinute.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
  }

  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  jumpToOneMinute() {
    console.log('Jump to one minute clicked!');
    this.player.currentTime(60);
  }

  play() {
    console.log('Play clicked!');
    this.player.play();
  }

  stop() {
    console.log('Stop clicked!');
    this.player.pause();
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player>
        <div>
          <video ref={ node => this.videoNode = node } className="video-js vjs-default-skin"></video>
        </div>
        <div>
          <button onClick={ this.play }>Play</button>
          <button onClick={ this.stop }>Stop</button>
          <button onClick={ this.jumpToOneMinute }>Jump to one second</button>
        </div>
      </div>
    )
  }
}
