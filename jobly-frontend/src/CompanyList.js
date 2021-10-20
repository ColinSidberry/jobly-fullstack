import React from "react";
import CompanyCard from './CompanyCard';

/**Renders list of companies. 
 * 
 * Props: companyList
 * State: none
 * 
 * CompaniesContainer -> CompanyList -> CompanyCard
 * 
 */
function CompanyList({ companyList }) {
    return (
        <div>
            {
                companyList.map(
                    company => <CompanyCard company={company} key={company.handle} />)
            }
        </div>

    )
}

export default CompanyList;