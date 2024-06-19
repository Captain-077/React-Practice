import React, { useEffect, useState } from 'react'

function Ex1() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        setCount(count + 1);

    }, [])



    return (
        <>
            <div>Use state count</div>
            <p>{count}</p>
        </>
    )
}

export default Ex1