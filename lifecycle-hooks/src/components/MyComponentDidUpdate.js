import React, { useEffect } from "react";

const MyComponentDidUpdate = (props) => {
    useEffect(() => {
        console.log("MyComponentDidUpdate did update", props);
    });

    return (
        <div>Hello MyComponentDidUpdate {props.value}</div>
    );
}

export default MyComponentDidUpdate;
