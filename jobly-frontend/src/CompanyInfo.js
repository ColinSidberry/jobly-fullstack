import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import JobList from "./JobList";
import axios from 'axios';

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
    const { handle } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(function getCompanyInfoOnMount() {
        async function getCompanyInfo() {
            const company = await axios.get('FIXMEEEEEE TO CLASS METHOD'); //use handle
            setCompany(company);
        }
        getCompanyInfo();
    }, []);

    return (
        <div>
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            <JobList jobs={company.jobs} />
        </div>
    );
}

export default CompanyInfo;