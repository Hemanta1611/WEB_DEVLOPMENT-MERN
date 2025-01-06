import { useState } from "react";

export default function Counter() {
    // let count = 0;

    // let [stateVariable, setStateVariable] = useState(0);
    let [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
        setCount(count + 1); // it will work once only.. i.e. only +1 will happen not +2 even if 2 times we have use setCount
        // to work we can do callback as it is an asynchronous method
        setCount((currentCount) => currentCount + 1);
        console.log(count);
        setCount(27);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <h3>
                <button onClick={increment}>Increment</button>
            </h3>
        </div>
    );
}
