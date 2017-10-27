import React from 'react';
import { VideoPlayer } from './../videoplayer.jsx'

const videoJsOptions = {
  id: 'mp4PlayBack',
  // autoplay: true,
  controls: true,
  width: '640',
  height: '264',
  techOrder: ['html5'],
  sources: [{
    src: 'https://ideastv.s3.amazonaws.com/IDTV533_181017_IDTV_PB_1Mbit_720p.mp4',
    type: 'video/mp4'
  }]
}

export class Mp4PlayBack extends React.Component {
  render() {
    return <div>
      <h2>.mp4 Playback through AWS</h2>
      <VideoPlayer { ...videoJsOptions }></VideoPlayer>
    </div>;
  }
}
