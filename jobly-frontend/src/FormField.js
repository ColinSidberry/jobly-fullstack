import React from "react";

//FIXME:pass in type as property. For disabled, move logi
function FormField({
    inputName,
    inputValue,
    labelName,
    handleChange,
    type = "text",
    disabled = false }) {
    return (
        <div>
            <label htmlFor={inputName}>{labelName}</label>
            <input
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
