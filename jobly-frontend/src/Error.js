import React from "react";

/** Renders error view component
 *  Props: [error1, error2, ...]
 *  State: none
 *  
 *  (CompaniesContainer, JobsContainer, CompanyInfo) -> Error
 */
function Error({ errors }) {
    console.log('errors in error component', errors);
    return (
        <div>
            <b>Error fetching data:</b>
            <ul>
                {errors.map(error => (<li>{error}</li>))}
            </ul>
        </div>
    )
}

export default Error;