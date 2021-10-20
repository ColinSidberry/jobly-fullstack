import React from "react";
import JobCard from "./JobCard";

/**Renders list of jobs. 
 * 
 * Props: [{ id, title, salary, equity, companyHandle, companyName }, ...]
 * State: none
 * 
 * (JobsContainer, CompanyInfo) -> JobList -> JobCard
 * 
 */
function JobList({ jobList }) {
    return (
        jobList.map(
            job => <JobCard job={job} key={job.id} />)
    );
}

export default JobList;