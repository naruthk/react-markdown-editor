import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
    return (
        <div className="header-logo">
            <a href={props.url}>{props.title}</a>
        </div>
    )
}

Logo.propTypes = {
  url: PropTypes.string.isRequired
}

export default Logo;