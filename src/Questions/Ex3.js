import React, { useState } from 'react'

export default function Ex3() {

    const [Age, setAge] = useState("")
    const [Err, setErr] = useState(false)

    const error = "You are eligible";

    const handleClick = () => {
        setErr(false)
        if (Age < 18) {
            alert("Your Age is less than 18");
        }
        else {
            setErr(true)
        }

    }
    const handleChange = (event) => {
        // console.log(event.target.value)
        // setAge(false)
        setAge(event.target.value)
    }


    return (
        <div>
            <h1>Age Checker</h1>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Check</button>
            <p>{Err ? error : ""}</p>
        </div>
    )
}
