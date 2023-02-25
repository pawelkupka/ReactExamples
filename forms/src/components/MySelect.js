import React from "react";
import PropTypes from "prop-types";

const MySelect = (props) => {
    const { label, name, value, options, className, onChange, error } = props;

    return (
        <div>
            <label htmlFor="name">{label}: </label>
            <select id={name} name={name} value={value} className={className} onChange={onChange}>
                {options.map((option, index) => (<option key={index} value={option.id}>{option.name}</option>))}
            </select>
            {error && <div>ERR: {error}</div>}
        </div>
    );
}
MySelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default MySelect;
