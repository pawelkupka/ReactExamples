import React, { useContext } from "react";
import MyContext from "./MyContext";

const MyConsumer2 = () => {
    const [context, setContext] = useContext(MyContext);

    return (
        <div>
            <h1>MyConsumer2</h1>
            {context.value}
            <button onClick={() => setContext({ value: "MyConsumer2 Value" })}>Change2</button>
        </div>
    );
}

export default MyConsumer2;
