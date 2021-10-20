import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
import JobList from './JobList';
import JoblyApi from "./api";
import Error from "./Error";
import "./JobsContainer.css";

/**Renders list of jobs. 
 * Calls API for list of jobs.
 * 
 * Props: none
 * State: jobList = [{ id, title, salary, equity, companyHandle, companyName }, ...]
 *        searchTerm = "searchTerm for job title"
 *        errors = [error1, ...]
 * Routes -> JobsContainer -> JobList
 * 
 * Location: /jobs
 */
function JobsContainer() {
    const [jobList, setJobList] = useState(null);
    const [errors, setErrors] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);

    //set companyList after initial and searchTerm triggered renders
    useEffect(function fetchJobsWhenMounted() {
        async function fetchJobs() {
            try {
                const jobsResult = await JoblyApi.getJobs(searchTerm);
                setJobList(jobsResult);
            } catch (err) {
                setErrors(err);
            }
        }
        fetchJobs();
    }, [searchTerm]);

    //handles job query search
    function handleSearch(search) {
        setSearchTerm(search);
    }

    if (errors) return <Error errors={errors}/>
    else if (!jobList) return <i>Loading...</i>
    else return (
        <div className="JobsContainer">
            <SearchForm handleSearch={handleSearch} />
            {jobList.length === 0
                ? <h3>No jobs, come again later</h3>
                : <JobList jobList={jobList} />
            }
        </div>

    );
}

export default JobsContainer;
