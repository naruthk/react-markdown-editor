import React from 'react';

import PromotionBoxMain from './PromotionBoxMain';
import PromotionBoxMinor from './PromotionBoxMinor';

class MoreInformation extends React.Component {
    render() {
        return (
            <div id="more-info">
                <div className="container">
                    <div className="row">
                        <PromotionBoxMain title="Proud To Boast" content="I am a senior attending the University of Washington and pursuing a Bachelor's Degree in Communication while minoring in Informatics!" />
                        <div className="col-sm-6 col-md-6 col-md-6">
                            <div className="row">
                                <PromotionBoxMinor title="9000+ and Growing" content="That's how many 7-Eleven convenience stores in Thailand are using a mobile rating application (Android) I developed for them in over a period of 2 months" />
                                <PromotionBoxMinor title="Programming Abilities" content="I've taken numerous courses, such as iOS Development, Web Programming, Data Structures and Algorithms, Foundation of Informatics, and Java Programming." />
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <p className="focus">App on the App Store!</p>
                                    <p className="content">I recently published a <a href="http://www.naruthk.com/app/notes/" target="_blank">note-taking</a> mobile application on the App Store. It is available for free for everyone who has an iPhone or iPad.</p>
                                </div>
                                <PromotionBoxMinor title="Loves Open-Source" content="I'm a big fan of helping out the community, evidently through my contribution to Free Coding Camp community." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoreInformation;