import React from 'react';

export class Mp4PlayBackDeclarative extends React.Component {
  render() {
    return <div>
      <h2>.mp4 Playback through AWS Declaratively</h2>
      <video
        id="mp4PlayBackDeclarative"
        className="video-js vjs-default-skin"
        controls
        width="640"
        height="264"
        preload="auto"
        data-setup='{}'>
        <source type='video/mp4' src='https://ideastv.s3.amazonaws.com/IDTV533_181017_IDTV_PB_1Mbit_720p.mp4'></source>
      </video>
    </div>;
  }
}
