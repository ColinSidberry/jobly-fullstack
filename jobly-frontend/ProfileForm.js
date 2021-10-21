import React, { useState, useContext } from "react";
import "./ProfileForm.css";
import UserContext from "./UserContext";

/**Handles Profile Form 
 * 
 * Props: handleSubmit,  fn
 * State: searchTerm = "searchTerm"
 * (CompaniesContainer, JobsContainer) -> SearchForm
 */
function ProfileForm({ updateUserInfo, errors }) {

    const { username, firstName, lastName, email } = useContext(UserContext);
    const initialData = { username, firstName, lastName, email };

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
            <input 
                id="searchTerm"
                name="searchTerm"
                placeholder="Enter Search Term..."
                value={searchTerm}
                onChange={handleChange}
                disabled="disabled"
            />
            <button className="btn btn-primary">Search</button>
        </form>
    );
}

export default ProfileForm;