import React from 'react';
import Logo from './Logo';
import Account from './Account';
import Menu from './Menu';

class Header extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header className="topHeader">
        <div className="container">
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <Logo url="/" title="NK" />
                </div>
                <div className="col-sm-10 col-md-10 col-lg-10">
                    <div className="social-links">
                        <div className="col-xs-12 col-md-12 col-lg-12">
                          <Menu to="/dashboard">Dashboard</Menu>
                          {/* <Menu to="/" title="Add Card">Add Card</Menu> */}
                          <a href="#" onClick={this.props.handleOpenModal}>Add Card</a>
                          <Menu to="/account">Account</Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    )
  }
}

export default Header;