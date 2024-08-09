import React, { useContext } from "react"
import { BioContext } from "./Index"

export const Home = () => {

    const name  = useContext(BioContext)

    return <p>Hello my name is {name} </p>
}