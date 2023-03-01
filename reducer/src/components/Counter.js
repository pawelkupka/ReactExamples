import React, { useReducer } from "react";
import { INCREASE, DECREASE, RESET } from "./counterActions";
import counterReducer from "./counterReducer";

const Counter = () => {
    const initialState = {
        counter: 0
    };

    const [counterState, dispatch] = useReducer(counterReducer, initialState);

    const increase = () => {
        dispatch({ type: INCREASE });
    };
    const decrease = () => {
        dispatch({ type: DECREASE });
    };
    const reset = () => {
        dispatch({ type: RESET });
    };

    return (
        <div>
            <p>Counter: {counterState.counter}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
