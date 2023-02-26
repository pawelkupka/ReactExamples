import React from "react";
import { useField } from "formik";

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.error && <small>{meta.error}</small>}
        </div>
    );
}

export default MySelect;
