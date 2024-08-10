import React from "react"
import { useEffect, useState } from "react"

export const RightFetchAPI = () => {
    const [apiData, setApidata] = useState(null)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((res) => res.json())
            .then((data) => setApidata(data))
            .catch((error) => console.log(error))
    }, [])


    return (
        <>

            <ul>
                {apiData.results?.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })}

            </ul>


        </>
    )
}