import React from "react";

function FormField({
    inputName,
    inputValue,
    labelName,
    handleChange,
    type = "text",
    disabled = false }) {
    return (
        <div>
            <label className="form-label" htmlFor={inputName}>{`${labelName}: `}</label>
            <input
                className="form-control"
                id={inputName}
                name={inputName}
                value={inputValue}
                onChange={handleChange}
                disabled={disabled}
                type={type}
            />
        </div>
    );
}

export default FormField;
