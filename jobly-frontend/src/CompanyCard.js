import React from "react";
import { Link } from 'react-router-dom';
import './CompanyCard.css';

/**Renders company card 
 * 
 * Props: {company}
 * State: none
 * 
 * CompaniesContainer -> CompanyList -> CompanyCard
 * 
 */
function Company({ company }) {
    const { name, description, logoUrl } = company;
    return (
        <Link to={`/companies/${company.handle}`}>
            <div className="Card shadow-sm p-3 mb-5 bg-white rounded">
                <h3 className="header">
                    {name}
                    {logoUrl && <img src={logoUrl} alt="company img" />}
                </h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default Company;

// return (
//     <Link to={`/companies/${company.id}`}>
//         <div className="Card">
//             <h3 className="header">
//                 {name}
//                 {logoUrl && <img src={logoUrl} alt="company img" />}
//             </h3>
//             <p>{description}</p>
//         </div>
//     </Link>
// );