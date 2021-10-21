import React, { useState, useContext } from "react";
import "./ProfileForm.css";
import UserContext from "./UserContext";
import FormField from "./FormField";
import Error from "./Error";

/**Handles Profile Form 
 * 
 * Props: updateUserInfo - fn,  errors - [err1, ...]
 * State: None
 * Routes -> ProfileForm
 */
function ProfileForm({ updateUserInfo, errors }) {
    const { username, firstName, lastName, email } = useContext(UserContext);

    const initialData = { username, firstName, lastName, email }

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
        updateUserInfo(formData);
    }

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
            {errors.length === 0 ? null : <Error errors={errors}/>}
            <button className="btn btn-primary">Save Changes</button>
        </form>
    );
}

export default ProfileForm;


//Make const of label:fieldName maybe we can merge type & disabled here. 
//Then we can keep handleChange working
//Type & disabled, input as a prop "disabled="disabled"" 