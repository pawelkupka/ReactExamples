import React, { useContext } from "react";
import MyContext from "./MyContext";

const MyConsumer1 = () => {
    const [context, setContext] = useContext(MyContext);

    return (
        <div>
            <h1>MyConsumer1</h1>
            {context.value}
            <button onClick={() => setContext({ value: "MyConsumer1 Value"})}>Change1</button>
        </div>
    );
}

export default MyConsumer1;
