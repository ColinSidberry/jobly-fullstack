import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

import FormField from "../common/FormField";
import Error from "../common/Error";

import "./SignupForm.css";

/**Handles user signup 
 * 
 * Props: signupUser - fn, isAuthed - boolean
 * State: formData, errors - [err1, ...]
 * 
 * Routes -> SignupForm
 */
function SignupForm({ signupUser, isAuthed }) {
    const initialData = { username: "", password: "", firstName: "", lastName: "", email: "" }
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState(null);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const signupStatus = await signupUser(formData);
        if (signupStatus === true) {
            setErrors(null);
        } else {
            setErrors(signupStatus);
        };
    }

    if (isAuthed) return <Redirect to="/companies" />;

    return (
        <div className="LoginForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3 mt-5">Sign Up</h3>

                <div className="card">
                    <div className="card-body">
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
                            {(errors) ? <Error errors={errors} /> : null}
                            <button className="mt-3 btn btn-primary">Sign Up!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
