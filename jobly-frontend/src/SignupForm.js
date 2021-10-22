import React, { useState, useContext } from "react";
import "./Form.css";
import FormField from "./FormField";
import Error from "./Error";
import { Redirect } from 'react-router-dom';

/**Handles user signup 
 * 
 * Props: signupUser - fn,  errors - [err1, ...]
 * State: formData
 * Routes -> SignupForm
 */
function SignupForm({ signupUser, errors }) {
    const initialData = { username: "", password: "", firstName: "", lastName: "", email: "" }
    const [formData, setFormData] = useState(initialData);
    const [redirectCompanies, setRedirectCompanies] = useState(false)

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const signupSuccess = await signupUser(formData);
        if (signupSuccess) setRedirectCompanies(true);
    }

    if (redirectCompanies) return <Redirect to="/companies" />;

    return (
        <form className="SignupForm" onSubmit={handleSubmit}>
            <FormField
                inputName={"username"}
                inputValue={formData.username}
                labelName={"Username"}
                handleChange={handleChange}
            />
            <FormField
                inputName={"firstName"}
                inputValue={formData.firstName}
                labelName={"First Name"}
                handleChange={handleChange} />
            <FormField
                inputName={"lastName"}
                inputValue={formData.lastName}
                labelName={"Last Name"}
                handleChange={handleChange} />
            <FormField
                inputName={"email"}
                inputValue={formData.email}
                labelName={"Email"}
                handleChange={handleChange} />
            <FormField
                inputName={"password"}
                inputValue={formData.password}
                labelName={"Password"}
                handleChange={handleChange}
                type="password" />
            {(errors) ? <Error errors={errors} /> : null}            <button className="btn btn-primary">Sign Up!</button>
        </form>
    );
}

export default SignupForm;
