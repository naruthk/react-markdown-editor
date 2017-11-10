import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

// var FontAwesome = require('react-fontawesome');
import FontAwesome from 'react-fontawesome';

const Header = () => {
    return (
        <header>
        <div className="container">
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <Logo url="http://www.naruthk.com" title="NK" />
                </div>
                <div className="col-sm-10 col-md-10 col-lg-10">
                    <div className="social-links">
                        <div className="col-xs-12 col-md-12 col-lg-12">
                            <Menu   url="https://medium.com/naruth-kongurai/my-name-is-naruth-kongurai-5076325a7e0f" title="About" />
                            <Menu url="https://medium.com/naruth-kongurai" title="Blog" />
                            <Menu url="mailto:contact@naruthk.com" title="Contact" />

                            { /* Resume Link */ }
                            <a href="http://www.naruthk.com/media/Kongurai_Naruth_grad2018.pdf" title="Resume" target="_blank">
                                <FontAwesome name='file-text' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header;