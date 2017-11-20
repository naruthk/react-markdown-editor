import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './css/main.css';

import App from './components/core/App';
import Login from './components/core/Login';
import AddNewCard from './components/AddNewCard';
import NotFound from './components/core/NotFound';
import Account from './components/core/Account';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Login} />
        <Route exact path="/add" component={AddNewCard} />
        <Route exact path='/account' component={Account} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
};

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
