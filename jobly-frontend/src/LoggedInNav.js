import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/** Makes NavLinks for Navbar when user is logged in
*
* Props:
* - None
*
* State:
* - None
*
* App -> LoggedInNav
*/
function LoggedInNav() {
    return (
        <nav className="Nav">
            <NavLink exact to="/">
                Jobly
            </NavLink>
            <NavLink exact to="/companies">
                Companies
            </NavLink>
            <NavLink exact to="/jobs">
                Jobs
            </NavLink>
            <NavLink exact to="/profile">
                Edit Profile
            </NavLink>
        </nav>
    );
}

//FIXME ADD LOGOUT Functionality

export default LoggedInNav;