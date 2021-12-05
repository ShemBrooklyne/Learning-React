import React, {useState, useEffect} from "react";

const Counter = () => {
    //logic or body
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount(count - 1);
    }

    //component life cycle mounting|updating|unmount
    useEffect(() => {
        console.log(`This count has updated to ${count}`);
        return () => {
            console.log("This component has unmounted");
        };
    }, [count])
    return(
        <React.Fragment>
            <h6>Counter</h6>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </React.Fragment>
    );
};

export default Counter;