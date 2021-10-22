import React, { useContext } from "react";
import "./Home.css"
import UserContext from "./UserContext";

/**Renders homepage
 * Props, State: none
 * Routes -> Home
 * Location: /
 */
function Home() {
    const user = useContext(UserContext);
    return (
        <div className="Home">
            {user
                ? <h1>Welcome {user.firstName}!!!!!</h1>
                : <div>
                    <h1>Jobly</h1>
                    <p>Jobs jobs jobs, come get your jobs~</p>
                </div>
            }
        </div>
    );
}

export default Home;