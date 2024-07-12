import React, { useState } from 'react'

export default function Todo() {
    const [text, setText] = useState("")
    const [task, setTask] = useState([])


    const handlechange = (e) => {
        if (e.target.value !== " ")
            setText(e.target.value);
    }

    const handleClick = () => {
        setTask(prev => [...prev, text]);
        setText("");
    }

    const handleDelete = (target) => {

        let taskCopy = task

      const updatedArr = taskCopy.filter((item, index) => {
            return target !== index
        })

        setTask(updatedArr);

    }



    return (
        <>
            <h1>Todo List Test</h1>
            <input type="text" value={text} placeholder='enter your task' onChange={(e) => handlechange(e)} className='p-2 bg-grey-500 border-2' />
            <button onClick={handleClick} className='p-2 bg-green-500 text-white'>Add</button>
            {
                task.map((item, index) => {
                    return (
                        <div className={`flex justify-center my-10`} key={index}>
                            <li className='mx-5'>{item}</li>
                            <button className='p-2 bg-red-500 text-white' onClick={() => handleDelete(index)}>Delete</button>
                        </div>


                    )
                })
            }

        </>

    )
}
