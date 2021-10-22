import { Redirect } from "react-router-dom";

/** Renders Routes and Nav Components. 
*
* Props:
* - loggedOutUser - fn
*
* State:
* - None
*
* Routes -> Logout
*/
function Logout({ logoutUser }) {
    logoutUser();

    return <Redirect to="/" />;
}

export default Logout;