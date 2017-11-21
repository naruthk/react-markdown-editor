import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Account extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="margin-t-20"></div>
          <p>Account page</p>
        </div>
        <Footer />
      </div>
    )
  }

}

export default Account;