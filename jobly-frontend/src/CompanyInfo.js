import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JobList from "./JobList";
import JoblyApi from './api';
import Error from "./Error";
import "./CompanyInfo.css";

/**Renders company information. 
 * Calls API for company information.
 * 
 * Props: none
 * State: company = { handle, name, description, numEmployees, logoUrl }
 *        errors = [error1, ...]
 * Routes -> CompanyInfo -> JobList
 * 
 * Location: /companies/:handle
 */
function CompanyInfo() {
    const [company, setCompany] = useState(null);
    const [errors, setErrors] = useState(null);

    const { handle } = useParams();

    //set company after initial and searchTerm triggered renders
    useEffect(function getCompanyInfoOnMount() {
        async function getCompanyInfo() {
            try {
                console.log('fetch company is running - handle: ', handle)
                const companyResult = await JoblyApi.getCompany(handle);
                setCompany(companyResult);
            } catch (err) {
                setErrors(err);
            }
        }
        getCompanyInfo();
    }, []);

    if (errors) return <Error errors={errors} />
    else if (!company) return <i>Loading...</i>
    else return (
        <div>
            <div className="company-header">
                <h2>{company.name}</h2>
                <p className="description">{company.description}</p>
            </div>
            {company.jobs.length === 0
                ? <h3>No jobs for {company}</h3>
                : <JobList jobList={company.jobs} />
            }
        </div>
    );
}

export default CompanyInfo;