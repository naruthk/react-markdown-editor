import React from 'react';

import MenuWithIcon from './MenuWithIcon';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="margin-t-20">
                    <div className="row text-center">
                        <div className="social-links">
                            <div className="col-xs-12 col-md-12 col-lg-12">
                                <MenuWithIcon url="mailto:contact@naruthk.com" showTitle={false} title="Email" iconName="envelope-o" />
                                <MenuWithIcon url="http://www.github.com/naruthk" showTitle={false} title="GitHub" iconName="github" />
                                <MenuWithIcon url="http://www.linkedin.com/in/naruthkongurai" showTitle={false} title="LinkedIn" iconName="linkedin" />
                                <MenuWithIcon url="https://twitter.com/naruthkongurai" showTitle={false} title="Twitter" iconName="twitter" />
                                <MenuWithIcon url="http://codepen.io/naruthk/" showTitle={false} title="CodePen" iconName="codepen" />
                                <MenuWithIcon url="https://medium.com/naruth-kongurai" showTitle={false} title="Blog" iconName="medium" />
                            </div>
                            <div className="margin-t-20"></div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12"> 
                            <p>&copy; Naruth Kongurai</p>
                            <p><small>Built using React. Icons provided by Flat Icon by Smashing Magazine, Freepik, and Vectors Market</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;