import React from 'react';
import { render } from 'react-dom';

import { Mp4PlayBackDeclarative } from 'Examples/mp4playbackdeclarative';
import { Mp4PlayBackImperative } from 'Examples/mp4playbackimperative';
import { Mp4PlayBack } from 'Examples/mp4playback';
import { Mp4FallbackVideoPlayBack } from 'Examples/mp4fallbackplayback';
import { YoutubePlayBack } from 'Examples/youtubeplayback';
import { YoutubeShortUrlPlayBack } from 'Examples/youtubeshorturlplayback';
import { VimeoPlayBack } from 'Examples/vimeoplayback';
import { FallbackVideoPlayBack } from 'Examples/fallbackvideoplayback';

class App extends React.Component {
  render() {
    return <div>
      <h1>VideoJS for Retail</h1>
      <Mp4PlayBack></Mp4PlayBack>
      <YoutubePlayBack></YoutubePlayBack>
      <YoutubeShortUrlPlayBack></YoutubeShortUrlPlayBack>
      <Mp4PlayBackDeclarative></Mp4PlayBackDeclarative>
      <Mp4PlayBackImperative></Mp4PlayBackImperative>
      <Mp4FallbackVideoPlayBack></Mp4FallbackVideoPlayBack>
      <FallbackVideoPlayBack></FallbackVideoPlayBack>
      <VimeoPlayBack></VimeoPlayBack>
    </div>;
  }
}

function run() {
  render(<App />, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
