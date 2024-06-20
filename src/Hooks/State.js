import React, { useState } from 'react'

function State() {
    const [count, setCount] = useState(0)




    const handleClick = () => {
        setCount(() => count+1); //more safe

    }


    return (
        <section className='main-div'>

            <h1>{count}</h1>
            <button className='c-div' onClick={handleClick}>Increment</button>

        </section>
    )
}

export default State