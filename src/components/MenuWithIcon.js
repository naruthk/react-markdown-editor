import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const MenuWithIcon = (props) => {
    return (
        <a href={props.url} title={props.title} target="_blank" rel="noopener noreferrer">          
            <FontAwesome name={props.iconName} />  {props.showTitle && props.title}
        </a>
    )
}

MenuWithIcon.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired
}

export default MenuWithIcon;