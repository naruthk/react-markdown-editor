import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import MenuWithIcon from './MenuWithIcon';

const Updates = (props) => {

    return (
        <div className="updates">
            <div className="row">
                <MenuWithIcon url="http://www.medium.com/naruth-kongurai" title="Blog" showTitle={true} iconName="medium" />
                <MenuWithIcon url="http://www.github.com/naruthk" title="Github" showTitle={true} iconName="github" />
                <br className="visible-xs" />
                <MenuWithIcon url="http://www.linkedin.com/in/naruthkongurai" showTitle={true} title="LinkedIn" iconName="linkedin" />
            </div>
            <div className="margin-t-20"></div>
            <p id="current-activity">
                <span id="status">Currently</span> learning <b><Menu url="https://reactforbeginners.com/" title={props.status} /></b>
            </p>
        </div>
    )
}

Updates.propTypes = {
  status: PropTypes.string.isRequired
}

export default Updates;