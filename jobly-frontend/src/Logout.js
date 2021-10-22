import { useContext } from "react";
import { Redirect} from "react-router-dom";
import UserContext from "./UserContext";

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
    const currUser = useContext(UserContext);
    if(!currUser) return <Redirect to="/"/>
    logoutUser();

    return <Redirect to="/" />;
}

export default Logout;