import React from 'react';

import FontAwesome from 'react-fontawesome';

const MenuWithIcon = (props) => {
    return (
        <a href={props.url} title={props.title} target="_blank" rel="noopener noreferrer">          
            <FontAwesome name={props.iconName} /> {props.title}
        </a>
    )
}

export default MenuWithIcon;