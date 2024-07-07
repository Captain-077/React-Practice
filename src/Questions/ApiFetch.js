import React, { useEffect } from 'react'

export default function ApiFetch() {




    useEffect(() => {

        setTimeout(() => {
            const fetch = fetch("https://randomuser.me/api");
            console.log(fetch);

        },2000)
           
    }, [])



    return (
        <div><button>fetch</button></div>
    )
}
