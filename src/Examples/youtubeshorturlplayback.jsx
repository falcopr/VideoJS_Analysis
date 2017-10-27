import React from 'react';
import { VideoPlayer } from './../videoplayer.jsx'

const videoJsOptions = {
  id: 'youtubeShortUrlPlayBack',
  // autoplay: true,
  controls: true,
  width: '640',
  height: '264',
  techOrder: ['youtube'],
  sources: [{
    src: 'https://youtu.be/kJPPMaLsO-4',
    type: 'video/youtube'
  }]
}

export class YoutubeShortUrlPlayBack extends React.Component {
  render() {
    return <div>
      <h2>YouTube Video Playback</h2>
      <VideoPlayer { ...videoJsOptions }></VideoPlayer>
    </div>;
  }
}
