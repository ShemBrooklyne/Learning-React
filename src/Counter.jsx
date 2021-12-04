import React, {useState} from "react";

const Counter = () => {
    //logic or body
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount(count - 1);
    }
    return(
        <React.Fragment>
            <p>The count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </React.Fragment>
    );
};

export default Counter;