import React, {useState} from "react";

/**Handles Form Queries. 
 * 
 * Props: handleSearch fn
 * State: query-string
 * (CompaniesContainer, JobsContainer) -> SearchForm
 */
function SearchForm({handleSearch}) {
 const [query, setQuery] = useState("");

 function handleChange(evt) {
   setQuery(evt.target.value);
 }
 
 function handleSubmit(evt) {
   evt.preventDefault();
   handleSearch(query);
 }

 return (
     <form onSubmit={handleSubmit}>
       <input
           id="query"
           name="query"
           placeholder="Enter Search Term..."
           value={query}
           onChange={handleChange}
       />
       <button className="btn btn-primary">Search</button>
     </form>
 );
}

export default SearchForm;