import React, { Component } from 'react';
import glamorous from 'glamorous';
import Header from './Header';
import Footer from './Footer';

import Screenshot from '../../img/screenshot.png';

class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <div className="container">
        <div className="margin-t-60"></div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img src={Screenshot} className="img-responsive img-fluid" />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h2>Features</h2>
              <ul>
                <li>Note card format</li>
                <li>Support multiple programming languages</li>
                <li>Embeded YouTube video player</li>
                <li>Stores data in the cloud</li>
              </ul>
              <p>Sign in to continue</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;