import React from 'react';
import { VideoPlayer } from './../videoplayer.jsx'

const videoJsOptions = {
  id: 'vimeoPlayBack',
  autoplay: true,
  controls: true,
  width: '640',
  height: '264',
  techOrder: ['vimeo'],
  sources: [{
    src: 'https://vimeo.com/96180052',
    type: 'video/vimeo'
  }]
}

export class VimeoPlayBack extends React.Component {
  render() {
    return <div>
      <h2>Vimeo Video PlayBack</h2>
      <VideoPlayer { ...videoJsOptions }></VideoPlayer>
    </div>;
  }
}
