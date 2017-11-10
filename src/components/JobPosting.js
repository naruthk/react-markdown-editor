import React from 'react';

import MenuWithIcon from './MenuWithIcon';
import Skills from './Skills';

class JobPosting extends React.Component {
    render() {
        return (
            <div id="job-status">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-md-6 text-center">
                            <div className="margin-t-60"></div>
                            <h2>Available for Hire</h2>
                            <p className="p-focus">Previously interned as a <b>Front-End Web Developer</b> and also an <b>Android Application Developer</b>.</p>
                        </div>
                    <div className="col-sm-6 col-md-6 col-md-6 text-center">
                        <div className="margin-t-60"></div>
                        <div className="image-job-open"></div>
                        <p className="resume">
                            <MenuWithIcon url="http://www.naruthk.com/media/Kongurai_Naruth_grad2018.pdf" title="View My Resume" iconName="file-text" />
                        </p>
                    </div>
                </div>
                <div className="skills">
                    <div className="row">
                        <Skills title="Programming Languages" items="Python, Java, Swift, HTML5, CSS3, Javascript, PHP" />
                        <Skills title="Libraries, Frameworks, Tools" items="React, SCSS, Bootstrap, NodeJS, Vanilla JS, Typescript, Git" />
                        <Skills title="Software (Design/Coding)" items="Adobe Photoshop, Android Studio, Adobe XD, Xcode, Eclipse, VS Code, Sublime, iTerm 2" />
                    </div>
                </div>
                <div className="margin-t-60"></div>
            </div>
            </div>
        )
    }
}

export default JobPosting;