import React from "react";
import ChildrenProp from "./ChildrenProp";
import ChildrenPropMapped from "./ChildrenPropMapped";

const Parent = () => {
    return (
        <div>
            <ChildrenProp>
                <strong>ABCD1</strong>
                <strong>ABCD2</strong>
            </ChildrenProp>

            <ChildrenPropMapped>
                <code>XYZ1</code>
                <code>XYZ2</code>
            </ChildrenPropMapped>
        </div>
    );
}

export default Parent;
