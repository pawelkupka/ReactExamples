import React, { useEffect } from "react";

const MyComponentDidMount = (props) => {
    useEffect(() => {
        console.log("MyComponentDidMount did mount", props);
    }, []);

    return (
        <div>Hello MyComponentDidMount {props.value}</div>
    );
}

export default MyComponentDidMount;
