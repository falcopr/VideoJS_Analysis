import React from 'react';
import { render } from 'react-dom';

import { Mp4PlayBackDeclarative } from 'Examples/mp4playbackdeclarative.jsx';
import { Mp4PlayBackImperative } from 'Examples/mp4playbackimperative.jsx';
import { YoutubePlayBack } from 'Examples/youtubeplayback.jsx';
import { YoutubeShortUrlPlayBack } from 'Examples/youtubeshorturlplayback.jsx';
import { VimeoPlayBack } from 'Examples/vimeoplayback.jsx';

class App extends React.Component {
  render() {
    return <div>
      <h1>VideoJS for Retail</h1>
      <YoutubeShortUrlPlayBack></YoutubeShortUrlPlayBack>
      <YoutubePlayBack></YoutubePlayBack>
      <Mp4PlayBackDeclarative></Mp4PlayBackDeclarative>
      <Mp4PlayBackImperative></Mp4PlayBackImperative>
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
