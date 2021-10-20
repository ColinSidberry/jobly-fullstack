import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
import JobList from './JobList';

/**Renders list of jobs. 
 * Calls API for list of jobs.
 * 
 * Props: none
 * State: jobList, searchTerm
 * Routes -> Jobs -> JobList
 * 
 * Location: /jobs
 */
function Jobs() {
    const [jobList, setJobList] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);

    // useEffect(
    //     setJobList(newList)
    // )

    function handleSearch(search) {
        setSearchTerm(search);
    }

    return (
        <div>
            <SearchForm search={handleSearch} />
            <JobList jobs={jobList} />
        </div>

    );
}

export default Jobs;

//think about component names!!
//CompanyCard and JobCard ... --> card for view components
//CompanyPage --> pages for routes