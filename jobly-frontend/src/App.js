import React from "react";
import Nav from "./Nav";
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
//udapteUserInfo Function 
            //validates data, if errors->set errors , and errors are passed down
            // App: errors = {profileErros: error}

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
