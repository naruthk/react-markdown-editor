import React from 'react';

import ProfilePicture from './../img/naruth2.png';
import AboutInformation from './AboutInformation';
import Updates from './Updates';

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <div className="full-screen">
                    <img className="profile-picture" src={ProfilePicture} alt="Naruth Kongurai" />
                    <AboutInformation 
                        topTagline="Hi, my name is Naruth Kongurai"
                        bottomTagline="I love to design and develop front-end web applications and create mobile applications for Android and iOS. Currently I am an undergraduate student at the University of Washington." />
                    <Updates status="React JS!" />
                </div>
            </div>
        )
    }
}

export default About;