import React, { useEffect, useState } from "react"

export const HowNotToFetchApi = () => {

    const [apiData, setApiData] = useState([])

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setApiData(data))
            .catch((error) => console.log(error));

    return (
        <>
            <ul>
                {apiData.map((item, index) => {
                    return <li key={index}>{item.title}</li>
                })}

            </ul>

        </>
    )
}