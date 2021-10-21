import React, { useState, useContext } from "react";
import "./Form.css";
import FormField from "./FormField";
import Error from "./Error";


/**Handles user login 
 * 
 * Props: updateUserInfo - fn,  errors - [err1, ...]
 * State: formData
 * Routes -> LoginForm
 */
function LoginForm({ loginUser, errors }) {
    const initialData = { username: "", password: "" }
    const [formData, setFormData] = useState(initialData);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        loginUser(formData);
    }

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
            {errors.length === 0 ? null : <Error errors={errors} />}
            <button className="btn btn-primary">Login</button>
        </form>
    );
}

export default LoginForm;