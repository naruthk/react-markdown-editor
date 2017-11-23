import React from 'react';
import Menu from './Menu';
import FontAwesome from 'react-fontawesome';

class Header extends React.Component {
  
  render() {
    
    return (
      <header>
        <div className="social-links">
          <Menu to="/"><FontAwesome name="home" /></Menu>
          <Menu to="/account"><FontAwesome name="address-card" /></Menu>
          <Menu to="/print"><FontAwesome name="print" /></Menu>
          <a onClick={this.props.handleOpenModal}><FontAwesome name="plus" /></a>
        </div>
      </header>
    )
  }
}

export default Header;