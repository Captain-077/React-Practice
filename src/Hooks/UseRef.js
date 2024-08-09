import React, { useRef } from "react"

export const UseRef = () => {

    const username = useRef(null)
    const password = useRef(null)

const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value)
    console.log(password.current.value)
}



    return (
        <div className="bg-gray-900 h-screen w-screen">

            <h1 className="text-white">Hello useRef</h1>

            <form className="flex flex-col w-80 m-auto my-10" onSubmit={handleFormSubmit}>
                <input name="username" type="text" className="p-3" ref={username}/>
                <input name="password" type="password" className="my-5 p-3" ref={password}/>
                <button className="bg-green-100 text-black p-2">Submit</button>
            </form>

        </div>
    )
}