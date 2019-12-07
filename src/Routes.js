import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import User from './containers/User';

const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/' component={ Home } />
            <Route path='/User/' component= { User } />
        </Switch>
    );
};

export default Routes;