import { React } from "react";
import './JobCard.css';

/**Renders a job card. 
 * 
 * Props: job
 * State: none
 * 
 * JobList -> JobCard
 */
function JobCard({ job }) {
    const { title, companyHandle } = job;
    let { salary, equity } = job;
    equity = (equity) ? equity : null;
    salary = (salary) ? salary : null;
    
    return (
        <div className="Card">
            <h3 className="header">{title}</h3>
            <h6>{companyHandle}</h6>
            {salary && <p>Salary: {salary}</p>}
            {equity && <p>Equity: {equity}</p>}
        </div>
    );
}


export default JobCard;