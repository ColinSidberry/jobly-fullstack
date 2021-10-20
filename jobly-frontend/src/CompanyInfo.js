import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JobList from "./JobList";
import JoblyApi from './api';
import "./CompanyInfo.css";

/**Renders company information. 
 * Calls API for company information.
 * 
 * Props: none
 * State: company
 * Routes -> CompanyInfo -> JobList
 * 
 * Location: /companies/:handle
 */
function CompanyInfo() {
    const [company, setCompany] = useState(null);
    const [error, setError] = useState(null);

    const { handle } = useParams();

    useEffect(function getCompanyInfoOnMount() {
        async function getCompanyInfo() {
            try {
                console.log('fetch company is running - handle: ', handle)
                const companyResult = await JoblyApi.getCompany(handle);
                setCompany(companyResult);
            } catch (err) {
                setError(err.message);
            }
        }
        getCompanyInfo();
    }, []);

    if (!company) return <i>Loading...</i>
    else if (error) return <b>Error fetching companies data: {error}</b>
    else return (
        <div>
            <div className="company-header">
                <h2>{company.name}</h2>
                <p className="description">{company.description}</p>
            </div>
            <JobList jobsList={company.jobs} />
        </div>
    );
}

export default CompanyInfo;