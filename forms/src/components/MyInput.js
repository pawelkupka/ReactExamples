import React from "react";
import PropTypes from "prop-types";

const MyInput = (props) => {
    const { label, type, name, value, className, onChange, error } = props;

    return (
        <div>
            {label && <label htmlFor="name">{label}: </label>}
            <input id={name} type={type} name={name} value={value} className={className} onChange={onChange} />
            {error && <div>ERR: {error}</div> }
        </div>
    );
}
MyInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default MyInput;
