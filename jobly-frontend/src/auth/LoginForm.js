import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

import FormField from "../common/FormField";
import Error from "../common/Error";

import "./LoginForm.css";

/**Handles user login 
 * 
 * Props: loginUser fn, isAuthed = Boolean
 * State: formData, [error1, ...]
 * 
 * Routes -> LoginForm
 */
function LoginForm({ loginUser, isAuthed }) {

    const initialData = { username: "", password: "" }
    const [formData, setFormData] = useState(initialData);

    const [errors, setErrors] = useState(null);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    //could move the try catch here
    async function handleSubmit(evt) {
        evt.preventDefault();
        const loginStatus = await loginUser(formData);
        if (loginStatus === true) {
            setErrors(null);
        } else {
            setErrors(loginStatus);
        };
    }

    // console.log('isAuth in LoginForm', isAuthed);
    if (isAuthed) return <Redirect to="/companies" />;

    return (
        <div className="LoginForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3 mt-5 text-center">Log In</h3>

                <div className="card">
                    <div className="card-body">
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
                            {(errors) ? <Error errors={errors} /> : null}
                            <button className="mt-3 btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;