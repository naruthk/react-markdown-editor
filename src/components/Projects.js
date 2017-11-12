import React from 'react';
import PropTypes from 'prop-types';

import ProjectItem from './ProjectItem';

import PhotoWebTemplate from './../img/project-web-free-template.png';
import PhotoColorPicker from './../img/project-js-color-picker.png';
import PhotoDigitalClockTab from './../img/ui-chrome-extension-digital-clock.png';
import PhotoNiveaBlog from './../img/ui-nivea.png';
import PhotoSoccerPyCli from './../img/ui-python-soccer.png';
import PhotoDailyNotesApp from './../img/ui-daily-notes-app.png';
import PhotoSamsungEmailTemplate from './../img/ui-samsung-email.png';
import PhotoMiloHomepage from './../img/ui-milo.png';
import PhotoSHOWDCMallHomepage from './../img/ui-show-dc-mall.png';
import PhotoDCVoteApp from './../img/ui-mobile-dcvote.png';

class Projects extends React.Component {
    render(props) {
        return (
            <div id="projects">
                <div className="container">
                    <h2>{this.props.title}</h2>

                    <ProjectItem title="Portfolio Theme" span1="website" span2="" description="Showcase your projects and personal information with this fantastic modern-looking HTML5 template" url="https://github.com/naruthk/web-theme-portfolio" img={PhotoWebTemplate} />

                    <ProjectItem title="Interactive Color Picker" span1="website" span2="popular" description="Beautiful color picker. A single tile represents a random color. Fun and elegant" url="https://codepen.io/naruthk/full/LzMwWJ/" img={PhotoColorPicker} />

                    <ProjectItem title="Digital Clock New Tab" span1="website" span2="" description="Bored of your current New Tab page? Try this beautiful digital clock. I guarantee you will fall in love with it" url="https://chrome.google.com/webstore/detail/beautiful-digital-clock-w/jdnjafgehddcpoahelddbflpmoeinaed?hl=en-US&gl=US" img={PhotoDigitalClockTab} />

                    <ProjectItem title="Nivea Blogging Section" span1="website" span2="" description="Developed a Blog section for bloggers to publish their articles on the Thailand's Nivea website" url="http://www.nivea.co.th/products/campaigns/ext/th-TH/NIVEA-Oil-In-Lotion" img={PhotoNiveaBlog} />

                    <ProjectItem title="Liverpool Soccer Fixtures" span1="software" span2="" description="A Pythonic Command-Line-Interface application for Liverpool fans to retrieve the team's information" url="https://github.com/naruthk/pcli-liverpool-updates" img={PhotoSoccerPyCli} />

                    <ProjectItem title="Daily Notes App" span1="mobile" span2="" description="Focus on just typing. The perfect note-taking companion app for your everyday need" url="https://itunes.apple.com/us/app/daily-notes-distraction-free/id1299564920?ls=1&mt=8" img={PhotoDailyNotesApp} />

                    <ProjectItem title="Email Template" span1="email" span2="website" description="Built using Foundation. Designed with Adobe Photoshop. Email sent to millions of Samsung users in Thailand" url={PhotoSamsungEmailTemplate} img={PhotoSamsungEmailTemplate} />

                    <ProjectItem title="Milo Homepage" span1="website" span2="" description="Impacting design. Visually attractive front page intending to direct user's attention to what's most important -- the products." url="https://milo.co.th/" img={PhotoMiloHomepage} />

                    <ProjectItem title="DC Vote App" span1="mobile" span2="popular" description="A Survey Rating application. Built for the Android platform. Used by more than 9000+ 7-Eleven convenience stores" url="https://www.showdc.co.th/" img={PhotoDCVoteApp} />

                    <ProjectItem title="SHOW DC Homepage" span1="website" span2="" description="Attractive landing page. Unique animations. Perfect fit to advertisement Thailand's newest shopping mall" url="https://www.showdc.co.th/" img={PhotoSHOWDCMallHomepage} />
                </div>
            </div>
        )
    }
}

Projects.propTypes = {
  title: PropTypes.string.isRequired
}

export default Projects;