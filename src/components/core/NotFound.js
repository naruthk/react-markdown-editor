import React from 'react';
import Header from './Header';
import Footer from './Footer';

class NotFound extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container text-center">              
                  <div className="margin-t-60"></div>
                    <h2><b>Error</b> retreiving content</h2>
                    <p>Cannot find resource.</p>
                    <div className="margin-t-20"></div>
                </div>
                <Footer copyrightMessage="2017 Naruth Kongurai" bottomMessage="" />
            </div>
        );
    }
}

export default NotFound