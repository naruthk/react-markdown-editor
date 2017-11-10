import React from 'react';

const Menu = (props) => {
    return (
        <a href={props.url} title={props.title} target="_blank" rel="noopener noreferrer">{props.title}</a>
    )
}

export default Menu;