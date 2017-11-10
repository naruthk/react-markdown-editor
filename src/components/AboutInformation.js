import React from 'react';

const AboutInformation = (props) => {
    return (
        <div>
            <h2>{props.topTagline}</h2>
            <div className="info">
                <p>{props.bottomTagline}</p>
            </div>
        </div>
    )
}

export default AboutInformation;