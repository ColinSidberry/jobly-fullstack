import React, { useEffect, useState } from "react";
import CompanyList from './CompanyList';
import SearchForm from './SearchForm';
import JoblyApi from "./api";
import "./CompaniesContainer.css"

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
    const [searchTerm, setSearchTerm] = useState('');

    //set companyList after initial and searchTerm triggered renders
    useEffect(function fetchCompaniesWhenMounted() {
        async function fetchCompanies() {
            try {
                const companiesResult = await JoblyApi.getCompanies(searchTerm);
                setCompanyList(companiesResult);
            } catch (err) {
                setError(err[0]);

            }
        }
        fetchCompanies();
    }, [searchTerm]);

    //handles job query search
    function handleSearch(search) {
        setSearchTerm(search);
    }

    if (error) return <b>Error fetching companies data: {error}</b>
    else if (!companyList) return <i>Loading...</i>
    else return (
        <div className="CompaniesContainer">
            <SearchForm handleSearch={handleSearch} />
            <CompanyList companyList={companyList} />
        </div>
    );
}

export default CompaniesContainer;