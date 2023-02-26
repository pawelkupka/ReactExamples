import React from "react";
import { useField } from "formik";

const MyCheckBox = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox"});

    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} type="checkbox" />
            {meta.error && <small>{meta.error}</small>}
        </div>
    );
}

export default MyCheckBox;
