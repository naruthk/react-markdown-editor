import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './css/main.css';
import 'font-awesome/css/font-awesome.css';

import './behavior';

import Admin from './components/Admin';
import NotFound from './components/NotFound';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
};

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
