import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CompaniesContainer from "../companies/CompaniesContainer";
import CompanyInfo from "../companies/CompanyInfo";
import JobsContainer from "../jobs/JobsContainer";
import ProfileForm from "../profile/ProfileForm";
import SignupForm from "../auth/SignupForm";
import LoginForm from "../auth/LoginForm";
import Logout from "../auth/Logout";
import Home from "../homepage/Home";

/** Renders Routes
*
* Props: isAuthed - boolean 
*        loginUser, signupUser, logoutUser, updateUserInfo functions
*
* State:None
*
* App -> Routes -> 
* (Home, CompaniesContainer, Company, JobsContainer, LoginForm, SignupForm, ProfileForm)
*/
function Routes({ loginUser, signupUser, logoutUser, updateUserInfo, isAuthed }) {
    return (
        <Switch>
            <Route exact path="/login" >
                <LoginForm loginUser={loginUser} isAuthed={isAuthed}/>
            </Route>
            <Route exact path="/signup">
                <SignupForm signupUser={signupUser} isAuthed={isAuthed}/>
            </Route>
            <Route exact path="/profile">
                <ProfileForm updateUserInfo={updateUserInfo} />
            </Route>
            <Route exact path="/companies">
                <CompaniesContainer />
            </Route>
            <Route exact path="/companies/:handle">
                <CompanyInfo />
            </Route>
            <Route exact path="/jobs">
                <JobsContainer />
            </Route>
            <Route exact path="/logout">
                <Logout logoutUser={logoutUser} />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;