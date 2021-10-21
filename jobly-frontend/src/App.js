import React, { useState } from "react";
import LoggedInNav from "./LoggedInNav";
import LoggedOutNav from "./LoggedOutNav";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';


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

  async function loginUser(formData) {
    
  }

  async function signupUser(formData) {
    
  }

  async function logoutUser() {
    setCurrUser(null);
    setToken(null); //???? 
  }

  //udapteUserInfo Function 
  //validates data, if errors->set errors , and errors are passed down
  // App: errors = {profileErros: error}
  //decide user context, currUser is state
  return (
    <div>
      <BrowserRouter>
        {currUser
          ? <LoggedInNav />
          : <LoggedOutNav />}
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
