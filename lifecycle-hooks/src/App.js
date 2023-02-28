import './App.css';
import React, { useState, useEffect } from "react";
import MyComponentDidMount from "./components/MyComponentDidMount";
import MyComponentDidUpdate from "./components/MyComponentDidUpdate";
import MyComponentShouldUpdate from "./components/MyComponentShouldUpdate";
import MyComponentWillUnmount from "./components/MyComponentWillUnmount";

function App() {
    let [value, setValue] = useState(1);

    useEffect(() => {
        setInterval(() => {
            setValue(value++);
            console.log("value change: ", value);
        }, 5000);
    }, []);

    return (
        <div className="App">
            <MyComponentDidMount value={value} />
            <MyComponentDidUpdate value={value} />
            <MyComponentShouldUpdate value={value} />
            <MyComponentWillUnmount value={value} />
        </div>
    );
}

export default App;
