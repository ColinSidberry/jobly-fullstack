import React, { useState, useEffect } from "react";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import Routes from "./Routes";
import { BrowserRouter, Redirect } from 'react-router-dom';
import JoblyApi from "./api";
import UserContext from "./UserContext";


/** Renders Routes and Nav Components. 
*
* Props:
* - None
*
* State:
* - None
*
* App -> (Nav, Routes)
*/
function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState(null);
  const [errors, setErrors] = useState(null);//TODO: Consider if he errors stat should live here.
  // const initialErrors = {
  //   profileForm: null, 
  //   loginIn: null, 
  //   signupUser: null, 
  //   userData:null
  // }
  //Question: Do we have to specify errors like above?


  //effect: set currUser when token changes
  useEffect(function fetchUserDataOnTokenChange() {
    async function fetchUserData() {
      try {
        console.log('fetch user data in App is running')
        const userData = await JoblyApi.getUser(token);
        setCurrUser(userData);
      } catch (err) {
        setErrors(err);

      }
    }
    if (token) fetchUserData();
  }, [token]);

  async function loginUser(formData) {
    console.log('login user in App is running');
      try {
      const token = await JoblyApi.login(formData);
      setToken(token);
    } catch (err) {
      setErrors(err);
    }
  }

  async function signupUser(formData) {
    console.log('signup user in App is running');
    try {
      const token = await JoblyApi.register(formData);
      setToken(token);

    } catch (err) {
      setErrors(err);
    }
  }

  function logoutUser() {
    try {
      const token = JoblyApi.logout();
      setToken(token);
      setCurrUser(null); //Question: is this the best way to change currUser on logout? Given the setting is in two places.
    } catch (err) {
      setErrors(err);
    }
  }

  //udapteUserInfo Function 
  //validates data, if errors->set errors , and errors are passed down
  //decide user context, currUser is state
  async function updateUserInfo(formData) {
    try {
      console.log("formData from App.js: ", formData);
      const userData = await JoblyApi.updateUser(formData);
      setCurrUser(userData);
      //TODO: Maybe return value to trigger the successfully updated profile info message in PRofileForm.js
      //FIXME: SHOW USER UPDATE SUCCESS MSG.
    } catch (err) {
      setErrors(err);
      // return err; //TODO: Does this design work to better handle errors
    }
  }

  // if (redirectHome) return <Redirect to="/Home" />;
console.log("currUser:", currUser);
  return (
    <div>
      <UserContext.Provider value={currUser}>
        <BrowserRouter>
          {currUser
            ? <LoggedInNav username={currUser.username} />
            : <LoggedOutNav />}
          <Routes
            loginUser={loginUser}
            signupUser={signupUser}
            logoutUser={logoutUser}
            updateUserInfo={updateUserInfo}
            errors={errors}
          />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
