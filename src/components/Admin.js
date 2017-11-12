import React from 'react';
import base from '../base';

import './../css/admin_portal.css';

import Header from './Header';
import Footer from './Footer';

import FontAwesome from 'react-fontawesome';

class Admin extends React.Component {

  constructor() {
    super();

    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.state = {
      uid: null,
      owner: null
    }
  }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.AuthWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(authData);
  }

  renderLogin() {
    return (
      <div className="container text-center">
        <nav className="login">
          <h1>Admin Console</h1>
          <p>Please sign in to access portal.</p>
          <div className="margin-t-20"></div>
          <button className="github" onClick={() => this.authenticate('github')}>
            Sign in with {<FontAwesome name="github" />}
          </button>
          <button className="google" onClick={() => this.authenticate('google')}>
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
          {logout}
          <p>Login successful!</p>
        </div>
      </div>
    )
  }
}

export default Admin;