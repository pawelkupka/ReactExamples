import React, { useEffect, useRef } from "react";

const AutoFocus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        focus();
    }, []);

    const focus = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default AutoFocus;