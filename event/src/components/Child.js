import React from "react";

const Child = (props) => {
    const handleClick = () => {
        props.clickOccured(new Date());
    }

    return (
        <div>
            <button onClick={handleClick}>Click me 1</button>
            <button onClick={() => props.clickOccured(new Date())}>Click me 2</button>
        </div>
    );
}

export default Child;
