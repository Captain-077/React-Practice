import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return () => clearInterval(timer)

    },[])

    // const handleClick = () => {
    //     setCount(count + 1)
    //     setTimeout(() => {
    //         alert(count)
    //     }, 3000)

    // }

    return <div>
        {/* <button onClick={handleClick}> Click</button> */}
        <p>Count: {count}</p>

    </div>;
}
export default ExampleComponent