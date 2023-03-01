import React, { useState, useMemo } from "react";

const MyMemo = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const handleChangeA = () => {
        setA(a + 1);
    }

    const handleChangeB = () => {
        setB(b + 1);
    }

    const displayAB = (a, b) => {
        return (<span><b>a={a}</b>, <b>b={b}</b></span>);
    };

    const displayABMemoA = useMemo(() => {
        return displayAB(a, b);
    }, [a]);


    return (
        <div>
            <p>displayAB: {displayAB(a, b)}</p>
            <p>displayMemoA: {displayABMemoA} (updates only when "a" changes)</p>
            <button onClick={handleChangeA}>Change A</button>
            <button onClick={handleChangeB}>Change B</button>
        </div>
    );
}

export default MyMemo;
