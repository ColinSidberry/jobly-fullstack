import React, { useState, useContext } from "react";

import UserContext from "../auth/UserContext";
import FormField from "../common/FormField";
import Error from "../common/Error";

import "../auth/Form.css";

/**Handles Profile Form 
 * 
 * Props: updateUserInfo - fn
 * State: formData, userInfoChanges - boolean,  errors - [err1, ...]
 * 
 * Routes -> ProfileForm
 */
function ProfileForm({ updateUserInfo }) {
    const { username, firstName, lastName, email } = useContext(UserContext);
    const initialData = { username, firstName, lastName, email };

    const [formData, setFormData] = useState(initialData);
    const [userInfoChanges, setUserInfoChanges] = useState(false);
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
        const updateStatus = await updateUserInfo(formData);
        if (updateStatus === true) {
            console.log("updateStatus is a: ...", updateStatus);
            setErrors(null);
            setUserInfoChanges(true);
        } else {
            console.log("errors is a: ...", updateStatus);
            setUserInfoChanges(false);
            setErrors(updateStatus);
        };
    }

    //Question: React says: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
    return (
        <form className="ProfileForm" onSubmit={handleSubmit}>
            <FormField
                inputName={"username"}
                inputValue={formData.username}
                labelName={"Username"}
                handleChange={handleChange}
                disabled={true} />
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
            {userInfoChanges && <h6>Changes Saved</h6>}
            <button className="btn btn-primary">Save Changes</button>
        </form>
    );
}

export default ProfileForm;