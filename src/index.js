import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';
import { create } from 'domain';

ReactDOM.render(
<BrowserRouter>
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/jokes' component={Jokes} />
        </Switch>
    </Router>
</BrowserRouter>,
 document.getElementById('root'));



