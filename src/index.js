import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';
import { create } from 'domain';

ReactDOM.render(
<BrowserRouter history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/jokes' component={Jokes} />
        </Switch>
</BrowserRouter>,
 document.getElementById('root'));



