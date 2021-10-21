import React, { useState, useContext } from "react";
import "./ProfileForm.css";
import UserContext from "./UserContext";
import FormField from "./FormField";

/**Handles Profile Form 
 * 
 * Props: handleSubmit,  fn
 * State: searchTerm = "searchTerm"
 * (CompaniesContainer, JobsContainer) -> SearchForm
 */
function ProfileForm({ updateUserInfo, errors }) {

    const { username, firstName, lastName, email } = useContext(UserContext);
    const initialData = [
        { field: 'username', label: 'Username', value: username},
        { field: 'firstName', label: 'First Name', value: firstName},
        { field: 'lastName', label: 'Last Name', value: lastName},
        { field: 'email', label: 'Email', value: email},
        { field: 'password', label: 'Enter password to make changes', value: ""},
    ];

    const [formData, setFormData] = useState(initialData);

    
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    } //keep state as JUST the formData. Make a constant for fieldInfo = {username: 'Username'}.
    //label is always constant!

    function handleSubmit(evt) {
        evt.preventDefault();
        updateUserInfo(formData);
    }

//map over array of [{field, label, value}...] as props in FormInputGroup
//button for handleSubmit
    return (
        <form className="ProfileForm" onSubmit={handleSubmit}>
            {formData.map(field => <FormInputGroup input={field} handleChange={handleChange} />)}
            <button className="btn btn-primary">Search</button>
        </form>
    );
}

export default ProfileForm;


//Make const of label:fieldName maybe we can merge type & disabled here. 
//Then we can keep handleChange working
//Type & disabled, input as a prop "disabled="disabled"" 