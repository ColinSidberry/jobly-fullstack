import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
import JobList from './JobList';
import JoblyApi from "./api";

/**Renders list of jobs. 
 * Calls API for list of jobs.
 * 
 * Props: none
 * State: jobList, searchTerm
 * Routes -> JobsContainer -> JobList
 * 
 * Location: /jobs
 */
function JobsContainer() {
    const [jobList, setJobList] = useState(null);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);

    //set companyList after initial and searchTerm triggered renders
    useEffect(function fetchJobsWhenMounted() {
        async function fetchJobs() {
            try {
                const jobsResult = await JoblyApi.getJobs(searchTerm);
                setJobList(jobsResult);
            } catch (err) {
                setError(err[0]);
            }
        }
        fetchJobs();
    }, [searchTerm]);

    //handles job query search
    function handleSearch(search) {
        setSearchTerm(search);
    }

    if (error) return <b>Error fetching jobs data: {error}</b>
    else if (!jobList) return <i>Loading...</i>
    else return (
        <div>
            <SearchForm handleSearch={handleSearch} />
            <JobList jobList={jobList} />
        </div>

    );
}

export default JobsContainer;
