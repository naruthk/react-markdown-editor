import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  render() {
    return (
      <Link {...this.props} />
    )
  }
}

export default Menu;