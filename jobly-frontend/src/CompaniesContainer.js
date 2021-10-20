import React, { useEffect, useState } from "react";
import CompanyList from './CompanyList';
import SearchForm from './SearchForm';
import JoblyApi from "./api";

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
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);


    useEffect(function fetchCompaniesWhenMounted() {
        async function fetchCompanies() {
            try {
                const companiesResult = await JoblyApi.getCompanies(searchTerm);
                setCompanyList(companiesResult.data);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchCompanies();
    }, [searchTerm]);
    function handleSearch(search) {
        setSearchTerm(search);
    }

    if (!companyList) return <i>Loading...</i>
    else if (error) return <b>Error fetching companies data: {error}</b>
    else return (
        <div>
            <SearchForm search={handleSearch} />
            <CompanyList companyList={companyList} />
        </div>
    );
}

export default CompaniesContainer;