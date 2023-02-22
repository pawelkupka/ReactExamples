import React, { useRef } from "react";

const SimpleRef = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={onClick}>Focus</button>
        </div>
    );
}

export default SimpleRef;
