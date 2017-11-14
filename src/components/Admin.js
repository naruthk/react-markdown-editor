import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

import './../css/admin_portal.css';

import Header from './Header';
import Footer from './Footer';
import Videos from './Videos';

import FontAwesome from 'react-fontawesome';

class Admin extends React.Component {

  constructor() {
    super();

    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.state = {
      uid: null
    }
  }

  authenticate(provider) {
    firebase.auth().signInWithPopup(provider)
      .then(this.authHandler)
      .catch(err => console.log(err))
  }

  authHandler(authData) {
    console.log(authData.user.uid);
    this.setState({
      uid: authData.user.uid
    });
  }

  renderLogin() {
    return (
      <div className="container text-center">
        <nav className="login">
          <h1>Admin Console</h1>
          <p>Please sign in to access portal.</p>
          <div className="margin-t-20"></div>
          <button className="github" onClick={this.authenticate.bind(this, new firebase.auth.GithubAuthProvider())}>
            Sign in with {<FontAwesome name="github" />}
          </button>
          <button className="google" onClick={this.authenticate.bind(this, new firebase.auth.GoogleAuthProvider())}>
            Sign in with {<FontAwesome name="google" />}
          </button>
        </nav>
      </div>
    )
  }

  render() {
    const logout = <button className="logout">Logout</button>
    if (!this.state.uid) {
      return (
        <div>
          <Header />
          <div id="globalWrap_admin">
            {this.renderLogin()}
          </div>
          <Footer />
        </div>
      )
    }

    return (
      <div>
        <Header />
        <div id="globalWrap_admin">
          <Videos uid={this.state.uid} />
        </div>
        <div className="container text-right">
          {logout}
        </div>
        <Footer />
      </div>
    )
  }
}


Admin.contextTypes = {
  router: PropTypes.object
};

export default Admin;