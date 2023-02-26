import React from "react";
import { useField } from "formik";

const MyInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <select {...field} {...props}>
                {props.options.map((option, index) => (
                    <option key={index} value={option.id}>{option.name}</option>
                ))}
            </select>
            {meta.error && <small>{meta.error}</small>}
        </div>
    );
}

export default MyInput;
