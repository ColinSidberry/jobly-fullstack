import { React } from "react";
import './JobCard.css';

/**Renders a job card. 
 * 
 * Props: job = { id, title, salary, equity, companyHandle, companyName }
 * State: none
 * 
 * JobList -> JobCard
 */
function JobCard({ job }) {
    const { title, companyHandle } = job;
    let { salary, equity } = job;
    equity = (equity) ? equity : null;
    salary = (salary) ? salary : null;
    // FIXME
    // Take in applied prop
    // add applied button
    return (
        <div className="Card shadow-sm p-3 mb-5 bg-white rounded">
            <h3 className="header">{title}</h3>
            <h6>{companyHandle}</h6>
            {salary && <p>Salary: {salary}</p>}
            {equity && <p>Equity: {equity}</p>}
        </div>
    );
}


export default JobCard;