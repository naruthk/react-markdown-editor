import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';
import YouTube from 'react-youtube';

class VideoPlayer extends Component {

  render() {

    const url = this.props.currentVideo;

    if (!url || url === 'empty') {
      return (
        <div class="global-wrap text-center">
          <FontAwesome name="heart" size='5x'/>
          <div class="margin-t-20"></div>
          <p>No video to show</p>
        </div>
      );
    }


    const videoSettings = {
      height: '600',
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };

    const youtubeFormedUrl = `https:\/\/www.youtube.com/watch?v=${url}`;

    return (
      
      <div>
        <YouTube
          videoId = {url}
          opts={videoSettings}
          onReady={this._onReady}
        />

        <p>Currently playing: <a href={youtubeFormedUrl} title="Current video" target="_blank">{youtubeFormedUrl}</a></p>
        <div className="margin-t-20"></div>
      </div>
    );
  }
}

export default VideoPlayer;
