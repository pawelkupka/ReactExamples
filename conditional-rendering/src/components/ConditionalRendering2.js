import React, { useState } from "react";

const ConditionalRendering2 = () => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <h1>ConditionalRendering2</h1>
            <button onClick={handleClick}>Switch</button>
            {visible ? <p>visible</p> : <p>hidden</p>}
        </div>
    );
}

export default ConditionalRendering2;
