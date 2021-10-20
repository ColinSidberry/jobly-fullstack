import React from "react";

/**Renders company card 
 * 
 * Props: {company}
 * State: none
 * 
 * CompaniesContainer -> CompanyList -> CompanyCard
 * 
 */
function Company({ company }) {
    const { name, description, logoUrl } = company;
    return (
        <div className="Card">
            <h3>
                {name}
                <img src={logoUrl} alt="company img"/>
            </h3>
            <p>{description}</p>
        </div>
    );
}

export default Company;