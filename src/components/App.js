import React, { Component } from 'react';
// import logo from './logo.svg';

import Header from './Header';
import About from './About';
import JobPosting from './JobPosting';
import MoreInformation from './MoreInformation';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <JobPosting />
        <MoreInformation />
        <Projects title="Work" />
      </div>
    );
  }
}

export default App;
