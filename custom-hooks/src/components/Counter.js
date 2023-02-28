import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
    const counter = useCounter(5);

    return (
        <div>
            <p>Counter: {counter.counter}</p>
            <p><button onClick={counter.increase}>Increment</button></p>
            <p><button onClick={counter.decreace}>Decrement</button></p>
            <p><button onClick={counter.reset}>Reset</button></p>
        </div>
    );
}

export default Counter;
