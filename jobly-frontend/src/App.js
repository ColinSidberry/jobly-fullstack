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
  const [redirectHome, setRedirectHome] = useState(false)
  const [redirectCompanies, setRedirectCompanies] = useState(false)
  // const initialErrors = {
  //   profileForm: null, 
  //   loginIn: null, 
  //   signupUser: null, 
  //   userData:null
  // }
  //Question: Do we have to specify errors like above?

  const [errors, setErrors] = useState(null)

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
      setRedirectCompanies(true);
    } catch (err) {
      setErrors(err);
    }
  }

  async function signupUser(formData) {
    console.log('signup user in App is running');
    try {
      const token = await JoblyApi.register(formData);
      setToken(token);
      setRedirectCompanies(true);
    } catch (err) {
      setErrors(err);
    }
  }

  function logoutUser() {
    try {
      const token = JoblyApi.logout();
      setToken(token);
      setRedirectHome(true);
    } catch (err) {
      setErrors(err);
    }
  }

  //udapteUserInfo Function 
  //validates data, if errors->set errors , and errors are passed down
  //decide user context, currUser is state
  async function updateUserInfo(formData) {
    try {
      const userData = await JoblyApi.updateUser(formData);
      setCurrUser(userData);
      //FIXME: SHOW USER UPDATE SUCCESS MSG.
    } catch (err) {
      setErrors(err);
    }
  }

  if (redirectCompanies) return <Redirect to="/companies" />;
  if (redirectHome) return <Redirect to="/Home" />;

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
