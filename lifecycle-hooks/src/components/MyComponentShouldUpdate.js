import React, { useEffect } from "react";

const MyComponentShouldUpdate = React.memo((props) => {
    return (
        <div>Hello MyComponentShouldUpdate {props.value}</div>
    );
}, (prevProps, nextProps) => {
    console.log("MyComponentShouldUpdate should update");
    return true; //true znaczy ze sa equal, a wiec nie robi update
});

export default MyComponentShouldUpdate;
