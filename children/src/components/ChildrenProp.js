import React from "react";

const ChildrenProp = (props) => {
    const { children } = props;

    return (
        <div>
            <h1>children prop</h1>
            <p>{children}</p>
        </div>
    );
}

export default ChildrenProp;
