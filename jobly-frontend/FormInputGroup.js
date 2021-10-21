import React from "react";

function FormInputGroup({ inputField, inputValue, handleChange }) {
    return (
        <div>
            <label htmlFor={inputField}>{inputField}</label>
            <input
                id="searchTerm"
                name="searchTerm"
                placeholder="Enter Search Term..."
                value={inputValue}
                onChange={handleChange}
                disabled="disabled"
            />
        </div>
    );
}
