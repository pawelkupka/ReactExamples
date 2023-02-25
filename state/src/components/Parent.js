import React from "react";
import Child from "./Child";

const Parent = () => {
    const handleClickOccured = (e) => {
        console.log(e);
    }

    return (
        <div>
            <Child clickOccured={handleClickOccured}></Child>
        </div>
    );
}

export default Parent;
