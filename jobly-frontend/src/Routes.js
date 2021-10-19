import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Jobs from "./Jobs";
import CompanyInfo from "./CompanyInfo";

/** Renders Routes for Companies, CompanyInfo, Jobs, Home
*
* Props:
* - None
*
* State:
* - None
*
* App -> Routes -> (Home, Companies, Company, Jobs)
*/
function Routes() {
    return (
        <Switch>
            <Route exact path="/companies"><Companies /></Route>
            <Route exact path="/companies/:handle"><CompanyInfo /></Route>
            <Route exact path="/jobs"><Jobs /></Route>
            <Route exact path="/"><Home /></Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;