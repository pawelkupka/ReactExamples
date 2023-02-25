import React from "react";
import PropTypes from "prop-types";

const MyTextArea = (props) => {
    const { label, name, value, className, onChange, error } = props;

    return (
        <div>
            <label htmlFor="name">{label}: </label>
            <textarea id={name} name={name} value={value} className={className} onChange={onChange}></textarea>
            {error && <div>ERR: {error}</div>}
        </div>
    );
}
MyTextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default MyTextArea;
