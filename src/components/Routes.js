import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

import '../styles/Nav.css';
import Technology from '../pages/Technology';
import Digest from '../pages/Digest';
import About from '../pages/About';

const Routes = () => {
    return (
        <Switch className="Routes">
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/technology">
                <Technology/>
            </Route>
            <Route exact path="/digest">
                <Digest/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
        </Switch>
    );
}

export default Routes;