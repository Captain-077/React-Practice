import React, { useEffect, useState } from 'react'

function Ex12() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        setCount(count + 1);

    }, [])


    useEffect(() => {

        setCount(count + 2);

    }, [])


    return (
        <>
            <div>Use state count</div>
            <p>{count}</p>
        </>
    )
}

export default Ex12