import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from "./hooks/useLocalStorage";

import LoggedOutNav from "./LoggedOutNav";
import LoggedInNav from "./LoggedInNav";
import UserContext from "./UserContext";
import Routes from "./Routes";
import JoblyApi from "./api";

export const TOKEN_STORAGE_ID = "jobly-token";

/** Renders Routes and Nav Components. 
*
* Props:
* - None
*
* State:
*   - currUser: {username, firstName, lastName, email}
*   - token: string, isAuthed
*   - isAuthed: boolean
*
* App -> (Nav, Routes)
*/
function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [isAuthed, setIsAuthed] = useState(false);
  

  console.debug(
    "App",
    "currUser=", currUser,
    "token=", token,
    "isAuthed=", isAuthed,
  );

  /** Upon token change, set currUser to user obj & isAuthed to true
   * input: none
   * output: [errors,...]
   */
  useEffect(function fetchUserDataOnTokenChange() {
    console.debug("App useEffect loadUserInfo", "token=", token);
    async function fetchUserData() {
      try {
        const userData = await JoblyApi.getUser(token);
        console.log({userData});
        delete userData.jobs; //TODO: assess how to update jobList when apply button is clicked in JobCard.
        setCurrUser(userData);
        setIsAuthed(true);
      } catch (err) {
        return err;
      }
    }
    if (token) fetchUserData();
  }, [token]);

  /**Logs in user. Upon success, sets token to user's token.
   * input: {username, password}
   * output: true or [errors,...]
   */
  async function loginUser(formData) {
    console.log('login user in App is running');
    try {
      console.log('inloginUser', formData); //FIXME
      const token = await JoblyApi.login(formData);
      setToken(token);
      localStorage.setItem('token', token);
      return true;

    } catch (err) {
      return err
    }
  }

  /**Signs Up user. Upon success, sets token to user's token.
   * input: {username, password, firstName, lastName, email}
   * output: true or [errors,...]
   */
  async function signupUser(formData) {
    console.log('signup user in App is running');
    try {
      const token = await JoblyApi.register(formData);
      setToken(token);
      localStorage.setItem('token', token);
      return true;

    } catch (err) {
      return err;
    }
  }

 /**Logs out user. Upon success, sets token to null & clears localStorage.token.
   * input: none
   * output: [errors,...]
   */
  async function logoutUser() {
    try {
      const token = JoblyApi.logout();
      setToken(token);
      localStorage.removeItem('token');
      setCurrUser(null);
      setIsAuthed(false);
    } catch (err) {
      return err;
    }
  }

 /**Updates a user's info. Upon success, sets CurrUser to userData.
   * input: {username, firstName, lastName, email, password}
   * output: true or [errors,...]
   */
  async function updateUserInfo(formData) {
    try {
      const userData = await JoblyApi.updateUser(formData);
      delete userData.jobs; //don't need jobList in context/currUser
      setCurrUser(userData);
      return true;

    } catch (err) {
      return err;
    }
  }

  // console.log("above return currUser:", currUser);
  // console.log("above return localStorage.token:", localStorage);
  // console.log("above return token:", token);

  //protects route upon refresh as currUser loads during effect.
  console.log({token},{currUser});
  if (token && !currUser) return <h3>Loading... </h3>
  
  return (
    <div>
      <UserContext.Provider value={currUser}>
        <BrowserRouter>
          {token
            ? <LoggedInNav username={currUser.username} />
            : <LoggedOutNav />}
          <Routes
            loginUser={loginUser}
            signupUser={signupUser}
            logoutUser={logoutUser}
            updateUserInfo={updateUserInfo}
            isAuthed={isAuthed}
          />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;