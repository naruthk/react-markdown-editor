import React from 'react';

const Logo = (props) => {
    return (
        <div className="header-logo">
            <a href={props.url}>{props.title}</a>
        </div>
    )
}

export default Logo;