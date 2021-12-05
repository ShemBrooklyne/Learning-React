import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function RenderCounter() {
    const [showCounter, setShowCounter] = useState(false);

    return (
        <div className="RenderCounter">
            <h1>My App</h1>
            <button onClick={() => setShowCounter(!showCounter)}>
                {showCounter ? "Hide Counter" : "Show Counter"}
            </button>
            {showCounter && <Counter/>}
        </div>
    );
}

export default RenderCounter;