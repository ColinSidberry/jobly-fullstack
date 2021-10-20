import React, { useEffect, useState } from "react";
import CompanyList from './CompanyList';
import SearchForm from './SearchForm';

/**Renders list of companies. 
 * Calls API for list of companies.
 * 
 * Props: none
 * State: companyList, searchTerm
 * Routes -> CompaniesContainer -> (CompanyList, SearchForm)
 * 
 * Location: /companies
 */
function CompaniesContainer() {
    const [companyList, setCompanyList] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);


    // useEffect(
    //     setCompanyList(newList)
    // )

    function handleSearch(search){
        setSearchTerm(search);
    }

    return (
        <div>
            <SearchForm search={handleSearch}/>
            <CompanyList companyList={companyList} />
        </div>
    );
}

export default CompaniesContainer;