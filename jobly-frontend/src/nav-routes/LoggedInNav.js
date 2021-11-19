import { NavLink } from "react-router-dom";
import React from "react";

import "./Nav.css";

/** Makes NavLinks for Navbar when user is logged in
*
* Props: username - "testuser"
* State: None
*
* App -> LoggedInNav
*/
function LoggedInNav({ username }) {
    return (
        <nav className="Nav navbar navbar-expand-md">
            <div className="container-fluid">
                <NavLink className="navbar-brand" exact to="/">
                    Jobly
                </NavLink>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" exact to="/companies">
                            Companies
                        </NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" exact to="/jobs">
                            Jobs
                        </NavLink>
                    </li>
                    <li className="nav-item me-4">
                        <NavLink className="nav-link" exact to="/profile">
                            Profile
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/logout">
                            Log out {username}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default LoggedInNav;