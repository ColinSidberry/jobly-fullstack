import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
    username: "testuser",
    first_name: "testfirst",
    last_name: "testlast",
    email: "test@test.net",
    photo_url: null,
};

const UserProvider = (
    <UserContext.Provider value={demoUser}></UserContext.Provider>
);

export { UserProvider };
