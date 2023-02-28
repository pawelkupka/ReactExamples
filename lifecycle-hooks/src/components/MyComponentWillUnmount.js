import React, { useEffect } from "react";

const MyComponentWillUnmount = (props) => {
    useEffect(() => {
        console.log("MyComponentWillUnmount did mount", props);
        return () => {
            console.log("MyComponentWillUnmount will unmount");
        }
    }, []);

    return (
        <div>Hello MyComponentWillUnmount {props.value}</div>
    );
}

export default MyComponentWillUnmount;
