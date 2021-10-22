import React, { useState, useContext } from "react";
import "./Form.css";
import FormField from "./FormField";
import Error from "./Error";
import { Redirect } from 'react-router-dom';


/**Handles user login 
 * 
 * Props: updateUserInfo - fn,  errors - [err1, ...]
 * State: formData
 * Routes -> LoginForm
 */
function LoginForm({ loginUser, errors, isAuthed }) {
    console.log('IN LOGIN FORM');
    const initialData = { username: "", password: "" }
    const [formData, setFormData] = useState(initialData);
    // const [redirectCompanies, setRedirectCompanies] = useState(false)

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        await loginUser(formData);
        console.log('About to redirect');
        // if (loginSuccess) setRedirectCompanies(true);
    }

    if (isAuthed) return <Redirect to="/companies" />;

    return (
        <form className="LoginForm" onSubmit={handleSubmit}>
            <FormField
                inputName={"username"}
                inputValue={formData.username}
                labelName={"Username"}
                handleChange={handleChange}
            />
            <FormField
                inputName={"password"}
                inputValue={formData.password}
                labelName={"Password"}
                handleChange={handleChange}
                type="password"
            />
            {/* {(errors) ? <Error errors={errors} /> : null} */}
            <button className="btn btn-primary">Login</button>
        </form>
    );
}

export default LoginForm;