import React, { useState } from 'react'

function State() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(() => count+1); //more safe

    }

    return (
        <>
        <section className='main-div'>

            <h1>{count}</h1>
            <button className='c-div' onClick={handleClick}>Increment</button>

        </section>

       <ChildComp count={count}/>

        </>
    )
}

export default State;


const ChildComp = (props) => {

  console.log("Child component rendered");
    return (

        <>
            <h1>Child component {props.count}</h1>
        </>
    )

}


