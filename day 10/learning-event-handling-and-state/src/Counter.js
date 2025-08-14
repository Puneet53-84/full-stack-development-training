import { useState } from 'react'

function Counter() {
    // here count is a simple variable which does not provide memory
    // let count = 0; 

    // count is a state which provide memory and function setCount to update count state
    // let [myState, setMyState] = useState(default value)
    // 1st word of state should be smaller
    let [count, setCount] = useState(10); 

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    )
}

export { Counter }