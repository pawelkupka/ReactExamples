import React, { useState } from "react";
import MyContext from "./MyContext";
import MyConsumer1 from "./MyConsumer1";
import MyConsumer2 from "./MyConsumer2";

const MyProvider = () => {
    const [context, setContext] = useState({
        value: "Provider1 value"
    });

    return (
        <MyContext.Provider value={[context, setContext]}>
            <h1>MyProvider</h1>
            <MyConsumer1 />
            <MyConsumer2 />
        </MyContext.Provider>
    );
}

export default MyProvider;
