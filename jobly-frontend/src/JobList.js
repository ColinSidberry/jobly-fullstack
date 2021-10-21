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
        // FIXME
        //State: Get list of jobs user has applied to
        // if job user applied to in job list
            // pass in true to applied prop
        // else
            // pass in false to applied prop
        // add applied prop to JobCard
        jobList.map(
            job => <JobCard job={job} key={job.id} />)
    );
}

export default JobList;