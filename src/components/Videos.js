import React, { Component } from 'react';

import base from '../base';
import RelativeDate from 'relative-date';

import AddNoteLink from './AddNoteLink';
import FontAwesome from 'react-fontawesome';
import VideoPlayer from './VideoPlayer';

import './../css/downloads.css';

class Videos extends Component {

  constructor() {
    super();

    this.addItem = this.addItem.bind(this);
    this.renderExistingItems = this.renderExistingItems.bind(this);
    this.playVideo = this.playVideo.bind(this);

    this.state = {
      videos: {},
      currentVideo: "empty"
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.uid}-videos`, {
      context: this,
      state: 'videos'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addItem(item) {
    const videos = { ...this.state.videos };
    const timestamp = Date.now();
    videos[`item-${timestamp}`] = item;
    this.setState({ videos });
  }

  playVideo(url) {
    var currentVideo = { ...this.state.currentVideo };
    currentVideo = url;
    console.log({ currentVideo });
    this.setState({ currentVideo })
  }

  renderExistingItems(key) {
    
    const item = this.state.videos[key];

    return (
      <div key={key} className="single-video-list">
          <a onClick={(e) => this.playVideo(item.url)}>
            <div className="row">
              <div className="col-sm-10 col-md-10 col-lg-10">
                <p>
                  <span className="icon">
                    {item.category === 'YouTube' && <FontAwesome name="youtube" />}
                    {item.category === 'Facebook' && <FontAwesome name="facebook-official" />}
                    { (item.category !== 'Facebook' && item.category !== 'YouTube') && <FontAwesome name="file" />}
                  </span> 
                  <span className="title">{item.title} </span>
                  { item.notes !== "" && <span>- {item.notes}</span>}
                </p>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2">
                <p>{RelativeDate(item.timestamp)}</p>
              </div>
            </div>
          </a>
      </div>
    )
  }

  render() {

    return (
      
      <div className="App">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <VideoPlayer
              videos={this.state.videos}
              currentVideo={this.state.currentVideo}
              params={this.props.params}
            />
          </div>
          <div className="col-xs-12- col-sm-12 col-md-4 col-lg-4">
            <div className="global-wrap">
              <div className="row video-list">
                {Object.keys(this.state.videos).map(this.renderExistingItems)}
              </div>
            </div>
          </div>
        </div>
          
        <div className="margin-t-60"></div>
        <hr />
        <h2>Add New Video</h2>
        <AddNoteLink
          addItem={this.addItem}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default Videos;
