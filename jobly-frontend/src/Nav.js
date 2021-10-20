import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/** Makes NavLinks for Navbar
*
* Props:
* - None
*
* State:
* - None
*
* App -> Nav
*/
function Nav() {
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
        </nav>
    );
}

export default Nav;