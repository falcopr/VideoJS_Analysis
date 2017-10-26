import React from 'react';
import { VideoPlayer } from './../videoplayer.jsx'

const videoJsOptions = {
  id: 'youtubePlayBack',
  // autoplay: true,
  controls: true,
  width: '640',
  height: '264',
  techOrder: ['youtube'],
  sources: [{
    src: 'https://www.youtube.com/watch?v=wbFk-YrZECc',
    type: 'video/youtube'
  }]
}

export class YoutubePlayBack extends React.Component {
  render() {
    return <div>
      <h2>YouTube Video Playback</h2>
      <VideoPlayer { ...videoJsOptions }></VideoPlayer>
    </div>;
  }
}
