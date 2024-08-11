import React from "react"
import { useEffect, useState } from "react"

export const RightFetchAPI = () => {
    const [apiData, setApidata] = useState(null)
    const[loading,setLoading] = useState(true)
    const Api = "https://pokeapi.co/api/v2/pokemon/"

    const FetchData = () => {
        fetch(Api)
            .then((res) => res.json())
            .then((data) => setApidata(data))
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }

    useEffect(() => {
        FetchData()
        setLoading(false)
    }, [])

    console.log(apiData);

    if (loading)  return <h1>Loading....</h1>
    

    if (apiData) {
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
}