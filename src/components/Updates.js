import React from 'react';

import Menu from './Menu';
import MenuWithIcon from './MenuWithIcon';

const Updates = (props) => {

    return (
        <div className="updates">
            <div className="row">
                <MenuWithIcon url="http://www.medium.com/naruth-kongurai" title="Blog" iconName="medium" />
                <MenuWithIcon url="http://www.github.com/naruthk" title="Github" iconName="github" />
                <br className="visible-xs" />
                <MenuWithIcon url="http://www.linkedin.com/in/naruthkongurai" title="LinkedIn" iconName="linkedin" />
            </div>
            <div className="margin-t-20"></div>
            <p id="current-activity">
                <span id="status">Currently</span> doing <b><Menu url="https://javascript30.com/" title={props.status} /></b>
            </p>
        </div>
    )

}

export default Updates;