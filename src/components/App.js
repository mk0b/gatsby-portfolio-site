import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import NotFoundPage from '../pages/404';

//Implement later if I get more pages

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route component={NotFoundPage} />
        </Switch>
    </HashRouter>
);

export default App;

