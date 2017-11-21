import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import glamorous from 'glamorous';

class Header extends React.Component {
  
  render() {

    const LogoWrapper = glamorous.div ({ marginLeft: 50 })

    return (
      <header className="topHeader">
        <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2">
                <LogoWrapper>
                  <Logo url="/" title="NK" />
                </LogoWrapper>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10">
                <div className="social-links">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                      <Menu to="/dashboard">Dashboard</Menu>
                      <a onClick={this.props.handleOpenModal}>Add Card</a>
                      <Menu to="/account">Account</Menu>
                    </div>
                </div>
            </div>
        </div>
      </header>
    )
  }
}

export default Header;