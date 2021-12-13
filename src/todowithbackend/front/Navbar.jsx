import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/Navbar.css'

import {NavLink} from 'react-router-dom'
import {Redirect,Route,Switch} from 'react-router'

const Navbar = () => {
    return (
        <>
        <div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div>
                        <NavLink className="navbar-brand" exact to='/WorkList'>TODO</NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item tabs">
                                <NavLink className="nav-link t-links active " aria-current="page" exact to='/WorkList'>Tasks</NavLink>
                            </li>
                            <li className="nav-item tabs">
                                <NavLink className="nav-link t-links " exact to='/Addwork'>Add</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
        
        </>
    )
}

export default Navbar
