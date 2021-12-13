import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Welcome from './Welcome'
import { NavLink, BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';

const Logsign = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Signup} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Welcome' component={Welcome} />
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default Logsign
