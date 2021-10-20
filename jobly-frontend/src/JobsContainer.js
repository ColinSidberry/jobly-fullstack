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

    useEffect(function fetchJobsWhenMounted() {
        async function fetchJobs() {
            try {
                const jobsResult = await JoblyApi.getJobs(searchTerm);
                setJobList(jobsResult);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchJobs();
    }, [searchTerm]);

    //handles job query search
    function handleSearch(search) {
        setSearchTerm(search);
    }

    if (!jobList) return <i>Loading...</i>
    else if (error) return <b>Error fetching jobs data: {error}</b>
    else return (
        <div>
            <SearchForm search={handleSearch} />
            <JobList jobs={jobList} />
        </div>

    );
}

export default JobsContainer;
