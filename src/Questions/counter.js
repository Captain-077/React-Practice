import React from "react"
import {useState} from "react"

export const Counter = () => {
const [count,setCount] = useState(0);

const handleInc = () => {

setCount(count + 1);

}

const handleReset = () => {
setCount(0)

}

return (

<>
<p>{count}</p>
<button onClick={handleInc}>Increase</button>
<button onClick={handleReset}>Reset</button>




</>







)






}