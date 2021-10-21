import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import CompaniesContainer from "./CompaniesContainer";
import JobsContainer from "./JobsContainer";
import CompanyInfo from "./CompanyInfo";
import ProfileForm from "./ProfileForm";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

/** Renders Routes for CompaniesContainer, CompanyInfo, JobsContainer, Home
*
* Props:
* - None
*
* State:
* - None
*
* App -> Routes -> 
* (Home, CompaniesContainer, Company, JobsContainer, LoginForm, SignupForm, ProfileForm)
*/
function Routes() {
    return (
        <Switch>
            <Route exact path="/login"><LoginForm /></Route>
            <Route exact path="/signup"><SignupForm /></Route>
            <Route exact path="/profile"><ProfileForm /></Route>
            <Route exact path="/companies"><CompaniesContainer /></Route>
            <Route exact path="/companies/:handle"><CompanyInfo /></Route>
            <Route exact path="/jobs"><JobsContainer /></Route>
            <Route exact path="/"><Home /></Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;