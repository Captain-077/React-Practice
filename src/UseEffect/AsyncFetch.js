import React from "react"
import { useState, useEffect } from "react"

export const AsyncFetch = () => {

    const [pokemon, setPokemon] = useState(null)

    const API = "https://pokeapi.co/api/v2/pokemon/"

    const FetchApi = async () => {

        try {
            const res = await fetch(API)
            const Data = await res.json()
            console.log(Data);
            setPokemon(Data);
        }

        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        FetchApi()
    }, [])

    if (!pokemon) {
        return <h1>Loading....</h1>
    }
    return (
        <>
            <ul>
                {pokemon.results?.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>

        </>
    )

}