import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// Stylesheets
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './css/main.css';

// Components
import Login from './components/core/Login';
import AddCard from './components/AddCard';
import NotFound from './components/core/NotFound';
import Account from './components/core/Account';

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Login} />
        <Route exact path="/add" component={AddCard} />
        <Route exact path='/account' component={Account} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
};

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
