
// 1. A counter that increments when a button is clicked.
// 2. An input field where users can type their name.
// 3. The document title will update to show the current count.


import { React, useState,useEffect } from "react"



export const UseHookChallenge = () => {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("")

    const handleInput = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {

        document.title = `Count: ${counter}`;

        console.log(`my name is ${name}`)

    }, [counter,name])

    return (
        <>
            <div className="my-10">
                <h1>Count:{counter}</h1>
                <button onClick={() => setCounter(counter + 1)} className="bg-green-700 p-3 text-white text-xl">Click me</button>
            </div>

            <div>
                <h2 className="text-xl my-5 font-bold">My Name is <span> {name}</span></h2>
                <input name="name" value={name} type="text" onChange={handleInput} className="border-2 py-3 px-4" />
            </div>

        </>



    )
}