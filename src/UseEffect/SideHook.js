import { React, useEffect, useState } from "react";

export default function SideHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        setInterval(() => {

            const date = new Date();

            setCount(date.toLocaleTimeString());

        }, 1000)
     
    }, [])



    return (
        <>
        <h1>{count}</h1>
            

        </>

    )
}