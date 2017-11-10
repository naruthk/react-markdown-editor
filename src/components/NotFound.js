import React from 'react';

import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';

class NotFound extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div id="about">              
                    <div class="margin-t-60"></div>
                    <div class="image-power"></div>
                    <h2><b>Wow</b>, this is embarrassing.</h2>
                    <div class="info">
                        <p>I've tried, but I just cannot find what you're searching for. My suggestion is to ask you to head back to my <a href="http://www.naruthk.com/" title="Go home">homepage</a>. Good luck with your search!</p>
                    </div>
                    <Contact title="Contact" email="contact@naruthk.com" statement="I'd love to hear from you. Let's have a conversation together." />
                    <div class="margin-t-20"></div>
                </div>
                <Footer copyrightMessage="2017 Naruth Kongurai" bottomMessage="" />
            </div>
        );
    }
}

export default NotFound