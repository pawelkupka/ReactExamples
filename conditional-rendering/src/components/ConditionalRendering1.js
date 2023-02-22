import React, { useState } from "react";

const ConditionalRendering1 = () => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <h1>ConditionalRendering1</h1>
            <button onClick={handleClick}>Switch</button>
            {visible && <p>visible</p>}
        </div>
    );
}

export default ConditionalRendering1;
