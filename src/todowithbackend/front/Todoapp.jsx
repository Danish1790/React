import React from 'react'
import Navbar from './Navbar'
import WorkList from './WorkList'
import Addwork from './Addwork'
import { NavLink, BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';

const Todoapp = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={WorkList} />
                    <Route exact path='/Addwork' component={Addwork} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>

        </>
    )
}

export default Todoapp
