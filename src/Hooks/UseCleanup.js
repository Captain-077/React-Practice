import { React, useState, useEffect } from "react"

export const UseCleanup = () => {
    const [count, setcount] = useState(0)

    useEffect(() => {

        const timer = setInterval(() => {
            setcount((prev) => prev + 1);
        }, 1000)

        return () => clearInterval(timer)
    }, [])


    return (
        <>
            <h1>My Timer</h1>
            <p>{count}</p>
        </>



    )
}