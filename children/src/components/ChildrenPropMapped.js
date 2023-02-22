import React, { Children } from "react";

const ChildrenPropMapped = (props) => {
    const { children } = props;

    const mappedChildren = Children.map(children, child =>
        <div className="Row">
            {child}
        </div>
    );

    return (
        <div>
            <h1>Children Component</h1>
            {mappedChildren}
        </div>
    );
}

export default ChildrenPropMapped;
