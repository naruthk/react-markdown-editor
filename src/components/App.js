import React, { Component } from 'react';

import Header from './Header';
import About from './About';
import JobPosting from './JobPosting';
import MoreInformation from './MoreInformation';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
 
  render() {
        return (
        <div className="App">
            <Header />
            <About />
            <JobPosting />
            <MoreInformation />
            <Projects title="Work" />
            <Contact title="Contact" email="contact@naruthk.com" statement="I'd love to hear from you. Let's have a conversation together." />
            <Footer />
        </div>
        );
    }
}

export default App;
