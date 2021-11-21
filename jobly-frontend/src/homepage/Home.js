import React, { useContext } from "react";

import UserContext from "../auth/UserContext";

import "./Home.css"

/**Renders homepage
 * Props, State: none
 * Context: Consumes user context
 * Routes -> Home
 * Location: /
 */
function Home() {
    const currUser = useContext(UserContext);
    return (
        <div className="Home">
            {currUser
                ? <h1>Welcome {currUser.firstName}!!!!!</h1>
                : <div>
                    <h1>Jobly</h1>
                    <p>The world's best jobs listing!</p>
                </div>
            }
        </div>
    );
}

export default Home;