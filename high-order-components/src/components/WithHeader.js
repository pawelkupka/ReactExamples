import React from "react";

const withHeader = Component => (props) => {
    const { header } = props;

    return (
        <div>
            <h1>{header}</h1>
            <Component {...props} />
        </div>
    );
}

export default withHeader;
