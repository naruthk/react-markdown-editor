import React from 'react';
import PropTypes from 'prop-types';

const Menu = (props) => {
    return (
        <a href={props.url} title={props.title} target="_blank" rel="noopener noreferrer">{props.title}</a>
    )
}

Menu.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Menu;