import React, { useState } from "react";

const useCounter = (startValue) => {
    const [counter, setCounter] = useState(startValue);

    return {
        counter: counter,
        increase: () => setCounter(counter => counter + 1),
        decreace: () => setCounter(counter => counter - 1),
        reset: () => setCounter(startValue)
    };
}

export default useCounter;
