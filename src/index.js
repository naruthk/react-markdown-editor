import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './css/main.css';

import Login from './components/core/Login';
import NotFound from './components/core/NotFound';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
};

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
