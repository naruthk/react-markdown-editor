import React, { Component } from 'react';

import base from '../base';
import RelativeDate from 'relative-date';

import AddVideoLink from './AddVideoLink';
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
        <div className="container">

          <div className="margin-t-20"></div>

          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <h1>Videos</h1>
            </div>
            {/* <div className="col-sm-6 col-md-6 col-lg-6 text-right">
              <a href="#" data-toggle="modal" data-target="#addForm">
                <FontAwesome name="plus-circle" size="4x" />
              </a>
            </div> */}
          </div>

          <VideoPlayer
            videos={this.state.videos}
            currentVideo={this.state.currentVideo}
            params={this.props.params}
          />

          <div className="global-wrap">
            <div className="row video-list">
              {Object.keys(this.state.videos).map(this.renderExistingItems)}
            </div>
          </div>

          <div className="margin-t-60"></div>
          <hr />
          <h2>Add New Video</h2>
          <AddVideoLink
            addItem={this.addItem}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default Videos;
