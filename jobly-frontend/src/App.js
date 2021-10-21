import React, { useState, useEffect } from "react";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';
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
  // const initialErrors = {
  //   profileForm: null, 
  //   loginIn: null, 
  //   signupUser: null, 
  //   userData:null
  // }
  //Question: Do we have to specify errors like above?

  const [errors, setErrors] = useState(null)
  //TODO: How do we pass errors down to each of the forms

  //effect: set currUser when token changes
  useEffect(function fetchUserDataOnTokenChange() {
    async function fetchUserData() {
      try {
        const userData = await JoblyApi.getUser(token);
        setCurrUser(userData);
      } catch (err) {
        setErrors(err);

      }
    }
    fetchUserData();
  }, [token]);

  async function loginUser(formData) {
    try {
      const token = await JoblyApi.login(formData);
      setToken(token);
    } catch (err) {
      setErrors(err);
    }
  }

  async function signupUser(formData) {
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
    } catch (err) {
      setErrors(err);
    }
  }

  //udapteUserInfo Function 
  //validates data, if errors->set errors , and errors are passed down
  //decide user context, currUser is state
  function updateUserInfo()

  return (
    <div>
      <UserContext.Provider value={currUser}>
        <BrowserRouter>
          {currUser
            ? <LoggedInNav 
                updateUserInfo={updateUserInfo} 
                logoutUser={logoutUser}
                errors={errors}/> 
            : <LoggedOutNav
                signupUser={signupUser}
                loginUser={loginUser} 
                errors={errors}/>}
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
