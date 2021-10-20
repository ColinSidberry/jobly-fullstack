import React from "react";
import JobCard from "./JobCard";

/**Renders list of jobs. 
 * 
 * Props: jobList
 * State: none
 * 
 * (JobsContainer, CompanyInfo) -> JobList -> JobCard
 * 
 */
function JobList({jobsList}) {
    return (
        <div>
            {
                jobsList.map(
                    job => <JobCard job={job} key={job.id} />)
            }
        </div>
    );
}

export default JobList;