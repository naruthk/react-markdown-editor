import React from 'react';

const Skills = (props) => {
    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <p><b>{props.title}:</b></p>
            </div>
            <div className="col-xs-12-col sm-12 col-md-8 col-lg-8">
                <p>{props.items}</p>
            </div>
        </div>
    )
}

export default Skills;