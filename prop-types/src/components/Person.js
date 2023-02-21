import React from "react";
import PropTypes from "prop-types";

const Person = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Is male: {props.isMale.toString()}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    isMale: PropTypes.bool,
    age: PropTypes.number
}
Person.defaultProps = {
    name: "John Dow",
    isMale: true,
    age: 44
}

export default Person;