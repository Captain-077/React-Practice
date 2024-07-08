import React, { useState } from 'react'

export default function Todo() {
    const [text, setText] = useState("")
    const [task, setTask] = useState([])


    const handlechange = (e) => {
        if (e.target.value !== " ")
            setText(e.target.value);
    }

    const handleClick = () => {
        setTask(prev => [...prev,text]);
    }

    return (
        <>
            <h1>Todo List Test</h1>
            <input type="text" placeholder='enter your task' onChange={(e) => handlechange(e)} />
            <button onClick={handleClick}>Add</button>
            {
                task.map((item,index) => {
                   return <li key={index}>{item}</li>
                })
            }

        </>

    )
}
