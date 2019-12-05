import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';

const Routes = () => {
    return (
        <Switch>
            <Route exact path = '/' component={ Home } />
            <Route path='/User' component= { User } />
        </Switch>
    );
};

export default Routes;