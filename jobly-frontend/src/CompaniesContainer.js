import React, { useEffect, useState } from "react";
import CompanyList from './CompanyList';
import SearchForm from './SearchForm';
import JoblyApi from "./api";
import Error from "./Error";
import "./CompaniesContainer.css"

/**Renders list of companies. 
 * Calls API for list of companies.
 * 
 * Props: none
 * State: companyList - [{ handle, name, description, numEmployees, logoUrl }, ...]
 *        searchTerm - "searchTerm for company name"
 *        errors - [error1, error2...]
 * Routes -> CompaniesContainer -> (CompanyList, SearchForm)
 * 
 * Location: /companies
 */
function CompaniesContainer() {
    const [companyList, setCompanyList] = useState(null);
    const [errors, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    //set companyList after initial and searchTerm triggered renders
    useEffect(function fetchCompaniesWhenMounted() {
        async function fetchCompanies() {
            try {
                const companiesResult = await JoblyApi.getCompanies(searchTerm);
                setCompanyList(companiesResult);
            } catch (err) {
                setError(err);

            }
        }
        fetchCompanies();
    }, [searchTerm]);

    //handles company query search 
    function handleSearch(search) {
        setSearchTerm(search);
    }

    if (errors) return <Error errors={errors}/>
    if (!companyList) return <i>Loading...</i>

    return (
        <div className="CompaniesContainer">
            <SearchForm handleSearch={handleSearch} />
            {companyList.length === 0
                ? <h3>No companies found </h3>
                : <CompanyList companyList={companyList} />
            }
        </div>
    );
}
//FIXME: errors
export default CompaniesContainer;