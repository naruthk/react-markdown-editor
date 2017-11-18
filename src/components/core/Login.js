import React from 'react';
import base from '../../base';
import firebase from 'firebase';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Dashboard from '../../components/Dashboard';

import FontAwesome from 'react-fontawesome';
import glamorous from 'glamorous';

class Login extends React.Component {

  constructor() {
    super();

    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.sessionLogout = this.sessionLogout.bind(this);

    this.state = {
      uid: 'KrLCboBJdHaFLHCXsOLXRd5W42F3'
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

    const NavLoginBox = glamorous.nav({
      padding: 60
    })

    const LoginButton = glamorous.button({
      backgroundColor: '#ff7300',
      borderRadius: 20,
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 10,
      paddingBottom: 10,
      border: 0,
      color: '#fff',
      textDecorationNone: true,
      fontSize: 14,
      margin: 10
    })

    return (
      <div className="container text-center">
        <NavLoginBox>
          <h1>Admin Console</h1>
          <p>Please sign in to access portal.</p>
          <div className="margin-t-20"></div>
          <LoginButton onClick={this.authenticate.bind(this, new firebase.auth.GithubAuthProvider())}>
            Sign in with {<FontAwesome name="github" />}
          </LoginButton>
          <LoginButton onClick={this.authenticate.bind(this, new firebase.auth.GoogleAuthProvider())}>
            Sign in with {<FontAwesome name="google" />}
          </LoginButton>
        </NavLoginBox>
      </div>
    )
  }

  sessionLogout() {
    
  }

  render() {
    
    if (!this.state.uid) {
      return (
        <div>
          <Header session={this.sessionLogout} />
          {this.renderLogin()}
          <Footer />
        </div>
      )
    }

    return (
      <div>
        <Dashboard data={this.state} />
      </div>
    )
  }


}

Login.contextTypes = {
  router: PropTypes.object
};

export default Login;