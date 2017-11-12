import React, { Component } from 'react';

import base from '../base';

import Header from './Header';
import Footer from './Footer';
import AddVideoLink from './AddVideoLink';
import FontAwesome from 'react-fontawesome';
import VideoPlayer from './VideoPlayer';
import YouTube from 'react-youtube';

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
    this.ref = base.syncState(`videos`, {
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
      <div key={key}>
        <p>
          <a onClick={(e) => this.playVideo(item.url)}>
            <span className="icon">
              {item.category === 'YouTube' && <FontAwesome name="youtube" />}
              {item.category === 'Facebook' && <FontAwesome name="facebook-official" />}
              { (item.category !== 'Facebook' && item.category !== 'YouTube') && <FontAwesome name="file" />}
            </span> 
            <span className="title">{item.title}</span>
          </a> - {item.notes} - <i>Added on: {item.timestamp}</i>
        </p>
      </div>
    )
  }

  render() {

    const videoSettings = {
      height: '500',
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      
      <div className="App">
        <Header />
        <div className="container">

          <div className="margin-t-60"></div>

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
        <Footer />
      </div>
    );
  }
}

export default Videos;
