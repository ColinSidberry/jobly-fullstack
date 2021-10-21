import React from "react";

//pass in type as property. For disabled, move logi
function FormField({ input, handleChange }) {
    return (
        <div>
            <label htmlFor={input.field}>{input.label}</label>
            <input
                id={input.field}
                name={input.field}
                value={input.value}
                onChange={handleChange}
                disabled={(input.field === "username") ? "disabled" : ""}
                type={(input.field === "password") ? "password" : "text"}
            />
        </div>
    );
}

export default FormField;
