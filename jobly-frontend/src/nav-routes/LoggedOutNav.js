import { NavLink } from "react-router-dom";
import React from "react";

import "./Nav.css";

/** Makes NavLinks for Navbar when user is not logged in
*
* Props:
* - None
*
* State:
* - None
*
* App -> LoggedOutNav
*/
function LoggedOutNav() {
    return (
        <nav className="Nav navbar navbar-expand-md">
            <div className="container-fluid">
                <NavLink className="navbar-brand" exact to="/">
                    Jobly
                </NavLink>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" exact to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" exact to="/signup">
                            Sign Up
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default LoggedOutNav;