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
function JobList({jobList}) {
    return (
        <div>
            {
                jobList.map(
                    job => <JobCard job={job} key={job.id} />)
            }
        </div>
    );
}

export default JobList;