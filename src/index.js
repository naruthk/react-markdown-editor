import React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';

import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './css/main.css';
import 'font-awesome/css/font-awesome.css';

import './behavior';

import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
